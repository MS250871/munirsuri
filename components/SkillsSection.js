import Image from 'next/image';
import QuickCallButton from './QuickCallButton';
import Accordion from './Accordion';

const SkillsSection = () => {
  return (
    <div className="mt-20 xl:mt-[198px] mx-4 p-4 text-center">
      <QuickCallButton href="/skills" title="Skills & Expertise" />

      <p className="text-3xl xl:text-[56px] xl:leading-[67.2px] xl:max-w-[534px] xl:mx-auto font-medium text-center text-[rgba(0,31,31,1)] mt-4">
        The Architect of Strategic Growth
      </p>

      <p className="text-sm xl:text-base xl:max-w-[534px] xl:mx-auto font-medium text-[rgba(0,31,31,0.8)] mt-4">
        With 30 years of experience, I’ve led complex projects and developed
        strategies for sustainable business growth, driving impactful results
        across industries.
      </p>

      <div className="mt-5">
        {/* MOBILE */}
        <div className="relative md:hidden">
          <div className="relative w-full">
            <Image
              src="/svgs/SkillsBanner.svg"
              alt="skills banner"
              width={400}
              height={400}
              sizes="100vw"
              className="m-auto"
              priority
            />
          </div>

          <div className="h-[108px] w-[108px] rounded-full absolute inset-0 m-auto z-10 relative">
            <Image
              src="/images/ms small square.jpg"
              alt="munir suri"
              fill
              sizes="108px"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* TABLET */}
        <div className="relative hidden md:block xl:hidden">
          <div className="relative w-full">
            <Image
              src="/svgs/SkillsBannerMd.svg"
              alt="skills banner"
              width={600}
              height={600}
              sizes="(max-width: 1200px) 100vw, 600px"
              className="m-auto"
            />
          </div>

          <div className="h-[177px] w-[177px] rounded-full absolute inset-0 m-auto relative">
            <Image
              src="/images/ms small.jpg"
              alt="munir suri"
              fill
              sizes="177px"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden xl:block relative xl:w-[700px] xl:h-[700px] m-auto">
          <div className="absolute inset-0 m-auto">
            <Image
              src="/svgs/SkillsBannerLg.svg"
              alt="skills banner"
              fill
              sizes="700px"
              className="object-contain"
            />
          </div>

          <div className="h-[286px] w-[286px] rounded-full absolute inset-0 m-auto relative">
            <Image
              src="/images/ms small.jpg"
              alt="munir suri"
              fill
              sizes="286px"
              className="rounded-full object-cover"
            />
          </div>

          <div className="xl:absolute xl:inset-0 xl:m-auto mt-5">
            <Accordion />
          </div>
        </div>

        {/* Accordion below for mobile/tablet */}
        <div className="relative xl:hidden mt-5">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
