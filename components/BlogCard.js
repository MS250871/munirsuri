import Link from 'next/link';

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
          <div className="w-[160px] h-[110px] md:w-[200px] md:h-[140px] lg:w-[240px] lg:h-[160px] flex-shrink-0">
            <img
              src={img}
              alt={title}
              className="w-full h-full rounded-xl object-cover"
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
    <Link href={`/blog/${id}`} className="w-full md:w-1/3 xl:w-1/4">
      <div className="w-full p-3 bg-white shadow-customLight flex flex-col gap-3 rounded-2xl border border-[rgba(233,233,233,1)] hover:shadow-lg transition">
        {/* IMAGE */}
        <div className="w-full">
          <img
            src={img}
            alt={title}
            className="w-full rounded-xl object-cover aspect-video"
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
        <p className="text-lg leading-snug font-medium text-[rgba(29,31,30,1)] line-clamp-2">
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
    </Link>
  );
};

export default BlogCard;
