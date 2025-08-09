import { NextResponse } from "next/server";
import { Resend } from "resend";
import Welcome from "../../../emails/Welcome";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

    if(!email || !name || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'hamzahhisham306@gmail.com',
        subject: 'Hello World',
        react: <Welcome />
    })
    return NextResponse.json({message: 'Email sent successfully', data, error });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
    
}