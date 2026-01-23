import { getBlogs } from '@/actions/blog.actions';
import BlogCard from '@/components/BlogCard';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Blog | AI, Marketing, Retail & Data Centers | Munir Suri',
  description:
    'Read expert insights on AI marketing, omnichannel retail, Gen Z behavior, and AI data centers by Munir Suri. Strategy, technology and future trends.',

  keywords: [
    'AI Marketing Blog',
    'Retail Transformation',
    'Gen Z Marketing',
    'Omnichannel Commerce',
    'AI Data Centers',
    'Business Strategy',
    'Digital Transformation',
  ],

  openGraph: {
    title: 'Munir Suri Blog | AI & Business Insights',
    description:
      'Deep dives into AI, marketing, retail transformation and digital infrastructure.',
    url: 'https://munirsuri.com/blog',
    siteName: 'Munir Suri',
    images: [
      {
        url: 'https://munirsuri.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Munir Suri Blog',
      },
    ],
    type: 'website',
  },

  alternates: {
    canonical: 'https://munirsuri.com/blog',
  },
};

const Blog = async () => {
  const blogsData = await getBlogs();
  return (
    <div className="">
      <PageHeader
        href="/blog"
        buttonTitle="My Blog"
        mainTitle="Sharing my prespectives"
      />

      <div className="mx-4 mt-10 md:mt-20 lg:mt-32 mb-20 xl:mx-[100px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
          Latest Blogs
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          {blogsData.map((blog) => (
            <div key={blog.id}>
              {/* MOBILE – Vertical */}
              <div className="block md:hidden">
                <BlogCard data={blog.blog} variant="vertical" />
              </div>

              {/* DESKTOP – Horizontal */}
              <div className="hidden md:block">
                <BlogCard data={blog.blog} variant="horizontal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
