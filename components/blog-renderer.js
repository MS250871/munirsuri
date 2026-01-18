'use client';

import Image from 'next/image';
import CallToAction from './CallToAction';

export default function BlogRenderer({
  blog,
  withCTA = true,
  withInfo = true,
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {blog.hero.heading}
        </h1>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          {blog.hero.subheading}
        </p>

        {withInfo && (
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
            <span>By {blog.meta.author.name}</span>
            <span>•</span>
            <span>{blog.meta.published_at}</span>
            <span>•</span>
            <span>{blog.meta.reading_time_minutes} min read</span>
          </div>
        )}

        {blog.hero.featured_image && (
          <div className="relative w-full h-[420px] mt-8 rounded-xl overflow-hidden">
            <Image
              src={blog.hero.featured_image}
              alt={blog.hero.image_alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* CONTENT */}
      <section className="space-y-14">
        {blog.content.map((section) => (
          <div key={section.id} id={section.id}>
            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {section.title}
            </h2>

            {/* IMAGE – after title */}
            {section.image?.position === 'after-title' && (
              <SectionImage image={section.image} />
            )}

            {/* PARAGRAPHS */}
            {section.body && (
              <div className="mb-4 text-gray-700 md:text-lg leading-relaxed">
                {section.body.join(' ')}
              </div>
            )}

            {/* IMAGE – after body */}
            {section.image?.position === 'after-body' && (
              <SectionImage image={section.image} />
            )}

            {/* BULLETS */}
            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 md:text-lg leading-relaxed">
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* IMAGE – after bullets */}
            {section.image?.position === 'after-bullets' && (
              <SectionImage image={section.image} />
            )}

            {/* DETAILS */}
            {section.details && (
              <div className="text-gray-700 md:text-lg leading-relaxed">
                {section.details.join(' ')}
              </div>
            )}

            {/* TABLE */}
            {section.table && (
              <div className="overflow-x-auto mt-6">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      {section.table.headers.map((header, i) => (
                        <th
                          key={i}
                          className="text-left px-4 py-3 text-sm font-semibold"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i} className="border-t border-gray-200">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 text-sm text-gray-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      {blog.cta && withCTA && (
        <CallToAction
          title="Stay Updated"
          text={blog.cta.text}
          buttonText={blog.cta.buttonText}
        />
      )}
    </article>
  );
}

/* SECTION IMAGE */
function SectionImage({ image }) {
  return (
    <figure className="my-6">
      <div className="relative w-full h-[360px] rounded-xl overflow-hidden">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>

      {image.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
