'use server';
import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

/* Subscribe */
export async function subscribeEmail(email) {
  try {
    await sql`
      INSERT INTO blog_subscribers (email)
      VALUES (${email})
      ON CONFLICT (email)
      DO UPDATE SET
        is_active=true,
        unsubscribed_at=NULL
    `;
    revalidatePath('/admin/subscribers');
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

/* Unsubscribe */
export async function unsubscribeEmail(email) {
  try {
    await sql`
      UPDATE blog_subscribers
      SET is_active=false,
          unsubscribed_at=now()
      WHERE email=${email}
    `;
    revalidatePath('/admin/subscribers');
    return { success: true };
  } catch (err) {
    return { success: false };
  }
}

/* Get all active subs (admin) */
export async function getActiveSubscribers() {
  return await sql`
    SELECT email FROM blog_subscribers
    WHERE is_active=true
  `;
}

/* Get all active subs (admin) */
export async function getAllSubscribers() {
  return await sql`
    SELECT * FROM blog_subscribers
  `;
}
