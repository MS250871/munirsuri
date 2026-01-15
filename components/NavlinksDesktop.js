import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavlinksDesktop = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex gap-3 xl:gap-6">
      <Link
        className={`${pathname === '/' ? 'font-bold' : 'font-normal'}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${pathname === '/about' ? 'font-bold' : 'font-normal'}`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`${
          pathname === '/experience' ? 'font-bold' : 'font-normal'
        }`}
        href="/experience"
      >
        Experience
      </Link>
      <Link
        className={`${
          pathname === '/consulting' ? 'font-bold' : 'font-normal'
        }`}
        href="/consulting"
      >
        Consulting
      </Link>
      <Link
        className={`${pathname === '/skills' ? 'font-bold' : 'font-normal'}`}
        href="/skills"
      >
        Skills
      </Link>
      <Link
        className={`${pathname === '/blog' ? 'font-bold' : 'font-normal'}`}
        href="/blog"
      >
        Blog
      </Link>
    </div>
  );
};

export default NavlinksDesktop;
