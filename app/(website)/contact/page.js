import PageHeader from '@/components/PageHeader';
import SocialButtons from '@/components/SocialButtons';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <PageHeader
        href="/contact"
        buttonTitle="Contact Me"
        mainTitle="Let us"
        highlightedText="build"
        restOfTheText="together"
      />

      <div className="p-2.5 base-bg mx-4 mt-20 mb-[362px] md:mb-52 lg:m-14 lg:mb-52 rounded-[26px] shadow-custom xl:flex xl:flex-row-reverse items-center justify-center">
        {/* LEFT SIDE – FORM */}
        <div className="xl:w-1/2">
          <ContactForm showInfo={false} />
        </div>

        {/* RIGHT SIDE – CONTACT INFO */}
        <div className="xl:w-1/2">
          {/* EMAIL */}
          <a
            href="mailto:me@munirsuri.com"
            className="mx-4 p-5 bg-gradient-to-l from-[rgba(167,215,249,1)] to-[rgba(224,240,251,1)] border border-[rgba(233,233,233,1)] shadow-customLight rounded-2xl flex items-center justify-start"
          >
            <div className="w-[60px] h-[60px] relative">
              <Image
                src="/images/mailIcon.png"
                alt="email pic"
                fill
                className="object-cover"
              />
            </div>

            <div className="ml-4">
              <p className="uppercase text-sm">chat with me</p>
              <p className="text-[18px] leading-[32px]">munir.suri@yahoo.com</p>
            </div>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919818478573"
            className="mx-4 mt-4 p-5 bg-gradient-to-l from-[rgba(243,208,146,1)] to-[rgba(251,237,214,1)] border border-[rgba(233,233,233,1)] shadow-customLight rounded-2xl flex items-center justify-start"
          >
            <div className="w-[60px] h-[60px] relative">
              <Image
                src="/images/phoneIcon.png"
                alt="phone pic"
                fill
                className="object-cover"
              />
            </div>

            <div className="ml-4">
              <p className="uppercase text-sm">call me</p>
              <p className="text-[18px] leading-[32px]">+91 9818478573</p>
            </div>
          </a>

          {/* SOCIAL */}
          <div className="mx-4 mt-4 p-8 bg-gradient-to-l from-[rgba(190,255,179,1)] to-[rgba(234,255,232,1)] border border-[rgba(233,233,233,1)] shadow-customLight rounded-2xl flex items-center justify-start">
            <SocialButtons size={42} />
          </div>
        </div>
      </div>
    </div>
  );
}
