import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return Response.json({ message: "API working" });
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log("BODY:", { name, email, subject, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // IMPORTANT FIX
      replyTo: email, // so you can reply to user
      to: process.env.RECEIVER_EMAIL,
      subject: subject || `Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}