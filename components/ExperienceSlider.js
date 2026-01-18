'use client';
import { experienceData } from '@/lib/experienceData';
import ExperienceCard from './ExperienceCard';
import { useRef, useEffect, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ExperienceSlider = () => {
  const containerRef = useRef(null);
  const [isStart, setIsStrart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateButtonState = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsStrart(scrollLeft === 0);
      setIsEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;

      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current; // 👈 copy once

    if (!container) return;

    updateButtonState();
    container.addEventListener('scroll', updateButtonState);

    return () => {
      container.removeEventListener('scroll', updateButtonState);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex flex-col w-full md:flex-row items-start md:items-center gap-4 md:gap-0 h-[660px] md:h-[612px] pt-6 md:pt-0 md:px-6 overflow-auto no-scrollbar"
      >
        {experienceData.map((company) => (
          <ExperienceCard key={company.id} company={company} />
        ))}
      </div>

      <div className="hidden xl:flex xl:items-center xl:justify-center xl:gap-6">
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
  );
};

export default ExperienceSlider;
