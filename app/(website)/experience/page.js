import ExperienceDetail from '@/components/ExperienceDetail';
import PageHeader from '@/components/PageHeader';
const Experience = () => {
  return (
    <div className="">
      <PageHeader
        href="/experience"
        buttonTitle="Professional Experience"
        mainTitle="A Legacy in the making"
      />
      <div>
        <ExperienceDetail />
      </div>
    </div>
  );
};

export default Experience;
