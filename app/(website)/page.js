import BlogSection from '@/components/BlogSection';
import ConsultingSection from '@/components/ConsultingSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroImage from '@/components/HeroImage';
import HeroMain from '@/components/HeroMain';
import MainMessage from '@/components/MainMessage';
import SkillsSection from '@/components/SkillsSection';
import TechnicalSkillsSection from '@/components/TechnicalSkillsSection';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col m-4 lg:m-14 xl:flex-row gap-2.5 items-center justify-center">
        <HeroMain />
        <HeroImage />
      </div>
      <div>
        <MainMessage />
      </div>
      <div>
        <ExperienceSection />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div>
        <TechnicalSkillsSection />
      </div>
      <div>
        <ConsultingSection />
      </div>
      <div>
        <BlogSection />
      </div>
    </main>
  );
}
