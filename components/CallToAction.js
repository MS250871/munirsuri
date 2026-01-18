'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { subscribeEmail } from '@/actions/subscription.actions';

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function CallToAction({
  title = 'Stay Updated',
  text,
  buttonText = 'Subscribe',
}) {
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
      const res = await subscribeEmail(data.email);
      if (!res?.success) throw new Error();

      toast.success('Subscribed successfully!');
      reset();
    } catch {
      toast.error('Subscription failed');
    }
  };

  if (!text) return null;

  return (
    <div className="mt-16 p-2.5 bg-white rounded-[26px] text-center shadow-custom">
      <div className="p-2.5 bg-[#f4f0eb99] border border-[rgba(0,61,61,0.0392)] rounded-[20px]">
        <h3 className="text-3xl font-semibold mb-3">{title}</h3>

        <p className="mb-6 md:text-lg xl:text-xl leading-relaxed">{text}</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row
        gap-3 justify-center"
        >
          <div className="w-full sm:w-72">
            <input
              {...register('email')}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg
            text-gray-900 border border-green-300 focus:outline-none
            focus:ring-1 focus:ring-[#003d3d]"
            />

            {errors.email && (
              <p className="text-xs text-red-200 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="button-bg text-white
          px-6 py-3 rounded-lg font-medium transition"
          >
            {isSubmitting ? 'Joining...' : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
