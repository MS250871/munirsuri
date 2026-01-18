'use client';

import { consultingData } from '@/lib/consultingData';
import * as React from 'react';
import Image from 'next/image';

const SingleProject = ({ params }) => {
  const { projectId } = React.use(params);

  const projectData = consultingData.find(
    (proj) => proj.id === parseInt(projectId)
  );

  if (!projectData) return null;

  const {
    id,
    img,
    projectName,
    longName,
    company,
    smallDescription,
    fullDescription,
    myCompany,
    role,
    approach,
  } = projectData;

  return (
    <div className="mx-4 md:mx-9 xl:mx-[200px] mt-7 p-2.5">
      <div className="xl:flex xl:items-start xl:justify-center">
        <div className="xl:w-3/4">
          <div className="max-w-[656px] mx-auto">
            <p className="text-[24px] leading-[31.2px] md:text-[28px] md:leading-[36.4px] xl:text-[40px] xl:leading-[52px] font-medium capitalize text-center xl:text-start">
              {projectName}
            </p>

            <p className="mt-2.5 text-sm md:text-base xl:text-xl text-[rgba(0,31,31,0.7)] text-center xl:text-start">
              {smallDescription}
            </p>
          </div>

          <div className="xl:hidden border border-[rgba(0,31,31,0.3)] w-full mt-4"></div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-start md:justify-between xl:flex-col xl:items-start xl:w-1/4 xl:border-l xl:border-l-[rgba(0,31,31,1)] xl:pl-10">
          <div className="text-start md:text-center xl:text-start mt-6">
            <p className="text-sm md:text-base text-[rgba(0,31,31,0.7)] uppercase">
              Client
            </p>
            <p className="text-base md:text-xl leading-[30px] font-medium text-[rgba(0,31,31,1)]">
              {company}
            </p>
          </div>

          <div className="text-start md:text-center xl:text-start mt-6">
            <p className="text-sm md:text-base text-[rgba(0,31,31,0.7)] uppercase">
              My Company
            </p>
            <p className="text-base md:text-xl leading-[30px] font-medium text-[rgba(0,31,31,1)]">
              {myCompany}
            </p>
          </div>

          <div className="text-start md:text-center xl:text-start mt-6">
            <p className="text-sm md:text-base text-[rgba(0,31,31,0.7)] uppercase">
              Role
            </p>
            <p className="text-base md:text-xl leading-[30px] font-medium text-[rgba(0,31,31,1)]">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="xl:max-w-screen-md xl:mx-auto">
        <div className="relative w-full aspect-[2/1] rounded-[20px] overflow-hidden my-20">
          <Image
            src={img}
            alt="project pic"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-3xl font-medium capitalize">{longName}</p>

          <p className="mt-7 text-[18px] xl:text-xl text-[rgba(0,31,31,0.7)]">
            {fullDescription}
          </p>

          <p className="mt-20 text-3xl font-medium">My Approach</p>

          {approach.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 my-2.5 rounded-2xl border border-[rgba(233,233,233,1)] shadow-custom"
            >
              <p className="text-[18px] leading-[23.4px] xl:text-xl font-medium">
                {index + 1}. {item.approachTitle}
              </p>

              <p className="mt-2.5 text-sm xl:text-base text-[rgba(0,31,31,0.7)]">
                {item.approachDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
