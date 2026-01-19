'use client';

import { useEffect, useState } from 'react';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';

const AccordionCard = ({
  cardData,
  index,
  openPanel,
  ToggleOpen,
  totalPanels,
  overlay = false,
  containerSize = 700,
}) => {
  const { id, title, img, description } = cardData;
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const m = window.matchMedia('(min-width:1280px)');
    const onChange = () => setIsXl(m.matches);
    onChange();
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, []);

  const styleAbsolute = {};

  if (overlay && isXl) {
    const radius = 320; // OUTSIDE light-blue ring
    const cx = containerSize / 2;
    const cy = containerSize / 2;

    const angleDeg = (360 / totalPanels) * index - 90;
    const angleRad = (angleDeg * Math.PI) / 180;

    const x = cx + Math.cos(angleRad) * radius;
    const y = cy + Math.sin(angleRad) * radius;

    styleAbsolute.position = 'absolute';
    styleAbsolute.left = `${x}px`;
    styleAbsolute.top = `${y}px`;
    styleAbsolute.transform = 'translate(-50%, -50%)';
    styleAbsolute.zIndex = 30;
  }

  return (
    <div
      style={styleAbsolute}
      className="flex flex-col gap-3 bg-white rounded-lg px-3 pt-4 
                 border border-gray-200 shadow-accordionShadow
                 w-[300px]"
    >
      <div className="w-full flex items-start justify-between">
        <div>{img}</div>

        <p className="hidden xl:block ml-5 text-left text-sm font-medium">
          {title}
        </p>

        <button onClick={() => ToggleOpen(id)} className="text-gray-300 w-8">
          {openPanel === id ? (
            <IoIosArrowDropupCircle size={24} />
          ) : (
            <IoIosArrowDropdownCircle size={24} />
          )}
        </button>
      </div>

      <p className="xl:hidden text-left text-sm font-medium">{title}</p>

      <div
        className={`transition-all duration-500 overflow-hidden text-left text-xs
          ${openPanel === id ? 'max-h-[500px]' : 'max-h-0'}`}
      >
        {description}
        <a
          href="/skills"
          className="block my-4 px-4 py-2 rounded-full 
                     button-bg text-white text-xs font-medium"
        >
          View In Detail
        </a>
      </div>
    </div>
  );
};

export default AccordionCard;
