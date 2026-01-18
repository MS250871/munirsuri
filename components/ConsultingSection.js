'use client';
import { consultingData } from '@/lib/consultingData';
import ConsultingCard from './ConsultingCard';
import { useRef, useEffect, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const ConsultingSection = () => {
  const [open, setOpen] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isStart, setIsStrart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const gr =
    open < 5
      ? `tech-gr-${open}`
      : open < 9
      ? `tech-gr-${open - 4}`
      : `tech-gr-${open - 8}`;

  const updateButtonState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setIsStrart(scrollLeft === 0);
      setIsEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;

      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current; // 👈 copy once

    if (!container) return;

    updateButtonState();
    container.addEventListener('scroll', updateButtonState);

    return () => {
      container.removeEventListener('scroll', updateButtonState);
    };
  }, []);

  const toggleOpen = (id) => {
    setOpen(open === id ? 0 : id);
  };

  const selectedProjectData = consultingData.find(
    (project) => project.id === open
  );

  return (
    <div className="mt-20 mx-4 xl:mt-[110px] overflow-hidden">
      <div className="flex w-full items-center justify-between">
        <p className="xl:ml-[100px] text-3xl xl:text-[56px] xl:leading-[67.2px] font-medium text-[rgab(30,36,44,1)]">
          Consulting
        </p>

        <div className="hidden xl:mr-[100px] xl:flex xl:items-center xl:justify-center xl:gap-6">
          <button
            onClick={() => scroll('left')}
            className={`w-16 h-16 rounded-full text-white flex items-center justify-center ${
              isStart ? 'bg-gray-300' : 'button-bg'
            }`}
          >
            <FaArrowLeftLong size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`w-16 h-16 rounded-full text-white flex items-center justify-center ${
              isEnd ? 'bg-gray-300' : 'button-bg'
            }`}
          >
            <FaArrowRightLong size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex flex-col lg:flex-row mt-[30px] gap-4 bg-transparent overflow-auto no-scrollbar"
      >
        {consultingData.map((project) => (
          <ConsultingCard
            key={project.id}
            data={project}
            open={open}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>

      <div>
        {selectedProjectData && (
          <div
            className={`hidden lg:block mt-9 p-8 rounded-[20px] mb-10 w-full 2xl:w-[1350px] 2xl:mx-auto ${gr}`}
          >
            <div className="flex items-center justify-between gap-8">
              <p className="text-[40px] leading-[48px] font-medium w-1/2">
                {selectedProjectData.longName}
              </p>

              <div className="flex flex-col items-start w-1/2">
                <p className="mt-[10px] text-sm leading-6 text-[rgba(0,31,31,0.8)]">
                  {selectedProjectData.mediumDescription}
                </p>

                <div className="flex">
                  <Link href={`/consulting/${selectedProjectData.id}`}>
                    <div className="flex items-center justify-center mt-2.5 px-5 py-[9px] rounded-full bg-white text-[rgba(38,38,38,1)] shadow-custom text-sm xl:text-[18px] font-semibold">
                      View More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultingSection;
