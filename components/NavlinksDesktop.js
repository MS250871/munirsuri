'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavlinksDesktop = () => {
  const pathname = usePathname();

  const navClass = (path) => (pathname === path ? 'font-bold' : 'font-normal');

  return (
    <div className="hidden lg:flex gap-3 xl:gap-6">
      <Link href="/" className={navClass('/')}>
        Home
      </Link>

      <Link href="/about" className={navClass('/about')}>
        About
      </Link>

      <Link href="/experience" className={navClass('/experience')}>
        Experience
      </Link>

      <Link href="/consulting" className={navClass('/consulting')}>
        Consulting
      </Link>

      <Link href="/skills" className={navClass('/skills')}>
        Skills
      </Link>

      <Link href="/blog" className={navClass('/blog')}>
        Blog
      </Link>
    </div>
  );
};

export default NavlinksDesktop;
