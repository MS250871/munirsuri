import clsx from 'clsx';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';

const AccordionCard = ({ cardData, openPanel, ToggleOpen, totalPanels }) => {
  const { id, title, img, description } = cardData;
  const angle = (360 / totalPanels) * cardData.id - 360 / (totalPanels * 2);
  const xMove = angle > 180 ? 300 : 0;
  const posX = Math.sin(angle * (Math.PI / 180)) * 266 + 350 - xMove;
  const posY = Math.cos(angle * (Math.PI / 180)) * -266 + 350;
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg px-3 pt-4 border-[0.5px] border=[rgba(233,233,233,1)] shadow-accordionShadow xl:absolute lg:w-[300px] special">
      <style jsx>{`
        @media (min-width: 1280px) {
          .special {
            transform: translate(${posX}px, ${posY}px);
          }
        }
      `}</style>
      <div className="w-full flex items-start justify-between">
        <div>{img}</div>
        <p className="hidden xl:block ml-5 text-left text-sm leading-[18.2px] font-medium">
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
      <p className="xl:hidden text-left text-sm leading-[18.2px] font-medium">
        {title}
      </p>
      <p
        className={`transition-all duration-500 ${
          openPanel === id ? 'max-h-auto' : 'max-h-0'
        } overflow-hidden text-left text-xs text-[rgba(65,77,96,1)] flex flex-col items-start`}
      >
        {description}
        <a
          href="/skills"
          className="block my-4 px-4 py-2 rounded-full w-auto button-bg text-white text-xs xl:text-sm font-medium"
        >
          View In Detail
        </a>
      </p>
    </div>
  );
};

export default AccordionCard;
