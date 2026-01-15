import Image from 'next/image';
import Link from 'next/link';

const ExperienceCard = ({ company }) => {
  const { id, time, img, imgWidth, bg, borderColor, title, description } =
    company;
  return (
    <Link
      href="/experience"
      className={` md:min-h-[554px] w-full ${
        id % 2 !== 0
          ? 'md:flex md:flex-col md:justify-end'
          : 'md:flex md:flex-col md:justify-start'
      }`}
    >
      <div className={` relative  md:w-[300px] md:pb-4 flex md:flex-col gap-4`}>
        <div>
          <div
            className={`absolute ${
              id % 2 === 0 ? 'md:bottom-0 md:left-0' : 'top-0 left-0'
            }  z-10 bg-white w-[26px] h-[26px] rounded-[50%] flex items-center justify-center shadow-selectShadow`}
          >
            <div className="bg-black h-2 w-2 rounded-[50%]"></div>
          </div>
          <div
            className={`absolute w-2 -top-4 left-[9px] -bottom-4 md:w-auto md:h-2 md:-left-4 md:-right-4 ${
              id % 2 === 0 ? 'md:top-[273px]' : 'md:top-[9px]'
            } bg-gray-100 rounded-full`}
          ></div>
        </div>

        <div
          className={`ml-6 md:ml-0 flex flex-col w-full ${
            id % 2 === 0 ? 'md:flex-col-reverse md:mb-6' : 'md:flex-col md:mt-6'
          } gap-4 `}
        >
          <p className="text-sm md:text-lg text-[rgba(62,62,62,1)] leading-[16.94px]">
            {time}
          </p>
          <div
            className={`${bg} w-full min-h-[160px] md:min-h-[190px] p-[14px] flex flex-col rounded-2xl border ${borderColor} `}
          >
            <div className="">
              <Image
                src={img}
                width={imgWidth}
                height={38}
                alt={`${title} logo`}
              />
            </div>
            <p className="mt-[14px] text-base leading-4 text-[rgba(0,31,31,0.7)]">
              {title}
            </p>
            <p className="mt-2 text-lg text-[rgba(0,31,31,1)] leading-[21.78px] font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
