import { EmailTemplate } from '../../components/email-template';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    /* data from client */
    const body = await req.json();

    /* validate data from client */
    if ( !body.subject || body.message.length === 0) {
        return NextResponse.json({ message: "Email, subject, and message are required" }, {
            status: 400
        })
    }

    /* send email */
    const { email, subject, message } = body;
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['chrisboydstun@gmail.com'],
            subject,
            react: EmailTemplate({ description: message }),
            text: ''
        });
        return NextResponse.json({ code: 200, data, message: "Email sent" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ code: 400, message: "Email was not sent", detail: error }, { status: 400 });
    }

};