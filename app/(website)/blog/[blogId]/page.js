import { getBlogById } from '@/actions/blog.actions';
import BlogRenderer from '@/components/blog-renderer';

const SingleBlog = async ({ params }) => {
  const resolvedParams = await params;
  const blogId = resolvedParams.blogId;
  const blog = await getBlogById(blogId);
  return (
    <div>
      <BlogRenderer blog={blog.blog} />
    </div>
  );
};

export default SingleBlog;
