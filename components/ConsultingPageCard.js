'use client';
import Image from 'next/image';

const ConsultingPageCard = ({ data }) => {
  const {
    id,
    img,
    projectName,
    longName,
    smallDescription,
    mediumDescription,
    fullDescription,
    company,
    role,
    approach,
  } = data;

  const timeToRead = (text) => {
    const words = text.split(' ').length;

    const time = Math.ceil(words / 200);
    return time;
  };

  const totalWords = (
    projectName,
    longName,
    smallDescription,
    mediumDescription,
    fullDescription,
    approach
  ) => {
    let totalWords = '';
    totalWords =
      projectName +
      longName +
      smallDescription +
      mediumDescription +
      fullDescription;
    for (let index = 0; index < approach.length; index++) {
      totalWords += ' ' + approach[index].approachDescription;
    }

    return totalWords;
  };

  return (
    <div className="bg-white xl:bg-[rgba(245,245,245,1)] border border-[rgba(233,233,233,1)] w-full rounded-[20px] shadow-customLight overflow-hidden p-2.5 md:w-[48%] md:h-[480px] xl:h-[296px]">
      <div className=" w-full xl:flex xl:items-start xl:justify-center xl:gap-4">
        <div className="w-full aspect-[2/1] rounded-[16px] overflow-hidden xl:w-2/5 ">
          <Image
            src={img}
            width={150}
            height={75}
            alt="project pic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2.5 xl:mt-0 flex flex-col items-start xl:w-3/5">
          <div className="w-full flex items-center justify-between text-[rgba(0,31,31,0.7)]">
            <p className="text-xs uppercase  tracking-wide">{company}</p>
            <p className="text-xs mr-2.5">
              Dive In:{' '}
              <span>
                {timeToRead(
                  totalWords(
                    projectName,
                    longName,
                    smallDescription,
                    mediumDescription,
                    fullDescription,
                    approach
                  )
                )}
              </span>{' '}
              mins
            </p>
          </div>
          <p className="mt-1.5 text-[18px] leading-[23.4px] font-bold text-[rgba(0,31,31,1)]">
            {projectName}
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide">{longName}</p>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <p className="mt-4 text-sm text-[rgba(0,31,31,0.7)]">
          {smallDescription}
        </p>
        <a
          href={`/consulting/${id}`}
          className="block my-4 px-4 py-2 xl:mb-0 rounded-full w-auto button-bg text-white text-xs xl:text-sm font-medium"
        >
          View In Detail
        </a>
      </div>
    </div>
  );
};

export default ConsultingPageCard;
