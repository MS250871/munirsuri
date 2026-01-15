import Image from 'next/image';
import QuickCallButton from './QuickCallButton';
import analyticsImg from '../public/images/Analytics.png';
import ecommerceImg from '../public/images/ecommerce3.png';
import SFAImg from '../public/images/SFA.png';
import ERPImg from '../public/images/ERP.png';

const TechnicalSkillsSection = () => {
  return (
    <div className="mt-20 lg:m-[60px] xl:mt-[110px] mx-4 xl:m-[100px] flex flex-col items-center justify-center bg-white rounded-[36px] xl:rounded-[66px] px-4 py-[34px] shadow-customLight border border-[rgba(233,233,233,1)]">
      <QuickCallButton href="/skills" title="Skills & Expertise" />
      <p className="text-3xl xl:text-[56px] xl:leading-[67.2px] xl:max-w-[534px] xl:mx-auto font-medium text-center text-[rgba(0,31,31,1)] mt-4">
        Technical Skills
      </p>
      <p className="text-sm xl:text-base xl:max-w-[534px] xl:mx-auto font-medium text-center text-[rgba(0,31,31,0.8)] mt-4">
        Experienced in digital platforms, ERP optimization, and CRM, I have
        empowered data-driven decision-making and seamless customer experiences
        across B2B and B2C channels.
      </p>
      <div className="flex flex-col gap-4 mt-16 xl:flex-row xl:flex-wrap xl:gap-4 xl:justify-center">
        <div className="tech-gr-1 relative overflow-hidden h-[208px] md:h-[240px] rounded-2xl p-4 w-full xl:w-3/5 flex flex-col gap-4 border border=[rgba(233,233,233,1) shadow-customLight">
          <p className="text-[18px] leading-[23.4px] xl:text=[22px] xl:leading-[28.6px] font-medium">
            Data Analytics And Reporting
          </p>
          <p className="text-xs md:text-sm leading-[18px] font-normal">
            Strong capability in using data analytics to generate insights and
            make informed business decisions, especially in sales forecasting
            and customer behavior.
          </p>
          <div
            className="w-11/12 rounded-[20px] mx-auto object-cover"
            style={{
              boxShadow:
                '-5px 0 10px rgba(0, 0, 0, 0.2),  5px 0 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Image
              src={analyticsImg}
              alt="analytics dashboard Pic"
              className="rounded-t-[20px]"
            />
          </div>
        </div>
        <div className="tech-gr-2 relative overflow-hidden h-[208px] md:h-[240px] rounded-2xl p-4 w-full xl:w-1/3 flex flex-col gap-4 border border=[rgba(233,233,233,1) shadow-customLight">
          <p className="text-[18px] leading-[23.4px] xl:text=[22px] xl:leading-[28.6px] font-medium">
            Digital Platforms
          </p>
          <p className="text-xs md:text-sm leading-[18px] font-normal">
            Proficient in driving digital platform development for B2B and B2C
            solutions, including e-commerce, mobile applications, and CRMs.
          </p>
          <div
            className="w-11/12 rounded-[20px] mx-auto object-cover"
            style={{
              boxShadow:
                '-5px 0 10px rgba(0, 0, 0, 0.2),  5px 0 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Image
              src={ecommerceImg}
              alt="ecommerce PDP Pic"
              className="rounded-t-[20px]"
            />
          </div>
        </div>
        <div className="tech-gr-3 relative overflow-hidden h-[208px] md:h-[240px] rounded-2xl p-4 w-full xl:w-1/3 flex flex-col gap-4 border border=[rgba(233,233,233,1) shadow-customLight">
          <p className="text-[18px] leading-[23.4px] xl:text=[22px] xl:leading-[28.6px] font-medium">
            SFA & CRM Tools
          </p>
          <p className="text-xs md:text-sm leading-[18px] font-normal">
            Implemented and managed Sales Force Automation (SFA) tools and CRM
            systems to empower sales teams and streamline customer interactions.
          </p>
          <div
            className="w-11/12 rounded-t-[20px] mx-auto object-cover"
            style={{
              boxShadow:
                '-5px 0 10px rgba(0, 0, 0, 0.2),  5px 0 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Image
              src={SFAImg}
              alt="SFA dashboard Pic"
              className="rounded-t-[20px]"
            />
          </div>
        </div>
        <div className="tech-gr-4 relative overflow-hidden h-[208px] md:h-[240px] rounded-2xl p-4 w-full xl:w-3/5 flex flex-col gap-4 border border=[rgba(233,233,233,1) shadow-customLight">
          <p className="text-[18px] leading-[23.4px] xl:text=[22px] xl:leading-[28.6px] font-medium">
            ERP & Inventory Management
          </p>
          <p className="text-xs md:text-sm leading-[18px] font-normal">
            Experience in implementing ERP systems to optimize inventory, sales,
            and order management processes at Hippo Stores and Walmart.
          </p>
          <div
            className="w-11/12 rounded-[20px] mx-auto object-cover"
            style={{
              boxShadow:
                '-5px 0 10px rgba(0, 0, 0, 0.2),  5px 0 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Image
              src={ERPImg}
              alt="ERP dashboard Pic"
              className="rounded-t-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsSection;
