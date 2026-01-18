import { getBlogs } from '@/actions/blog.actions';
import BlogSectionClient from './BlogSectionClient';

export default async function BlogSection() {
  const blogs = await getBlogs(); // server fetch

  return <BlogSectionClient blogs={blogs} />;
}
