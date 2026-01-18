'use client';

import Image from 'next/image';
import Link from 'next/link';

const QuickCallButton = ({ href, title }) => {
  const finalHref = href || 'tel:+919818478573';
  const isTel = finalHref.startsWith('tel:');

  // TEL → normal <a>
  if (isTel) {
    return (
      <a
        href={finalHref}
        className="inline-flex gap-2 items-center w-auto justify-center px-[14px] py-2 bg-[rgba(0,31,31,0.1)] border border-[rgba(0,31,31,0.07)] rounded-3xl"
      >
        <Image src="/images/stars.png" width={20} height={20} alt="stars" />
        <p className="text-xs leading-[18px] lg:text-base lg:leading-6">
          {title}
        </p>
      </a>
    );
  }

  // INTERNAL NAV → Next Link + loader
  return (
    <Link
      href={finalHref}
      className="inline-flex gap-2 items-center w-auto justify-center px-[14px] py-2 bg-[rgba(0,31,31,0.1)] border border-[rgba(0,31,31,0.07)] rounded-3xl"
    >
      <Image src="/images/stars.png" width={20} height={20} alt="stars" />
      <p className="text-xs leading-[18px] lg:text-base lg:leading-6">
        {title}
      </p>
    </Link>
  );
};

export default QuickCallButton;
