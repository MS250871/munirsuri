import ExperienceCard from './ExperienceCard';
import ExperienceSlider from './ExperienceSlider';
import QuickCallButton from './QuickCallButton';

const ExperienceSection = () => {
  return (
    <div className="mt-20 lg:m-[60px] xl:mt-[110px] mx-4 xl:m-[100px]  flex flex-col items-center justify-center bg-white rounded-[36px] xl:rounded-[66px] px-4 py-[34px] shadow-customLight border border-[rgba(233,233,233,1)]">
      <QuickCallButton href="/experience" title="Professional Experience" />
      <p className="mt-4 text-3xl font-medium text-center xl:text-[56px] xl:leading-[67.2px] xl:max-w-[696px] text-[rgba(0,31,31,1)]">
        Professional Experience – A Legacy in the Making
      </p>
      <div className="w-full mt-[38px]">
        <ExperienceSlider />
      </div>
    </div>
  );
};

export default ExperienceSection;
