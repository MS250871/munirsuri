'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import NavlinksDesktop from './NavlinksDesktop';
import NavlinksMobile from './NavlinksMobile';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleOpen = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="relative flex items-center justify-center ">
      <div className="absolute inset-0 -z-10">
        <img
          src="/svgs/HeroBgSm.svg"
          alt="Hero Background"
          className="md:hidden w-full object-cover"
        />
        <img
          src="/svgs/HeroBgMd.svg"
          alt="Hero Background"
          className="hidden md:block lg:hidden w-full object-cover"
        />
        <img
          src="/svgs/HeroBgLg.svg"
          alt="Hero Background"
          className="hidden lg:block md:hidden w-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full bg-transparent self-start">
        <nav className="w-full px-4 lg:px-[100px] py-4 flex items-center justify-between transition-all duration-200 ease-in-out">
          <Logo />
          <NavlinksDesktop />
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-5 py-4 rounded-full button-bg text-white"
            >
              Contact Me
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={handleOpen} className="h-10 w-10">
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBarsStaggered className="h-6 w-6" />
              )}
            </button>
          </div>
          <NavlinksMobile
            handleOpen={handleOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
