'use client';
import { useRef } from 'react';

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="container flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 p-4"
      >
        <div className="min-w-[200px] mr-4 bg-gray-200 p-6 rounded-lg">
          Card 1
        </div>
        <div className="min-w-[200px] mr-4 bg-gray-200 p-6 rounded-lg">
          Card 2
        </div>
        <div className="min-w-[200px] mr-4 bg-gray-200 p-6 rounded-lg">
          Card 3
        </div>
        {/* Add more cards as needed */}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &larr;
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &rarr;
      </button>
    </div>
  );
};

export default HorizontalScroll;
