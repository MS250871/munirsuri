import Image from 'next/image';
import QuickCallButton from './QuickCallButton';
import Accordion from './Accordion';

const SkillsSection = () => {
  return (
    <section className="mt-20 xl:mt-[198px] mx-4 p-4 text-center overflow-x-hidden">
      <QuickCallButton href="/skills" title="Skills & Expertise" />

      <p className="text-3xl xl:text-[56px] xl:leading-[67.2px] xl:max-w-[534px] xl:mx-auto font-medium text-[rgba(0,31,31,1)] mt-4">
        Skills Built Over Time
      </p>

      <p className="text-sm xl:text-base xl:max-w-[534px] xl:mx-auto font-medium text-[rgba(0,31,31,0.8)] mt-4">
        With 30 years of experience, I’ve led complex projects and developed
        strategies for sustainable business growth, driving impactful results
        across industries.
      </p>

      <div className="mt-8">
        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden flex justify-center overflow-hidden">
          <Image
            src="/svgs/SkillsBanner.svg"
            alt="skills banner"
            width={300}
            height={300}
            sizes="100vw"
            className="mx-auto max-w-full h-auto"
            priority
          />

          {/* INNER IMAGE */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="h-[130px] w-[130px] rounded-full overflow-hidden">
              <Image
                src="/images/ms-small.jpg"
                alt="Munir Suri"
                fill
                sizes="(max-width: 768px) 100vw, 130px"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ================= TABLET ================= */}
        <div className="relative hidden md:flex xl:hidden justify-center overflow-hidden">
          <Image
            src="/svgs/SkillsBannerMd.svg"
            alt="skills banner"
            width={600}
            height={600}
            sizes="100vw"
            className="mx-auto max-w-full h-auto"
          />

          <div
            className="absolute left-1/2 top-1/2 
                       -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
              <Image
                src="/images/ms-small.jpg"
                alt="Munir Suri"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden xl:flex justify-center">
          <div className="relative w-[700px] h-[700px]">
            <Image
              src="/svgs/SkillsBannerLg.svg"
              alt="skills banner"
              fill
              sizes="(max-width: 1280px) 100vw, 700px"
              className="object-contain z-0"
              priority
            />

            {/* CENTER IMAGE */}
            <div
              className="absolute left-1/2 top-1/2 
                         -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="h-[294px] w-[294px] rounded-full overflow-hidden">
                <Image
                  src="/images/ms-small.jpg"
                  alt="Munir Suri"
                  fill
                  sizes="(max-width: 1280px) 100vw, 294px"
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* Accordion */}
            <div className="absolute inset-0 z-20">
              <Accordion overlay containerSize={700} />
            </div>
          </div>
        </div>

        {/* MOBILE + TABLET ACCORDION */}
        <div className="xl:hidden mt-6 overflow-x-hidden">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
