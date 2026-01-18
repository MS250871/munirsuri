import QuickCallButton from './QuickCallButton';
import { experienceData } from '@/lib/experienceData';
import Image from 'next/image';

const PageHeader = ({
  href,
  buttonTitle,
  mainTitle,
  highlightedText = '',
  restOfTheText = '',
}) => {
  return (
    <div className="mx-4 mt-[65px] flex flex-col items-center ">
      <QuickCallButton href={href} title={buttonTitle} />
      <div>
        <p className="text-[44px] leading-[52.8px] md:max-w-[800px] xl:text-[100px] xl:leading-[120px]  font-medium text-center capitalize mt-4 text-[rgba(0,31,31,1)]">
          {mainTitle}{' '}
          <span className="font-covered text-green-500">{highlightedText}</span>{' '}
          {restOfTheText}
        </p>
      </div>
      <div>
        <p className="mt-10 text-center uppercase text-[rgba(49,74,74,0.38)] font-medium xl:mt-[290px]">
          Worked with world&apos;s best companies
        </p>
      </div>
      <div className="mt-8 flex items-center justify-start gap-5 overflow-x-auto no-scrollbar scroll-snap-x opacity-50">
        {experienceData.map((company) => (
          <Image
            key={company.id}
            src={company.img}
            width={company.imgWidth}
            height={38}
            alt={company.title}
            className="grayscale"
          />
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
