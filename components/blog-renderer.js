'use client';

import Image from 'next/image';

export default function BlogRenderer({ blog }) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {blog.hero.heading}
        </h1>

        <p className="mt-4 text-lg text-gray-600">{blog.hero.subheading}</p>

        {/* META */}
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
          <span>By {blog.meta.author.name}</span>
          <span>•</span>
          <span>{blog.meta.published_at}</span>
          <span>•</span>
          <span>{blog.meta.reading_time_minutes} min read</span>
        </div>

        {/* FEATURED IMAGE */}
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
      <section className="space-y-12">
        {blog.content.map((section) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {section.title}
            </h2>

            {/* PARAGRAPHS */}
            {section.body &&
              section.body.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {para}
                </p>
              ))}

            {/* BULLETS */}
            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* DETAILS */}
            {section.details &&
              section.details.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-3">
                  {para}
                </p>
              ))}

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
      {blog.cta && (
        <div className="mt-16 p-8 bg-gray-900 rounded-xl text-white text-center">
          <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
          <p className="mb-6">{blog.cta.text}</p>
          <a
            href={blog.cta.url}
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Subscribe
          </a>
        </div>
      )}
    </article>
  );
}
