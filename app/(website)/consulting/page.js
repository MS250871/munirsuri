import ConsultingPageCard from '@/components/ConsultingPageCard';
import { consultingData } from '@/lib/consultingData';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Management Consulting Case Studies | Munir Suri',
  description:
    'Consulting projects by Munir Suri across retail, supply chain, digital transformation and market entry for brands like Walmart, Reliance, Apollo Pharmacy and Sainsbury.',

  keywords: [
    'Management Consulting',
    'Retail Consulting',
    'Market Entry Strategy',
    'Supply Chain Optimization',
    'Business Expansion',
    'Strategy Consultant',
  ],

  openGraph: {
    title: 'Consulting Case Studies | Munir Suri',
    description:
      'Real-world consulting projects across retail expansion, market entry and digital transformation.',
    url: 'https://munirsuri.com/consulting',
    siteName: 'Munir Suri',
    images: [
      {
        url: 'https://munirsuri.com/og-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'Consulting Case Studies',
      },
    ],
    type: 'website',
  },

  alternates: {
    canonical: 'https://munirsuri.com/consulting',
  },
};

const Consulting = () => {
  return (
    <div className=" ">
      <PageHeader
        href="/consulting"
        buttonTitle="Consulting Experience"
        mainTitle="Simplify for tangible results"
      />
      <div className="mx-4 xl:mx-[100px] mt-[150px] flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap xl:bg-white xl:border xl:border-[rgba(233,233,233,1)] xl:shadow-custom rounded-[36px] xl:py-5">
        {consultingData.map((data) => (
          <ConsultingPageCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Consulting;
