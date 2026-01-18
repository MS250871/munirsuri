import ExperienceDetail from '@/components/ExperienceDetail';
import PageHeader from '@/components/PageHeader';
const Experience = () => {
  return (
    <div className="">
      <PageHeader
        href="/experience"
        buttonTitle="Professional Experience"
        mainTitle="Journey of continuous learning"
      />
      <div>
        <ExperienceDetail />
      </div>
    </div>
  );
};

export default Experience;
