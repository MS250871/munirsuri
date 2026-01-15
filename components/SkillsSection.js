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
        <div className="relative md:hidden">
          <img
            src="/svgs/SkillsBanner.svg"
            alt="skills banner"
            className="m-auto"
          />
          <div className="h-[108px] w-[108px] rounded-full absolute inset-0 m-auto z-10">
            <Image
              src="/images/ms small square.jpg"
              fill
              alt="munir suri"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="relative hidden md:block xl:hidden">
          <img
            src="/svgs/SkillsBannerMd.svg"
            alt="skills banner"
            className="m-auto"
          />
          <div className="h-[177px] w-[177px] rounded-full absolute inset-0 m-auto">
            <Image
              src="/images/ms small.jpg"
              fill
              alt="munir suri"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="hidden xl:block relative xl:w-[700px] xl:h-[700px] m-auto ">
          <img
            src="/svgs/SkillsBannerLg.svg"
            alt="skills banner"
            className="absolute inset-0 m-auto"
          />
          <div className="h-[286px] w-[286px] rounded-full absolute inset-0 m-auto">
            <Image
              src="/images/ms small.jpg"
              fill
              alt="munir suri"
              className="rounded-full object-cover"
            />
          </div>
          <div className="xl:absolute xl:inset-0 xl:m-auto  mt-5">
            <Accordion />
          </div>
        </div>
        <div className="relative xl:hidden mt-5">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
