import BlogRenderer from '@/components/blog-renderer';
import { blogsData } from '@/lib/blogs';
const SingleBlog = async ({ params }) => {
  const resolvedParams = await params;
  const blogId = resolvedParams.blogId;
  const blog = blogsData.find((blog) => blog.id === blogId);
  return (
    <div>
      <BlogRenderer blog={blog} />
    </div>
  );
};

export default SingleBlog;
