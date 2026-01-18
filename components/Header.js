import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import NavlinksDesktop from './NavlinksDesktop';
import HeaderMobileClient from './HeaderClient';

export default function Header() {
  return (
    <>
      {/* BACKGROUND LAYER (NOT FIXED) */}
      <div className="absolute top-0 left-0 w-full -z-10">
        {/* Mobile */}
        <div className="md:hidden w-full">
          <Image
            src="/svgs/HeroBgSm.svg"
            alt="Hero Background"
            width={640}
            height={800}
            className="w-full object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden w-full">
          <Image
            src="/svgs/HeroBgMd.svg"
            alt="Hero Background"
            width={1024}
            height={900}
            className="w-full object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Desktop */}
        <div className="hidden lg:block w-full">
          <Image
            src="/svgs/HeroBgLg.svg"
            alt="Hero Background"
            width={1920}
            height={1000}
            className="w-full object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-green-100/30 ">
        <nav className="w-full px-4 lg:px-[100px] py-4 flex items-center justify-between">
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

          <HeaderMobileClient />
        </nav>
      </header>
    </>
  );
}
