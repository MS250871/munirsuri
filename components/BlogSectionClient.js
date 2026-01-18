'use client';

import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import BlogCard from './BlogCard';
import { useEffect, useState } from 'react';
import CallToAction from './CallToAction';

export default function BlogSectionClient({ blogs }) {
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    function updateCount() {
      setItemsToShow(window.innerWidth >= 1280 ? 4 : 3);
    }

    updateCount();
    window.addEventListener('resize', updateCount);

    return () => window.removeEventListener('resize', updateCount);
  }, []);

  return (
    <div className="mx-4 mt-20 xl:mt-40 xl:mx-[100px]">
      <div className="flex items-center justify-between text-3xl xl:text-[56px] xl:leading-[67.2px] font-medium">
        <p>Blog</p>

        <Link href="/blog">
          <div className="flex items-center justify-center px-5 py-[9px] rounded-full bg-white text-[rgba(38,38,38,1)] shadow-custom text-sm xl:text-[18px] font-semibold">
            See All <FaArrowRightLong size={12} className="ml-4" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-center gap-4 md:flex-row mt-10">
        {blogs.slice(0, itemsToShow).map((blog) => (
          <BlogCard key={blog.id} data={blog.blog} />
        ))}
      </div>

      <div className="mt-10">
        <CallToAction
          title="Join My Newsletter"
          text="Weekly insights on AI, consulting and business strategy"
          buttonText="Join Free"
        />
      </div>
    </div>
  );
}
