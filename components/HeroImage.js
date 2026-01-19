import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="w-full xl:w-1/4">
      <div className="md:hidden w-full h-[400px] relative shadow-imageShadow rounded-[26px] bg-[#023573] overflow-hidden">
        <Image
          src="/images/MSMobile.jpg"
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          className="object-cover"
          alt="Munir Suri"
        />
        <div className="bg-customGradient absolute left-0 p-6 bottom-0 w-full">
          <p className="text-xl leading-6 font-semibold tracking-tight">
            Munir Suri
          </p>
          <p className="text-s, leading-[16.2px] font-normal tracking-tight">
            Director, Board Member, CXO
          </p>
        </div>
      </div>
      <div className="hidden md:block xl:hidden w-full h-[500px] relative shadow-imageShadow rounded-[26px] bg-[#023573] overflow-hidden">
        <Image
          src="/images/MS-Tab.jpg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
          alt="Munir Suri"
          className="object-cover"
        />
        <div className="bg-customGradient absolute left-0 p-6 bottom-0 w-full">
          <p className="text-xl leading-6 font-semibold tracking-tight">
            Munir Suri
          </p>
          <p className="text-s, leading-[16.2px] font-normal tracking-tight">
            Director, Board Member, CXO
          </p>
        </div>
      </div>
      <div className="hidden xl:block w-full h-[600px] relative shadow-imageShadow rounded-[26px] bg-[#023573] overflow-hidden">
        <Image
          src="/images/MS-Desktop.jpg"
          fill
          sizes="(max-width: 1280px) 100vw, 33vw"
          className="object-cover"
          alt="Munir Suri"
        />
        <div className="bg-customGradient absolute left-0 p-6 bottom-0 w-full">
          <p className="text-xl leading-6 font-semibold tracking-tight">
            Munir Suri
          </p>
          <p className="text-s, leading-[16.2px] font-normal tracking-tight">
            Director, Board Member
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
