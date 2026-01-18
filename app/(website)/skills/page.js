import PageHeader from '@/components/PageHeader';
import { skillsDetailData } from '@/lib/skillsDetailData';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="">
      <PageHeader
        href="/skills"
        buttonTitle="Skills & Expertise"
        mainTitle="Skills Built Over Time"
      />

      <div className="mt-[150px] md:mx-[50px] xl:mx-[100px] mb-20">
        {skillsDetailData.map((skill) => {
          return (
            <div
              key={skill.id}
              className="relative mt-4 mx-4 border border-[rgba(233,233,233,1)] shadow-customLight rounded-[20px] overflow-hidden"
            >
              {/* BACKGROUND IMAGES */}
              <div className="absolute inset-0 z-0 w-full">
                {/* MOBILE */}
                <div className="relative w-full h-full xl:hidden">
                  <Image
                    src={`/svgs/BgSkillsMobile${skill.bg}.svg`}
                    alt="background pic"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* DESKTOP */}
                <div className="relative w-full h-full hidden xl:block">
                  <Image
                    src={`/svgs/BgSkillsDesktop${skill.bg}.svg`}
                    alt="background pic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-2.5 pt-5 xl:p-[50px]">
                <div className="xl:flex items-center justify-between">
                  <p className="text-[26px] leading-[31.2px] font-semibold text-white capitalize xl:w-2/5 xl:text-[40px] xl:leading-[48px] xl:font-bold">
                    {skill.title}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-white xl:w-3/5 xl:text-[18px] xl:leading-[27px] xl:ml-4">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 xl:bg-skillGradient xl:px-3 xl:pt-[1.5px] xl:pb-3 xl:border xl:border-[rgba(255,255,255,0.6)] xl:rounded-[20px] xl:flex xl:items-center xl:justify-center xl:gap-3">
                  {skill.highlights.map((hg, index) => {
                    return (
                      <div
                        key={index}
                        className="mt-2.5 p-4 rounded-xl border border-[rgba(255,255,255,0.6)] xl:w-1/4 xl:h-36"
                        style={{
                          background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.4)`,
                        }}
                      >
                        <p className="capitalize text-[18px] leading-[23.4px] font-medium text-[rgba(0,31,31,1)]">
                          {hg.title}
                        </p>

                        <p className="text-[rgba(0,31,31,0.7)] text-xs leading-[18px]">
                          {hg.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
