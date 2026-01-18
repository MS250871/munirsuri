export const dynamic = 'force-dynamic';

import { getContacts } from '@/actions/admin.actions';
import { getActiveSubscribers } from '@/actions/subscription.actions';
import { getBlogs } from '@/actions/blog.actions';
import Link from 'next/link';

export default async function AdminDashboard() {
  const contactCount = (await getContacts()).length;
  const subscriberCount = (await getActiveSubscribers()).length;
  const blogCount = (await getBlogs()).length;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/admin/contacts" className="bg-white p-4 rounded shadow">
          <p>Total Contacts</p>
          <b>{contactCount}</b>
        </Link>

        <Link href="/admin/subscribers" className="bg-white p-4 rounded shadow">
          <p>Subscribers</p>
          <b>{subscriberCount}</b>
        </Link>

        <Link href="/admin/blogs" className="bg-white p-4 rounded shadow">
          <p>Blogs</p>
          <b>{blogCount}</b>
        </Link>
      </div>
    </div>
  );
}
