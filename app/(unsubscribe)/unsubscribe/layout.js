import Image from 'next/image';

export default function UnsubscribeLayout({ children }) {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* BACKGROUND */}
      <div className="absolute max-h-screen inset-0 -z-10 overflow-hidden">
        {/* MOBILE */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src="/svgs/HeroBgSm.svg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TABLET */}
        <div className="relative w-full h-full hidden md:block lg:hidden">
          <Image
            src="/svgs/HeroBgMd.svg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* DESKTOP */}
        <div className="relative w-full h-full hidden lg:block">
          <Image
            src="/svgs/HeroBgLg.svg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {children}
    </div>
  );
}
