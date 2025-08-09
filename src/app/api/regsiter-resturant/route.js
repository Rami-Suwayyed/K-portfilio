import { NextResponse } from "next/server";
import { Resend } from "resend";
import dbConnect from "../../../lib/dbConnect";
import Resturant from "../../../models/Resturants";
import ResturantThankYouEmail from "../../../emails/ResturantThankYouEmail";
import AdminResturant from "../../../emails/AdminContact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { name, nameOfOwner, email, phone, location } = body;

        if (!name || !nameOfOwner || !email || !phone || !location) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        if (name.length < 2 || name.length > 50) {
            return NextResponse.json({ error: 'Name must be between 2 and 50 characters' }, { status: 400 });
        }

        if (nameOfOwner.length < 5 || nameOfOwner.length > 100) {
            return NextResponse.json({ error: 'Name of owner must be between 5 and 100 characters' }, { status: 400 });
        }

        if (phone.length < 10 || phone.length > 10) {
            return NextResponse.json({ error: 'Phone must be 10 digits' }, { status: 400 });
        }

        if (location.length < 10 || location.length > 100) {
            return NextResponse.json({ error: 'Location must be between 10 and 100 characters' }, { status: 400 });
        }

        const resturant = new Resturant({ name, nameOfOwner, email, phone, location });
        await resturant.save();

        try {
            const { data: emailData, error: emailError } = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: `Thank you for registering your resturant, ${nameOfOwner}!`,
                react: ResturantThankYouEmail({ name, nameOfOwner, email }),
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
                subject: `New resturant registration: ${name}`,
                react: AdminResturant({ name, nameOfOwner, email, phone, location }),
            });
        } catch (adminEmailErr) {
            console.error('Admin email sending failed:', adminEmailErr);
        }

        return NextResponse.json({ message: 'Resturant registered successfully' }, { status: 201 });
    } catch (error) {
        console.error('Resturant registration error:', error);
        return NextResponse.json({ error: 'Failed to register resturant' }, { status: 500 });
    }
}