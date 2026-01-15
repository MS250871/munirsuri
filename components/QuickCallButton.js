import Image from 'next/image';

const QuickCallButton = ({ href, title }) => {
  return (
    <a
      href={href ? href : 'tel:+919818478573'}
      className="inline-flex gap-2 items-center w-auto justify-center px-[14px] py-2 bg-[rgba(0,31,31,0.1)] border border-[rgba(0,31,31,0.07)] rounded-3xl"
    >
      <Image src="/images/stars.png" width={20} height={20} alt="stars" />
      <p className="text-xs leading-[18px] lg:text-base lg:leading-6">
        {title}
      </p>
    </a>
  );
};

export default QuickCallButton;
