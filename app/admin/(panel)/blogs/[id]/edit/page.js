export const dynamic = 'force-dynamic';

import BlogForm from '@/components/BlogForm';
import { getBlogById } from '@/actions/blog.actions';

export default async function EditBlog({ params }) {
  const resolvedParams = await params;
  const row = await getBlogById(resolvedParams.id);

  return <BlogForm mode="edit" initialData={row.blog} />;
}
