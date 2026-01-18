import AboutMeContent from '@/components/AboutMeContent';
import AboutMeText from '@/components/AboutMeText';
import PageHeader from '@/components/PageHeader';

const About = async () => {
  return (
    <div className="">
      <PageHeader
        href="/about"
        buttonTitle="About Me"
        mainTitle="Let’s Make Work Meaningful"
      />
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMeContent />
      </div>
    </div>
  );
};

export default About;
