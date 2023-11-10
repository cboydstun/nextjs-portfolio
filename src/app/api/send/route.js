import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    /* data from client */
    const body = await req.json();

    /* destructure data from client */
    const { email, subject, message } = body;

    /* validate data from client */
    if (!email || !subject || message.length === 0) {
        return NextResponse.json({ message: "Email, subject, and message are required" }, {
            status: 400
        })
    }

    /* send email */
    try {
        const data = await resend.emails.send({
            from: 'Portfolio <portfolio@chrisboydstun.com>',
            to: ['chrisboydstun@gmail.com'],
            subject,
            react: EmailTemplate({ sender: email, description: message }),
            text: ''
        });
        return NextResponse.json({ code: 200, data, message: "Email sent" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ code: 400, message: "Email was not sent", detail: error }, { status: 400 });
    }

};