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

/* get notes */
export async function getFollowups(contactId) {
  return await sql`
    SELECT * FROM contact_followups
    WHERE contact_id=${contactId}
    ORDER BY created_at DESC
  `;
}

/* add note */
export async function addFollowup(contactId, note) {
  await sql`
    INSERT INTO contact_followups (contact_id, note)
    VALUES (${contactId}, ${note})
  `;
}

/* update status only */
export async function updateStatus(id, status) {
  await sql`
    UPDATE contact_messages
    SET status=${status}
    WHERE id=${id}
  `;
}
