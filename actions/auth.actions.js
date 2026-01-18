'use server';

import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function adminLogin(email, password) {
  const user = await sql`
    SELECT * FROM admin_users WHERE email=${email}
  `;

  const cookieStore = await cookies();

  if (!user.length) return { success: false };

  const valid = await bcrypt.compare(password, user[0].password_hash);

  if (!valid) return { success: false };

  cookieStore.set('admin', user[0].id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  return { success: true };
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin');
  redirect('/');
}
