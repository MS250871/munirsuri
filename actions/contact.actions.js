'use server';

import { sql } from '@/lib/db';
import { resend } from '@/lib/email';

export async function createContactMessage(data) {
  try {
    await sql`
      INSERT INTO contact_messages
      (name, email, subject, message)
      VALUES
      (${data.name}, ${data.email}, ${data.subject}, ${data.message})
    `;

    // Send email notification
    await resend.emails.send({
      from: 'Website <me@munirsuri.com>',
      to: ['me@munirsuri.com'], // change this
      subject: `New Contact: ${data.subject}`,
      html: `
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Subject:</b> ${data.subject}</p>
        <p><b>Message:</b></p>
        <p>${data.message}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('CONTACT ERROR:', err);
    return { success: false };
  }
}
