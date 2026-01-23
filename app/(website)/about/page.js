import AboutMeContent from '@/components/AboutMeContent';
import AboutMeText from '@/components/AboutMeText';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'About Munir Suri | Strategy Leader & Business Builder',
  description:
    'Learn about Munir Suri’s 30+ year leadership journey across Walmart, AT Kearney, Hippo Stores and Woodkraft. IIM Kozhikode alumnus specializing in strategy, retail and entrepreneurship.',

  keywords: [
    'Munir Suri',
    'About Munir Suri',
    'Business Leader',
    'Retail Strategy Expert',
    'IIM Kozhikode Alumni',
    'Management Consultant',
    'Entrepreneur India',
    'Turnkey Project Expert',
    'Digital Transformation Leader',
  ],

  openGraph: {
    title: 'About Munir Suri | Business Strategy & Leadership',
    description:
      '30+ years of leadership across consulting, retail and entrepreneurship. IIM Kozhikode alumnus with experience at Walmart and AT Kearney.',
    url: 'https://munirsuri.com/about',
    siteName: 'Munir Suri',
    images: [
      {
        url: 'https://munirsuri.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Munir Suri – Business Leader',
      },
    ],
    type: 'profile',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Munir Suri',
    description:
      'Leadership journey across Walmart, consulting and entrepreneurship.',
    images: ['https://munirsuri.com/og-about.jpg'],
  },

  alternates: {
    canonical: 'https://munirsuri.com/about',
  },
};

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
