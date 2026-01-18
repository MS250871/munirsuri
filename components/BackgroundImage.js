import Image from 'next/image';

export default function BackgroundImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt = 'Background',
  priority = false,
}) {
  return (
    <div className="absolute inset-0">
      {/* Mobile */}
      <div className="md:hidden relative w-full h-full">
        <Image
          src={mobileSrc}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden relative w-full h-full">
        <Image
          src={tabletSrc}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block relative w-full h-full">
        <Image
          src={desktopSrc}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
