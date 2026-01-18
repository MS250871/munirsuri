'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { insertBlog, updateBlog } from '@/actions/blog.actions';
import { useRouter } from 'next/navigation';

const schema = Yup.object({
  json: Yup.string()
    .required()
    .test('json', 'Invalid JSON', (v) => {
      try {
        JSON.parse(v);
        return true;
      } catch {
        return false;
      }
    }),
});

export default function BlogForm({ mode = 'create', initialData }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      json: initialData ? JSON.stringify(initialData, null, 2) : '',
    },
  });
  const router = useRouter();

  const onSubmit = async ({ json }) => {
    const blog = JSON.parse(json);

    if (mode === 'create') {
      const result = await insertBlog(blog);
      if (result.success) {
        toast.success('Blog created');
        router.push('/admin/blogs');
      } else {
        toast.error('Error creating blog');
      }
    } else {
      const result = await updateBlog(blog.id, blog);
      if (result.success) {
        toast.success('Blog updated');
        router.push('/admin/blogs');
      } else {
        toast.error('Error updating blog');
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <Toaster />
      <h2 className="font-bold mb-4">
        {mode === 'create' ? 'Add Blog' : 'Edit Blog'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <textarea
          rows={25}
          {...register('json')}
          className="w-full border p-3 font-mono text-sm"
        />

        {errors.json && (
          <p className="text-red-500 text-sm">{errors.json.message}</p>
        )}

        <button
          disabled={isSubmitting}
          className="button-bg text-white px-5 py-2 rounded"
        >
          {isSubmitting ? 'Saving...' : mode === 'create' ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  );
}
