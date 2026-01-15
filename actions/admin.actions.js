'use server';
import { sql } from '@/lib/db';

export async function getContacts() {
  return await sql`
    SELECT * FROM contact_messages
    ORDER BY created_at DESC
  `;
}

export async function updateContact(id, status, notes) {
  await sql`
    UPDATE contact_messages
    SET status=${status},
        followup_notes=${notes}
    WHERE id=${id}
  `;
}
