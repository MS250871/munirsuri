import ConsultingPageCard from '@/components/ConsultingPageCard';
import { consultingData } from '@/lib/consultingData';
import PageHeader from '@/components/PageHeader';
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
