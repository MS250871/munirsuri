export const dynamic = 'force-dynamic';

import { getBlogs, publishBlog, unpublishBlog } from '@/actions/blog.actions';

import Link from 'next/link';
import { MdEdit, MdPublish, MdUnpublished, MdVisibility } from 'react-icons/md';

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Blogs</h2>

        <Link
          href="/admin/blogs/create"
          className="button-bg text-white px-4 py-2 rounded"
        >
          + Add Blog
        </Link>
      </div>

      {!blogs.length && (
        <p className="text-center mt-20 text-gray-500">No blogs found</p>
      )}

      {blogs.map((b) => (
        <div
          key={b.id}
          className="bg-white p-5 mb-4 rounded shadow flex items-start justify-between"
        >
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{b.blog.meta.title}</h3>

            <p className="text-sm text-gray-500">{b.slug}</p>

            <p className="mt-1">
              Status:
              <span
                className={`ml-2 px-2 py-1 rounded text-xs
              ${
                b.status === 'published'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
              >
                {b.status}
              </span>
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <Link href={`/admin/blogs/${b.id}`} className="btn-icon">
              <MdVisibility size={20} />
            </Link>

            <Link href={`/admin/blogs/${b.id}/edit`} className="btn-icon">
              <MdEdit size={20} />
            </Link>

            {b.status === 'published' ? (
              <form
                action={async () => {
                  'use server';
                  await unpublishBlog(b.id);
                }}
              >
                <button className="btn-icon">
                  <MdUnpublished size={20} />
                </button>
              </form>
            ) : (
              <form
                action={async () => {
                  'use server';
                  await publishBlog(b.id);
                }}
              >
                <button className="btn-icon">
                  <MdPublish size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
