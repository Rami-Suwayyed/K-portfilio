import { NextResponse } from "next/server";
import { Resend } from "resend";
import dbConnect from "../../../lib/dbConnect";
import Captine from "../../../models/Captines";
import CaptineThankYouEmail from "../../../emails/CaptineThankYou";
import AdminContactNotificationEmail from "../../../emails/AdminContact";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI environment variable is not set');
            return NextResponse.json({
                error: 'Database configuration error'
            }, { status: 500 });
        }

        await dbConnect();

        const body = await request.json();
        const { fullName, vehicleType, vehicleModel, phone, phoneType, address } = body;

        if (!fullName || !vehicleType || !vehicleModel || !phone || !phoneType || !address) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        if (fullName.length < 2 || fullName.length > 50) {
            return NextResponse.json({ error: 'Full name must be between 2 and 50 characters' }, { status: 400 });
        }

        if (vehicleType.length < 1 || vehicleType.length > 50) {
            return NextResponse.json({ error: 'Type of vehicle must be between 1 and 50 characters' }, { status: 400 });
        }

        if (vehicleModel.length < 2 || vehicleModel.length > 50) {
            return NextResponse.json({ error: 'Vehicle model must be between 2 and 50 characters' }, { status: 400 });
        }

        if (phone.length < 10 || phone.length > 15) {
            return NextResponse.json({ error: 'Phone number must be between 10 and 15 characters' }, { status: 400 });
        }

        if (phoneType.length < 1) {
            return NextResponse.json({ error: 'Phone type is required' }, { status: 400 });
        }

        if (address.length < 10 || address.length > 200) {
            return NextResponse.json({ error: 'Address must be between 10 and 200 characters' }, { status: 400 });
        }

                const captine = new Captine({ 
            fullName: fullName.trim(), 
            typeOfVehicle: vehicleType.trim(), 
            vehicleModel: vehicleModel.trim(), 
            phoneNumber: phone.trim(), 
            phoneType: phoneType.trim(), 
            address: address.trim() 
        });

        await captine.save();

        const forwardedFor = request.headers.get('x-forwarded-for');
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0] :
            request.headers.get('x-real-ip') ||
            'Unknown';

        if (resend && process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: 'hamzahhisham306@gmail.com',
                    subject: `Thank you for registering, ${fullName}!`,
                    react: CaptineThankYouEmail({ fullName, vehicleType, vehicleModel, phone, phoneType, address }),
                });
            } catch (emailErr) {
                console.error('Thank you email sending failed:', emailErr);
            }

            try {
                const message = `A new captain has registered with the following details:
- Full Name: ${fullName}
- Vehicle Type: ${vehicleType}
- Vehicle Model: ${vehicleModel}
- Phone: ${phone}
- Phone Type: ${phoneType}
- Address: ${address}
`;

                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: 'hamzahhisham306@gmail.com',
                    subject: 'New Captain Registration',
                    react: AdminContactNotificationEmail({
                        name: fullName,
                        email: 'captain@example.com',
                        subject: "New Captain Registration",
                        message,
                        ipAddress,
                        submittedAt: new Date().toLocaleString()
                    }),
                });
            } catch (emailErr) {
                console.error('Admin notification email sending failed:', emailErr);
            }
        } else {
            console.warn('RESEND_API_KEY not configured, skipping email notifications');
        }

        return NextResponse.json({ message: 'Captain registered successfully' }, { status: 200 });
    } catch (error) {
        console.error('Registration error:', error);

        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return NextResponse.json({
                error: 'Validation failed',
                details: validationErrors
            }, { status: 400 });
        }

        if (error.code === 11000) {
            return NextResponse.json({
                error: 'Captain with this information already exists'
            }, { status: 409 });
        }

        return NextResponse.json({
            error: 'Failed to register captain',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, { status: 500 });
    }
}