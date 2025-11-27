import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        // 'req' contains info about incoming http request (headers, method, body)
        // must parse as json
        // extract 4 properties received & put into 4 objs: name, email, subject, message.
        const { name, email, subject, message } = await req.json();                                
    
        // create transporter obj using gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
        });

        // create email
        const mailData = {
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_TO,
            subject: `NorthStar Studio`,
            text: `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
            replyTo: email
        };

        // send email
        await transporter.sendMail(mailData);

        // send success response
        return new Response(JSON.stringify({ message: 'Email sent'}), { status: 200 });

    } catch (error) {
        console.error("Error - Email: ", error);

        return Response.json({success: false, error: "Failed to send email" }, { status: 500 });
    }
    
}
