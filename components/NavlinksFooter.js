'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavlinksFooter = () => {
  const pathname = usePathname();

  const navClass = (path) => (pathname === path ? 'font-bold' : 'font-normal');

  return (
    <div className="flex gap-4 flex-wrap items-center justify-center md:gap-3 xl:gap-6 text-white text-sm mt-5 md:mt-0 px-4 md:px-0">
      <Link href="/" className={navClass('/')}>
        Home
      </Link>

      <div className="w-1 h-1 bg-white opacity-60 rounded-full" />

      <Link href="/about" className={navClass('/about')}>
        About
      </Link>

      <div className="w-1 h-1 bg-white opacity-60 rounded-full" />

      <Link href="/experience" className={navClass('/experience')}>
        Experience
      </Link>

      <div className="w-1 h-1 bg-white opacity-60 rounded-full" />

      <Link href="/consulting" className={navClass('/consulting')}>
        Consulting
      </Link>

      <div className="w-1 h-1 bg-white opacity-60 rounded-full" />

      <Link href="/skills" className={navClass('/skills')}>
        Skills
      </Link>

      <div className="w-1 h-1 bg-white opacity-60 rounded-full" />

      <Link href="/blog" className={navClass('/blog')}>
        Blog
      </Link>

      <div className="w-1 h-1 bg-white opacity-60 rounded-full" />

      <Link href="/contact" className={navClass('/contact')}>
        Contact
      </Link>
    </div>
  );
};

export default NavlinksFooter;
