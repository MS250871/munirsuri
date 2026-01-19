import Image from 'next/image';
import QuickCallButton from './QuickCallButton';
import Accordion from './Accordion';

const SkillsSection = () => {
  return (
    <section className="mt-20 xl:mt-[198px] mx-4 p-4 text-center">
      <QuickCallButton href="/skills" title="Skills & Expertise" />

      <p className="text-3xl xl:text-[56px] xl:leading-[67.2px] xl:max-w-[534px] xl:mx-auto font-medium text-[rgba(0,31,31,1)] mt-4">
        The Architect of Strategic Growth
      </p>

      <p className="text-sm xl:text-base xl:max-w-[534px] xl:mx-auto font-medium text-[rgba(0,31,31,0.8)] mt-4">
        With 30 years of experience, I’ve led complex projects and developed
        strategies for sustainable business growth, driving impactful results
        across industries.
      </p>

      <div className="mt-8">
        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden flex justify-center">
          {/* Banner */}
          <Image
            src="/svgs/SkillsBanner.svg"
            alt="skills banner"
            width={400}
            height={400}
            sizes="100vw"
            className="mx-auto"
            priority
          />

          {/* Center profile */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[108px] w-[108px] rounded-full overflow-hidden">
              <Image
                src="/images/ms-small-square.jpg"
                alt="Munir Suri"
                fill
                sizes="108px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= TABLET ================= */}
        <div className="relative hidden md:flex xl:hidden justify-center">
          {/* Banner */}
          <Image
            src="/svgs/SkillsBannerMd.svg"
            alt="skills banner"
            width={600}
            height={600}
            sizes="(max-width: 1200px) 100vw, 600px"
            className="mx-auto"
          />

          {/* Center profile */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[177px] w-[177px] rounded-full overflow-hidden">
              <Image
                src="/images/ms-small.jpg"
                alt="Munir Suri"
                fill
                sizes="177px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden xl:flex flex-col items-center relative">
          <div className="relative w-[700px] h-[700px]">
            {/* Banner */}
            <Image
              src="/svgs/SkillsBannerLg.svg"
              alt="skills banner"
              fill
              sizes="700px"
              className="object-contain"
            />

            {/* Center profile */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[286px] w-[286px] rounded-full overflow-hidden">
                <Image
                  src="/images/ms-small.jpg"
                  alt="Munir Suri"
                  fill
                  sizes="286px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Desktop accordion overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Accordion />
          </div>
        </div>

        {/* ================= Accordion for Mobile/Tablet ================= */}
        <div className="xl:hidden mt-6">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
