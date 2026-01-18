'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { createContactMessage } from '@/actions/contact.actions';
import ContactInfo from './ContactInfo';

const schema = Yup.object({
  name: Yup.string().required('Name is required'),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Enter valid 10 digit mobile number')
    .required('Mobile number is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

export default function ContactForm({ showInfo = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await createContactMessage(data);
      if (!res?.success) throw new Error();
      reset();
      toast.success('Message sent successfully');
    } catch {
      toast.error('Failed to send message');
    }
  };

  return (
    <div
      className={`p-2.5 mx-4  ${
        showInfo
          ? 'mt-20 xl:mt-40 mb-[362px] md:mb-52 lg:m-14 lg:mb-52'
          : 'my-4'
      } rounded-[26px] shadow-custom`}
    >
      <div
        className={`p-2.5 ${showInfo ? 'lg:p-8' : ''} bg-[#f4f0eb99]/50
        border border-[rgba(0,61,61,0.0392)]
        rounded-[20px]
        ${showInfo ? 'flex flex-col gap-6 2xl:flex 2xl:flex-row-reverse' : ''}
        `}
      >
        <Toaster />

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-col gap-3 p-[14px] rounded-[14px] 
          bg-white border border-[#e9e9e9] shadow-customLight
          ${showInfo ? '2xl:w-2/5' : 'w-full'}
          `}
        >
          <div className="mb-[14px]">
            <p className="text-xl leading-8 text-[#262626] font-medium xl:text-2xl">
              Contact Form
            </p>
            <p className="text-sm leading-5 text-[#3e3e3e] font-normal xl:text-base">
              Please feel free to contact me. I will reply within 48 hours.
            </p>
          </div>

          {/* NAME - FULL WIDTH */}
          <div>
            <input
              {...register('name')}
              placeholder="Your name"
              className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#003d3d]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* MOBILE + EMAIL */}
          <div className="flex flex-col gap-2.5 md:flex-row">
            <div className="md:w-1/2">
              <input
                {...register('mobile')}
                placeholder="Mobile number"
                className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#003d3d]"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            <div className="md:w-1/2">
              <input
                {...register('email')}
                placeholder="Your Email Id"
                className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#003d3d]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* SUBJECT */}
          <div>
            <input
              {...register('subject')}
              placeholder="Subject"
              className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#003d3d]"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              rows={6}
              {...register('message')}
              placeholder="Your message"
              className="w-full px-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#003d3d]"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-4 rounded-full button-bg text-white w-48"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* INFO PANEL */}
        {showInfo && <ContactInfo />}
      </div>
    </div>
  );
}
