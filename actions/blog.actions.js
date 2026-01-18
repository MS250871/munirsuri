'use server';

import { sql } from '@/lib/db';
import { resend } from '@/lib/email';
import { revalidatePath } from 'next/cache';
import BlogNotificaionEmailTemplate from '@/lib/blog-notification-email-template';

/* ---------------- CREATE BLOG ---------------- */

export async function insertBlog(blog) {
  try {
    await sql`
      INSERT INTO blogs
      (id, type, slug, status, blog)
      VALUES
      (
        ${blog.id},
        ${blog.type},
        ${blog.meta.slug},
        ${blog.status || 'draft'},
        ${JSON.stringify(blog)}
      )
    `;

    return { success: true };
  } catch (err) {
    console.error('BLOG INSERT ERROR:', err);
    return { success: false };
  }
}

/* ---------------- UPDATE BLOG ---------------- */

export async function updateBlog(id, blog) {
  try {
    await sql`
      UPDATE blogs
      SET
        slug=${blog.meta.slug},
        status=${blog.status},
        blog=${JSON.stringify(blog)}
      WHERE id=${id}
    `;

    return { success: true };
  } catch (err) {
    console.error('BLOG UPDATE ERROR:', err);
    return { success: false };
  }
}

/* ---------------- PUBLISH ---------------- */

export async function publishBlog(id) {
  try {
    const [row] = await sql`
      UPDATE blogs
      SET 
        status = 'published',
        blog = jsonb_set(blog, '{status}', '"published"', false)
      WHERE id = ${id}
      RETURNING blog
    `;

    const blog = row.blog;

    notifySubscribers(blog);

    revalidatePath('/admin/blogs');

    return { success: true };
  } catch (err) {
    console.error('BLOG PUBLISH ERROR:', err);
    return { success: false };
  }
}

/* ---------------- UNPUBLISH ---------------- */

export async function unpublishBlog(id) {
  try {
    await sql`
      UPDATE blogs
      SET 
        status = 'draft',
        blog = jsonb_set(blog, '{status}', '"draft"', false)
      WHERE id = ${id}
    `;

    revalidatePath('/admin/blogs');

    return { success: true };
  } catch (err) {
    console.error('BLOG UNPUBLISH ERROR:', err);
    return { success: false };
  }
}

/* ---------------- LIST BLOGS ---------------- */

export async function getBlogs() {
  return sql`
    SELECT * FROM blogs
    ORDER BY created_at DESC
  `;
}

/* ---------------- GET BLOG BY ID ---------------- */

export async function getBlogById(id) {
  const [row] = await sql`
    SELECT * FROM blogs
    WHERE id=${id}
  `;

  return row;
}

/* ---------------- EMAIL NOTIFY ---------------- */

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function notifySubscribers(blog) {
  const subs = await sql`
    SELECT email 
    FROM blog_subscribers
    WHERE is_active = true
    LIMIT 90
  `;
  console.log('blog to notify:', blog);
  console.log(`Notifying ${subs.length} subscribers about new blog...`);
  let sent = 0;

  for (const s of subs) {
    try {
      await resend.emails.send({
        from: 'Munir Suri <me@munirsuri.com>',
        to: [s.email],
        subject: `New Blog: ${blog.meta.title}`,
        html: BlogNotificaionEmailTemplate(blog, s.email),
      });

      sent++;

      // throttle → stay below rate limit
      await sleep(800);
    } catch (err) {
      console.error('Email failed:', s.email, err);
      // continue loop
    }
  }

  console.log(`Newsletter sent to ${sent} users`);

  return { success: true, sent };
}
