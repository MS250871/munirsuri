import React from 'react';
import { experienceDetailData } from '@/lib/experienceDetailData';

const ExperienceDetail = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-customLight border border-[rgba(233,233,233,1)] px-2.5 pb-2.5 xl:px-[30px] xl:pb-[30px] mx-4 xl:mx-[100px] mt-[150px]">
      {experienceDetailData.map((exp) => (
        <div
          key={exp.id}
          className=" mt-2.5 xl:mt-[30px] border rounded-[20px] xl:flex xl:items-stretch xl:justify-center"
        >
          <div className="relative w-full h-full p-4 xl:h-auto">
            <div className="absolute inset-0 z-0 rounded-t-[20px] xl:rounded-none xl:rounded-l-[20px] overflow-hidden h-full">
              <img
                src={`/images/bgDarkMobile${exp.id}.png`}
                alt="background pic"
                className="xl:hidden w-full h-full object-cover"
              />
              <img
                src={`/images/bgDarkDT${exp.id}.png`}
                alt="background pic"
                className="hidden xl:block w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col items-start">
              <p
                className={`text-2xl leading-[36px] font-bold opacity-[23%]`}
                style={{ color: exp.yclr }}
              >
                {exp.year}
              </p>
              <p
                className={`mt-5 px-6 py-2 border text-sm uppercase rounded-full`}
                style={{
                  backgroundColor: exp.btnclr,
                  color: exp.yclr,
                  borderColor: exp.bdrclr,
                }}
              >
                {exp.company}
              </p>
              <p className="mt-2 text-[20px] leading-[24.2px] font-medium text-[rgba(38,38,38,1)]">
                {exp.title}
              </p>
              <p className="mt-2.5 text-sm leading-[27px] text-[rgba(62,62,62,1)]">
                {exp.description}
              </p>
            </div>
          </div>
          <div className="relative w-full h-full p-4 xl:h-auto">
            <div className="absolute inset-0 z-0 rounded-b-[20px] xl:rounded-none xl:rounded-r-[20px] overflow-hidden h-full">
              <img
                src={`/images/bgLightMobile${exp.id}.png`}
                alt="background pic"
                className="xl:hidden w-full h-full object-cover"
              />
              <img
                src={`/images/bgLightDT${exp.id}.png`}
                alt="background pic"
                className="hidden xl:block w-full h-full object-cover"
              />
            </div>
            <div className="relaitve z-10">
              <ul className="relative list-disc z-10">
                {exp.highlights.map((hl, index) => (
                  <li
                    key={index}
                    className="ml-4 mt-[18px] text-sm font-normal text-[rgba(62,62,62,1)]"
                  >
                    {hl}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetail;
