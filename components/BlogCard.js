'use client';

import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ data, variant = 'vertical' }) => {
  const id = data.id;
  const title = data.hero.heading;
  const subTitle = data.hero.subheading;

  const img = data.hero.featured_image
    ? data.hero.featured_image
    : '/images/blog/default-blog-image.jpg';

  const author = data.meta.author.name;
  const date = data.meta.published_at;
  const readTime = data.meta.reading_time_minutes;
  const category = data.meta.category;

  // =======================
  // HORIZONTAL CARD
  // =======================
  if (variant === 'horizontal') {
    return (
      <Link href={`/blog/${id}`} className="w-full">
        <div className="w-full p-4 bg-white shadow-customLight flex gap-4 rounded-2xl border border-[rgba(233,233,233,1)] hover:shadow-lg transition">
          {/* IMAGE */}
          <div className="relative w-[160px] h-[110px] md:w-[200px] md:h-[140px] lg:w-[240px] lg:h-[160px] flex-shrink-0">
            <Image
              src={img}
              alt={title}
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-2 w-full">
            {/* META */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-medium">{category}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime} min read</span>
            </div>

            {/* TITLE */}
            <p className="text-lg font-medium text-[rgba(29,31,30,1)] line-clamp-2">
              {title}
            </p>

            {/* SUBTITLE */}
            <p className="text-sm font-normal line-clamp-3 text-[rgba(29,31,29,0.7)]">
              {subTitle}
            </p>

            {/* AUTHOR */}
            <div className="text-sm text-gray-600 mt-auto">
              By <span className="font-medium">{author}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // =======================
  // VERTICAL CARD
  // =======================
  return (
    <Link href={`/blog/${id}`} className="h-full w-full">
      <div
        className="h-full p-3 bg-white shadow-customLight 
                    flex flex-col gap-3 rounded-2xl 
                    border border-[rgba(233,233,233,1)] 
                    hover:shadow-lg transition"
      >
        {/* IMAGE */}
        <div className="relative w-full aspect-video">
          <Image
            src={img}
            alt={title}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
          />
        </div>

        {/* META */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="font-medium">{category}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>

        {/* TITLE */}
        <p
          className="text-lg leading-snug font-medium 
                    text-[rgba(29,31,30,1)] line-clamp-2"
        >
          {title}
        </p>

        {/* SUBTITLE */}
        <p
          className="text-sm font-normal 
                    line-clamp-3 text-[rgba(29,31,29,0.7)]"
        >
          {subTitle}
        </p>

        {/* AUTHOR pinned bottom */}
        <div className="text-sm text-gray-600 mt-auto">
          By <span className="font-medium">{author}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
