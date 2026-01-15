'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import ContactInfo from './ContactInfo';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
    toast.success('Message sent successfully', { duration: 3000 });
  };

  return (
    <div className="p-2.5 base-bg mx-4 mt-20 xl:mt-40 mb-[362px] md:mb-52 lg:m-14 lg:mb-52 rounded-[26px] shadow-custom">
      <div className="p-2.5 lg:p-8 bg-[#f4f0eb99] border border-[rgba(0,61,61,0.0392)] rounded-[20px] 2xl:flex 2xl:flex-row-reverse 2xl:gap-6">
        <Toaster />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2.5 p-[14px] rounded-[14px] mb-5 bg-white border border-[#e9e9e9] shadow-customLight 2xl:w-2/5"
        >
          <div className="mb-[14px]">
            <p className="text-xl leading-8 text-[#262626] font-medium xl:text-2xl">
              Contact Form
            </p>
            <p className="text-sm leading-5 text-[#3e3e3e] font-normal xl:text-base">
              Please feel free to contact me. I will reply within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 md:flex-row">
            <div className="md:w-1/2">
              <input
                type="text"
                {...register('name')}
                placeholder="Your name"
                className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                {...register('email')}
                placeholder="Your Email Id"
                className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              type="text"
              {...register('subject')}
              placeholder="Subject of your message"
              className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <textarea
              rows="6"
              {...register('message')}
              placeholder="Your message"
              className="w-full px-4 py-2.5 border border-green-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-5 py-4 rounded-full button-bg text-white w-48"
          >
            Send Message
          </button>
        </form>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactForm;
