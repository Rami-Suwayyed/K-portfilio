import { NextResponse } from "next/server";
import { Resend } from "resend";
import dbConnect from "../../../lib/dbConnect";
import Contact from "../../../models/Contact";
import ContactThankYouEmail from "../../../emails/Contact";
import AdminContact from '../../../emails/AdminContact';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    await dbConnect();

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get("x-real-ip") || 'unknown';
    const userAgent = request.headers.get("user-agent") || 'unknown';

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 50 characters' },
        { status: 400 }
      );
    }

    if (subject.length < 5 || subject.length > 100) {
      return NextResponse.json(
        { error: 'Subject must be between 5 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 500) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 500 characters' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      ipAddress: ip,
      userAgent: userAgent
    };

    const contact = new Contact(contactData);
    await contact.save();

    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'onboarding@resend.dev', 
        to: email,
        subject: `Thank you for contacting us, ${name}!`,
        react: ContactThankYouEmail({ name, subject, message }),
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
      }
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr);
    }

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'hamzahhisham306@gmail.com', 
        subject: `New Contact Form Submission: ${subject}`,
        react: AdminContact({ name, email, subject, message, ipAddress: ip, submittedAt: new Date().toISOString() }),
      });
    } catch (adminEmailErr) {
      console.error('Admin email sending failed:', adminEmailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: contact._id
    }, { status: 201 });

  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'A submission with this information already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}