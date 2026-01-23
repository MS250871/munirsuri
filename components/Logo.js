import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ isLight }) => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <Image
          src="/images/munirLogo.png"
          alt="Munir Suri"
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <p
            className={`${
              isLight ? 'text-white' : 'text-[#003d3d]'
            } capitalize text-base lg:text-lg font-bold `}
          >
            Munir Suri
          </p>
          <p
            className={`${
              isLight ? 'text-white' : 'text-[#003d3d]'
            } text-[10px] lg:text-sm font-normal opacity-80 `}
          >
            Growth Strategist
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
