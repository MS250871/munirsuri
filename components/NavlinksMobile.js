'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialButtons from './SocialButtons';

const NavlinksMobile = ({ handleOpen, isMobileMenuOpen }) => {
  const pathname = usePathname();

  const handleNavClick = () => {
    handleOpen(); // close menu
  };

  const navClass = (path) => (pathname === path ? 'font-bold' : 'font-normal');

  return (
    <div
      className={`${
        isMobileMenuOpen ? 'translate-y-20' : '-translate-y-full'
      } lg:hidden mobile-menu-bg w-full h-auto absolute top-0 left-0 transition-all duration-300 ease-in-out`}
    >
      <div className="w-full text-center py-4">
        <Link
          href="/"
          className={`${navClass('/')} block mt-4`}
          onClick={() => handleNavClick()}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`${navClass('/about')} block mt-4`}
          onClick={() => handleNavClick()}
        >
          About
        </Link>

        <Link
          href="/experience"
          className={`${navClass('/experience')} block mt-4`}
          onClick={() => handleNavClick()}
        >
          Experience
        </Link>

        <Link
          href="/consulting"
          className={`${navClass('/consulting')} block mt-4`}
          onClick={() => handleNavClick()}
        >
          Consulting
        </Link>

        <Link
          href="/skills"
          className={`${navClass('/skills')} block mt-4`}
          onClick={() => handleNavClick()}
        >
          Skills
        </Link>

        <Link
          href="/blog"
          className={`${navClass('/blog')} block mt-4`}
          onClick={() => handleNavClick()}
        >
          Blog
        </Link>

        <div className="mt-16 mb-4">
          <Link
            href="/contact"
            className="px-5 py-4 rounded-full button-bg text-white"
            onClick={() => handleNavClick()}
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
