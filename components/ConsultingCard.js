'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuChevronDown } from 'react-icons/lu';

const ConsultingCard = ({ data, open, toggleOpen }) => {
  const { id, img, projectName, longName, mediumDescription } = data;

  const gr =
    id < 5
      ? `tech-gr-${id}`
      : id < 9
      ? `tech-gr-${id - 4}`
      : `tech-gr-${id - 8}`;

  const bd = id < 5 ? `bd-${id}` : id < 9 ? `bd-${id - 4}` : `bd-${id - 8}`;

  const is_open = open === id;

  return (
    <>
      <div
        className={`flex flex-col gap-4 shadow-customLight p-[6px] lg:p-[8px] rounded-2xl border border-[rgba(233,233,233,1)] cursor-pointer ${
          is_open ? gr : 'bg-white'
        } lg:min-w-[276px]`}
        onClick={() => toggleOpen(id)}
      >
        <div className="flex items-center justify-between gap-4 lg:flex-col">
          <div className="flex items-center justify-start gap-4 lg:flex-col">
            <div
              className={`shrink-0 relative w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] lg:w-[260px] lg:h-[130px] flex items-center justify-center overflow-hidden rounded-xl aspect-w-2 aspect-h-1 border-[3px] lg:border-[7px]  ${bd}`}
            >
              <Image
                src={img}
                alt="project pic"
                fill
                sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 260px"
                className="object-cover"
              />
            </div>
            <p className="text-sm xl:text-lg xl:leading-[26px] font-medium lg:max-w-[200px] xl:max-w-[256px]">
              {projectName}
            </p>
          </div>
          <LuChevronDown
            className={`shrink-0 transition-transform duration-300
          ${is_open ? 'rotate-180' : 'rotate-0'} mr-3 xl:mr-0 xl:mb-3`}
            size={24}
          />
        </div>

        {is_open && (
          <div className="lg:hidden p-2.5">
            <p className="text-xl leading-[26px] font-medium">{longName}</p>
            <p className="mt-[10px] text-sm leading-6 text-[rgba(0,31,31,0.8)]">
              {mediumDescription}
            </p>
            <div className="flex">
              <Link href={`/consulting/${id}`}>
                <div className="flex items-center justify-center mt-2.5  px-5 py-[9px] rounded-full bg-white text-[rgba(38,38,38,1)] shadow-custom text-sm xl:text-[18px] font-semibold">
                  View More
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConsultingCard;
