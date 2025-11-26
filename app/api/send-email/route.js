import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    
    const { name, email, subject, message } = await req.json(); // 'req' contains info about incoming http request (headers, method, body)
                                                                // must parse as json
                                                                // extract 4 properties received & put into 4 objs: name, email, subject, message.
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    
}
