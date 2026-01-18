'use server';

import { sql } from '@/lib/db';
import { resend } from '@/lib/email';
import ContactEmailTemplate from '@/lib/contact-email-template';

export async function createContactMessage(data) {
  try {
    await sql`
      INSERT INTO contact_messages
      (name, mobile, email, subject, message)
      VALUES
      (${data.name}, ${data.mobile}, ${data.email}, ${data.subject}, ${data.message})
    `;

    try {
      await resend.emails.send({
        from: 'Website <me@munirsuri.com>',
        to: ['me@munirsuri.com'],
        subject: `New Contact: ${data.subject}`,
        html: ContactEmailTemplate({ data }),
      });
    } catch (mailErr) {
      console.error('EMAIL FAILED:', mailErr);
    }

    return {
      success: true,
      message: 'Stored in DB',
    };
  } catch (err) {
    console.error('CONTACT ERROR:', err);

    return {
      success: false,
      message: err.message || 'Server error',
    };
  }
}
