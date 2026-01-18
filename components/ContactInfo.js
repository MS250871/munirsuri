import QuickCallButton from './QuickCallButton';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { FaSquareWhatsapp, FaLinkedin } from 'react-icons/fa6';

const ContactInfo = () => {
  const phoneNumber = '+919818478573';
  const message = encodeURIComponent(
    'Hello! I would like to speak to you about an opporunity.'
  );
  return (
    <div className="2xl:w-3/5">
      <QuickCallButton title="Available for quick call" />

      <div className="mt-5">
        <p className="text-3xl font-light leading-8 xl:text-[40px] xl:leading-[48px]">
          Contact Me
        </p>
        <p className="text-[31px] font-semibold leading-[34px] xl:text-[50px] xl:leading-[60px]">
          Let&apos;s Build Something Together
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-4 xl:gap-4">
        <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
          <div className="p-[14px] flex items-center gap-4 bg-white border border-[#e9e9e9] rounded-[14px] shadow-customLight md:w-1/2 xl:w-7/12">
            <HiOutlineEnvelope className="w-6 h-6 xl:w-10 xl:h-10" />
            <div>
              <p className="uppercase text-xs xl:text-sm xl:leading-[14px]">
                Chat with me
              </p>
              <p className="text-xs font-medium xl:text-[18px] xl:leading-[32px]">
                me@munirsuri.com
              </p>
            </div>
          </div>
          <div className="p-[14px] flex items-center gap-4 bg-white border border-[#e9e9e9] rounded-[14px] shadow-customLight md:w-1/2 xl:w-5/12">
            <FiPhone className="w-6 h-6 xl:w-10 xl:h-10" />
            <div>
              <p className="uppercase text-xs xl:text-sm xl:leading-[14px]">
                call me
              </p>
              <p className="text-xs font-medium xl:text-[18px] xl:leading-[32px]">
                +91 9818478573
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
          <div className="p-[14px] flex items-center gap-4 bg-white border border-[#e9e9e9] rounded-[14px] shadow-customLight md:w-1/2 xl:w-7/12">
            <HiOutlineLocationMarker className="w-6 h-6 xl:w-10 xl:h-10" />
            <div>
              <p className="uppercase text-xs xl:text-sm xl:leading-[14px]">
                Address
              </p>
              <p className="text-xs font-medium xl:text-[18px] xl:leading-[32px]">
                E-2079 Palam Vihar Gurgaon India 122017
              </p>
            </div>
          </div>
          <div className="p-[14px] flex items-center justify-start xl:justify-start gap-6 bg-white border border-[#e9e9e9] rounded-[14px] shadow-customLight md:w-1/2 xl:w-5/12">
            <a
              href="https://www.linkedin.com/in/munir-suri-29b13661/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 xl:w-14 xl:h-14 text-[#286782]" />
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp className="w-6 h-6 xl:w-14 xl:h-14 text-[#25d366]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
