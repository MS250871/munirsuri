import React from 'react';
import QuickCallButton from './QuickCallButton';
import DownloadCVBtn from './DownloadCVBtn';
import ViewCVBtn from './ViewCVBtn';
import Image from 'next/image';

const HeroMain = () => {
  return (
    <div className="p-2.5 rounded-[26px] shadow-custom w-full xl:w-2/3">
      <div className="p-2.5 lg:p-8 bg-[#f4f0eb99]/50 border border-[rgba(0,61,61,0.0392)] rounded-[20px]">
        <QuickCallButton title="Available for quick call" />

        <p className="text-[42px] font-semibold leading-[46.2px] xl:text-[72px] xl:leading-[86.4px] mt-6">
          Munir Suri
        </p>

        <p className="mt-4 text-sm font-normal leading-[21px] xl:text-base xl:leading-6">
          A journey that spans close to three decades, where ideas were
          transformed into innovations, and challenges shaped a leader.
        </p>

        <div className="mt-8 flex gap-4 mb-5">
          <DownloadCVBtn />
          <ViewCVBtn />
        </div>

        <div className="flex overflow-x-auto md:overflow-visible md:flex-row space-x-4 no-scrollbar">
          {/* EXPERIENCE */}
          <div className="min-w-[80%] px-6 py-4 md:min-w-0 md:flex-1 bg-white shadow-customLight rounded-[14px] border border-[#e9e9e9]">
            <div className="flex gap-3 items-center">
              <div className="relative w-14 h-14">
                <Image
                  src="/svgs/experience.svg"
                  alt="Experience"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24.2px] text-transparent bg-clip-text bg-gradient-to-b from-[#39bcbc] to-[#003d3d]">
                  30+
                </p>
                <p className="capitalize text-sm">Years experience</p>
              </div>
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="min-w-[80%] px-6 py-4 md:min-w-0 md:flex-1 bg-white shadow-customLight p-[14px] rounded-[14px] border border-[#e9e9e9]">
            <div className="flex gap-3 items-center">
              <div className="relative w-14 h-14">
                <Image
                  src="/svgs/boost.svg"
                  alt="Revenue Boost"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24.2px] text-transparent bg-clip-text bg-gradient-to-b from-[#ec9d15] to-[#3d1200]">
                  5+
                </p>
                <p className="capitalize text-sm">Industries</p>
              </div>
            </div>
          </div>

          {/* STORES */}
          <div className="min-w-[80%] px-6 py-4 md:min-w-0 md:flex-1 bg-white shadow-customLight p-[14px] rounded-[14px] border border-[#e9e9e9]">
            <div className="flex gap-3 items-center">
              <div className="relative w-14 h-14">
                <Image
                  src="/svgs/stores.svg"
                  alt="Stores"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24.2px] text-transparent bg-clip-text bg-gradient-to-b from-[#0188ff] to-[#000c3d]">
                  350+
                </p>
                <p className="capitalize text-sm">Stores Optimized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
