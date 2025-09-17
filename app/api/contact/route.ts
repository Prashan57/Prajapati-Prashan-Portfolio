import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";
import { z } from "zod";
import { assertMailtrapEnv, mailtrapConfig } from "@/constants/mail";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    assertMailtrapEnv();

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const client = new MailtrapClient({ token: mailtrapConfig.token });

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await client.send({
      from: {
        email: mailtrapConfig.senderEmail,
        name: mailtrapConfig.senderName,
      },
      to: [{ email: mailtrapConfig.recipientEmail }],
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html,
      category: "portfolio-contact",
    } as any);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}


