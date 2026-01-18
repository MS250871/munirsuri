import Image from 'next/image';
import NavlinksFooter from './NavlinksFooter';
import Link from 'next/link';
import SocialButtons from './SocialButtons';
import Logo from './Logo';

export default function FooterClient() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative h-auto -z-10">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        {/* Mobile */}
        <div className="md:hidden w-full">
          <Image
            src="/svgs/FooterBgSm.svg"
            alt="Footer Background"
            width={640}
            height={300} // adjust to real aspect if you know
            className="w-full object-cover"
            sizes="100vw"
          />
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden w-full">
          <Image
            src="/svgs/FooterBgMd.svg"
            alt="Footer Background"
            width={1024}
            height={350}
            className="w-full object-cover"
            sizes="100vw"
          />
        </div>

        {/* Desktop */}
        <div className="hidden lg:block w-full">
          <Image
            src="/svgs/FooterBgLg.svg"
            alt="Footer Background"
            width={1920}
            height={400}
            className="w-full object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute z-20 bottom-0 button-bg w-full p-4 lg:px-[100px]">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <Logo isLight />
          <NavlinksFooter />
        </div>

        <hr className="border-t w-full border-teal-600 my-5" />

        <div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex items-center">
              <SocialButtons isLight />

              <Link
                href="/admin/login"
                className="ml-4 text-xs text-white border border-white px-2 py-1 rounded hover:bg-white hover:text-green-900 transition"
              >
                Admin Login
              </Link>
            </div>

            <p className="hidden md:block text-xs text-white opacity-60">
              &copy; {year} Munir Suri All Rights Reserved
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

          <p className="md:hidden text-xs text-white opacity-60 text-center mt-5">
            &copy; {year} Munir Suri All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
