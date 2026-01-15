import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavlinksFooter = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center md:gap-3 xl:gap-6 text-white text-sm mt-5 md:mt-0 px-4 md:px-0">
      <Link
        className={`${pathname === '/' ? 'font-bold' : 'font-normal'}`}
        href="/"
      >
        Home
      </Link>
      <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
      <Link
        className={`${pathname === '/about' ? 'font-bold' : 'font-normal'}`}
        href="/about"
      >
        About
      </Link>
      <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
      <Link
        className={`${
          pathname === '/experience' ? 'font-bold' : 'font-normal'
        }`}
        href="/experience"
      >
        Experience
      </Link>
      <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
      <Link
        className={`${
          pathname === '/consulting' ? 'font-bold' : 'font-normal'
        }`}
        href="/consulting"
      >
        Consulting
      </Link>
      <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
      <Link
        className={`${pathname === '/skills' ? 'font-bold' : 'font-normal'}`}
        href="/skills"
      >
        Skills
      </Link>
      <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
      <Link
        className={`${pathname === '/blog' ? 'font-bold' : 'font-normal'}`}
        href="/blog"
      >
        Blog
      </Link>
      <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
      <Link
        className={`${pathname === '/contact' ? 'font-bold' : 'font-normal'}`}
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavlinksFooter;
