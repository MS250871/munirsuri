'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { adminLogin } from '@/actions/auth.actions';

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email required'),

  password: Yup.string()
    .min(6, 'Min 6 characters')
    .required('Password required'),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await adminLogin(data.email, data.password);

    if (res.success) {
      window.location.href = '/admin';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow w-80">
      <h2 className="font-bold mb-4">Admin Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            {...register('email')}
            className="border p-2 w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register('password')}
            className="border p-2 w-full"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white w-full p-2 rounded"
        >
          {isSubmitting ? 'Checking...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
