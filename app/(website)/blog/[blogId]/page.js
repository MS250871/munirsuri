import { getBlogById } from '@/actions/blog.actions';
import BlogRenderer from '@/components/blog-renderer';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blogId = resolvedParams.blogId;
  const { blog } = await getBlogById(blogId);

  if (!blog) return {};

  return {
    title: blog.meta.title,
    description: blog.meta.description,

    keywords: blog.meta.tags,

    authors: [{ name: blog.meta.author.name }],

    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
      url: `https://munirsuri.com/blogs/${blog.meta.slug}`,
      siteName: 'Munir Suri',
      images: [
        {
          url: `https://munirsuri.com${blog.hero.featured_image}`,
          width: 1200,
          height: 630,
          alt: blog.hero.image_alt,
        },
      ],
      type: 'article',
      publishedTime: blog.meta.published_at,
      authors: [blog.meta.author.name],
      tags: blog.meta.tags,
    },

    twitter: {
      card: 'summary_large_image',
      title: blog.meta.title,
      description: blog.meta.description,
      images: [`https://munirsuri.com${blog.hero.featured_image}`],
    },

    alternates: {
      canonical: `https://munirsuri.com/blogs/${blog.meta.slug}`,
    },
  };
}

const SingleBlog = async ({ params }) => {
  const resolvedParams = await params;
  const blogId = resolvedParams.blogId;
  const { blog } = await getBlogById(blogId);

  return (
    <div>
      <BlogRenderer blog={blog} />
    </div>
  );
};

export default SingleBlog;
