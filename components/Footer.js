'use client';

import Logo from './Logo';
import NavlinksFooter from './NavlinksFooter';

import Link from 'next/link';
import SocialButtons from './SocialButtons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative h-auto -z-10">
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <img
          src="/svgs/FooterBgSm.svg"
          alt="Hero Background"
          className="md:hidden w-full object-cover"
        />
        <img
          src="/svgs/FooterBgMd.svg"
          alt="Hero Background"
          className="hidden md:block lg:hidden w-full object-cover"
        />
        <img
          src="/svgs/FooterBgLg.svg"
          alt="Hero Background"
          className="hidden lg:block w-full object-cover"
        />
      </div>
      <div className="absolute z-20 bottom-0 button-bg w-full p-4 lg:px-[100px]">
        <div className="flex flex-col md:flex-row md:justify-between items-center ">
          <Logo isLight={true} />
          <NavlinksFooter />
        </div>
        <hr className="border-t-1 w-full border-teal-600 my-5" />
        <div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex items-center">
              <SocialButtons isLight={true} />
              <Link
                href="/admin/login"
                className="ml-4 text-xs text-white border border-white px-2 py-1 rounded hover:bg-white hover:text-green-900 transition"
              >
                Admin Login
              </Link>
            </div>

            <p className="hidden md:block text-xs text-white opacity-60">
              &copy; {currentYear} Munir Suri All Rights Reserved
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/terms" className="text-xs text-white mr-8">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="text-xs text-white">
                Privacy
              </Link>
            </div>
          </div>
          <div>
            <p className="md:hidden text-xs text-white opacity-60 text-center mt-5">
              &copy; {currentYear} Munir Suri All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
