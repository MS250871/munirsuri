import BlogSection from '@/components/BlogSection';
import ConsultingSection from '@/components/ConsultingSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroImage from '@/components/HeroImage';
import HeroMain from '@/components/HeroMain';
import MainMessage from '@/components/MainMessage';
import SkillsSection from '@/components/SkillsSection';
import TechnicalSkillsSection from '@/components/TechnicalSkillsSection';

export const metadata = {
  title: 'Munir Suri | Business Strategy, Retail & Consulting Leader',
  description:
    'Munir Suri is a business strategist and retail transformation leader with experience at Walmart, Hippo Stores, AT Kearney and Woodkraft. Expertise in growth strategy, consulting and digital transformation.',

  keywords: [
    'Munir Suri',
    'Business Consultant',
    'Retail Strategy Expert',
    'Growth Strategy',
    'Digital Transformation',
    'Walmart Leadership',
    'Hippo Stores',
    'Strategy Consultant India',
  ],

  openGraph: {
    title: 'Munir Suri | Strategy, Consulting & Leadership',
    description:
      'Explore Munir Suri’s leadership journey across retail, consulting and entrepreneurship. Proven growth strategies and transformation programs.',
    url: 'https://munirsuri.com',
    siteName: 'Munir Suri',
    images: [
      {
        url: 'https://munirsuri.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Munir Suri – Business Strategy Leader',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Munir Suri | Business Strategy Leader',
    description:
      'Retail, consulting & growth strategy leader with experience at Walmart, AT Kearney & Hippo Stores.',
    images: ['https://munirsuri.com/og-home.jpg'],
  },

  alternates: {
    canonical: 'https://munirsuri.com',
  },
};

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
