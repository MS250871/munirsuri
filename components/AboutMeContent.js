import { TabsDemo } from './TabsDemo';

const AboutMeContent = () => {
  return (
    <div className="mt-20 mx-4 xl:mx-[100px] p-2.5 xl:p-[30px] bg-white rounded-[32px] border border-[rgba(233,233,233,1)] shadow-customLight">
      <div className="relative w-full overflow-hidden rounded-[32px] shadow-custom">
        <div className="absolute inset-0 z-0 h-full rounded-[32px] overflow-hidden ">
          <img
            src="/svgs/BgAboutBlueSm.svg"
            alt="background gradient"
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src="/svgs/BgAboutBlueMd.svg"
            alt="background gradient"
            className="w-full h-full object-cover hidden md:block xl:hidden"
          />
          <img
            src="/svgs/BgAboutBlueLg.svg"
            alt="background gradient"
            className="w-full h-full object-cover hidden xl:block"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center overflow-hidden">
          <div className="w-[95%] xl:w-[30%] flex items-center justify-between p-2.5 m-4 rounded-full bg-white border border-[rgba(0,31,31,0.1)] shadow-customLight">
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-[rgba(240,240,255,1)] border border-[rgba(189,189,255,1)] rounded-full text-xs md:text-sm font-medium">
              Achievements
            </p>
            <p className=" px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-transparent text-xs md:text-sm font-medium">
              My Approach
            </p>
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-transparent text-xs md:text-sm font-medium">
              Education
            </p>
          </div>
          <div className="relative z-0 w-full overflow-hidden">
            <TabsDemo />
          </div>
        </div>
      </div>
      <div className="relative w-full mt-2.5 xl:mt-[30px] rounded-[32px] shadow-custom">
        <div className="absolute inset-0 z-0 h-full rounded-[32px] overflow-hidden">
          <img
            src="/svgs/BgAboutYellowSm.svg"
            alt="background gradient"
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src="/svgs/BgAboutYellowMd.svg"
            alt="background gradient"
            className="w-full h-full object-cover hidden md:block xl:hidden"
          />
          <img
            src="/svgs/BgAboutYellowLg.svg"
            alt="background gradient"
            className="w-full h-full object-cover hidden xl:block"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[95%] xl:w-[30%] flex items-center justify-between p-2.5 m-4 rounded-full bg-white border border-[rgba(0,31,31,0.1)] shadow-customLight">
            <p className=" px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-transparent mr-2.5 text-xs md:text-sm font-medium">
              Achievements
            </p>
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-3 bg-[rgba(248,251,231,1)] border border-[rgba(227,239,159,1)] rounded-full text-xs md:text-sm font-medium">
              My Approach
            </p>
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-transparent text-xs md:text-sm font-medium">
              Education
            </p>
          </div>
          <div className="my-[53px] md:my-[23px] xl:mt-[111px] xl:mb-[137px] text-[18px] xl:text-[24px] leading-[28px] xl:leading-[50px] tracking-tight font-medium text-[rgba(0,31,31,1)] text-center max-w-[286px] md:max-w-[662px] xl:max-w-[1192px]">
            I believe that every business is a story waiting to be told. My
            approach is simple but powerful: lead with vision, execute with
            precision, and always, always stay true to the customer’s needs.
            Whether I’m scaling a business to new heights, designing digital
            experiences, or crafting custom furniture, the foundation remains
            the same—people matter, and success is measured by the impact you
            have on their lives.
          </div>
        </div>
      </div>
      <div className="relative w-full mt-2.5 xl:mt-[30px] rounded-[32px] shadow-custom">
        <div className="absolute inset-0 z-0 h-full rounded-[32px] overflow-hidden">
          <img
            src="/svgs/BgAboutGreenSm.svg"
            alt="background gradient"
            className="w-full h-full object-cover md:hidden "
          />
          <img
            src="/svgs/BgAboutGreenMd.svg"
            alt="background gradient"
            className="w-full h-full object-cover hidden md:block xl:hidden"
          />
          <img
            src="/svgs/BgAboutGreenLg.svg"
            alt="background gradient"
            className="w-full h-full object-cover hidden xl:block"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[95%] md:w-[80%] xl:w-[30%] flex items-center justify-between p-2.5 m-4 rounded-full bg-white border border-[rgba(0,31,31,0.1)] shadow-customLight">
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-transparent text-xs md:text-sm font-medium">
              Achievements
            </p>
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-transparent text-center text-xs md:text-sm font-medium">
              My Approach
            </p>
            <p className="px-1 xs:px-2 md:px-10 py-1 md:py-2 xl:px-4 bg-[rgba(233,255,238,1)] border border-[rgba(20,189,124,1)] rounded-full text-xs md:text-sm font-medium">
              Education
            </p>
          </div>
          <div className="mt-[23px] text-[18px] xl:text-[24px] leading-[28px] xl:leading-[50px] tracking-tight font-medium text-[rgba(0,31,31,1)] text-center max-w-[286px] md:max-w-[662px] xl:max-w-[1192px]">
            Behind every innovation, there’s a solid foundation. Mine was laid
            at
            <span className="text-[rgba(20,189,124,1)] xl:text-[34px] xl:leading-[50px]">
              {' '}
              IIM Kozhikode
            </span>
            , where I specialized in Marketing and Finance. The lessons learned
            here—about leadership, strategy, and the importance of
            execution—have been the bedrock of my career. But even before that,
            my engineering background from{' '}
            <span className="text-[rgba(20,189,124,1)] xl:text-[34px] xl:leading-[50px]">
              PREC (1990-1994)
            </span>{' '}
            gave me the technical mindset to approach problems with creativity
            and logic
          </div>
        </div>
        <div className="relative z-10 w-full h-[265px] overflow-hidden flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%+40px)] -translate-y-[24%] rotate-[-9.74deg]">
            <img
              src="/images/iimk2.png"
              alt="IIM Khozikode Picture 1"
              className="w-[220.74px] h-[313.73px] object-cover rounded-3xl"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-40px)] -translate-y-[27%] rotate-[3.73deg]">
            <img
              src="/images/iimk1.jpg"
              alt="IIM Khozikode Picture 2"
              className="w-[206.59px] h-[294.31px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
