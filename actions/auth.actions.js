'use server';

import { sql } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function adminLogin(email, password) {
  const user = await sql`
    SELECT * FROM admin_users WHERE email=${email}
  `;

  if (!user.length) return { success: false };

  const valid = await bcrypt.compare(password, user[0].password_hash);

  if (!valid) return { success: false };

  cookies().set('admin', user[0].id, {
    httpOnly: true,
    secure: true,
    path: '/',
  });

  return { success: true };
}

export async function adminLogout() {
  cookies().delete('admin');
}
