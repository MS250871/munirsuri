export const dynamic = 'force-dynamic';

import BlogRenderer from '@/components/blog-renderer';
import { getBlogById } from '@/actions/blog.actions';

export default async function BlogView({ params }) {
  const resolvedParams = await params;
  const row = await getBlogById(resolvedParams.id);

  if (!row) {
    return <p className="text-center mt-20 text-gray-500">Blog not found</p>;
  }

  return <BlogRenderer blog={row.blog} withCTA={false} />;
}
