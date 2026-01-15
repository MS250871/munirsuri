import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialButtons from './SocialButtons';

const NavlinksMobile = ({ handleOpen, isMobileMenuOpen }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        isMobileMenuOpen ? 'translate-y-20' : '-translate-y-full'
      } lg:hidden mobile-menu-bg w-full h-auto absolute top-0 left-0 transition-all duration-300 ease-in-out`}
    >
      <div className="w-full text-center py-4">
        <Link
          className={`${
            pathname === '/' ? 'font-bold' : 'font-normal'
          } block mt-4`}
          href="/"
          onClick={handleOpen}
        >
          Home
        </Link>
        <Link
          className={`${
            pathname === '/about' ? 'font-bold' : 'font-normal'
          } block mt-4`}
          href="/about"
          onClick={handleOpen}
        >
          About
        </Link>
        <Link
          className={`${
            pathname === '/experience' ? 'font-bold' : 'font-normal'
          } block mt-4`}
          href="/experience"
          onClick={handleOpen}
        >
          Experience
        </Link>
        <Link
          className={`${
            pathname === '/consulting' ? 'font-bold' : 'font-normal'
          } block mt-4`}
          href="/consulting"
          onClick={handleOpen}
        >
          Consulting
        </Link>
        <Link
          className={`${
            pathname === '/skills' ? 'font-bold' : 'font-normal'
          } block mt-4`}
          href="/skills"
          onClick={handleOpen}
        >
          Skills
        </Link>
        <Link
          className={`${
            pathname === '/blog' ? 'font-bold' : 'font-normal'
          } block mt-4`}
          href="/blog"
          onClick={handleOpen}
        >
          Blog
        </Link>
        <div className="mt-16 mb-4">
          <Link
            href="/contact"
            className="px-5 py-4 rounded-full button-bg text-white"
            onClick={handleOpen}
          >
            Contact Me
          </Link>
        </div>
        <div className="mt-16">
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};

export default NavlinksMobile;
