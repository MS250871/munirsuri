import ExperienceDetail from '@/components/ExperienceDetail';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Professional Experience | Munir Suri',
  description:
    'Career journey of Munir Suri across Walmart, Hippo Stores, AT Kearney, Fitart and Woodkraft. Led retail expansion, consulting and business transformation.',

  keywords: [
    'Munir Suri Experience',
    'Walmart India',
    'Hippo Stores',
    'AT Kearney',
    'Retail Leadership',
    'Consulting Experience',
    'Business Transformation',
  ],

  openGraph: {
    title: 'Professional Experience | Munir Suri',
    description:
      'Explore Munir Suri’s leadership roles across consulting, retail and entrepreneurship.',
    url: 'https://munirsuri.com/experience',
    siteName: 'Munir Suri',
    images: [
      {
        url: 'https://munirsuri.com/og-experiences.jpg',
        width: 1200,
        height: 630,
        alt: 'Munir Suri Career Journey',
      },
    ],
    type: 'website',
  },

  alternates: {
    canonical: 'https://munirsuri.com/experience',
  },
};

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
