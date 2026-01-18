'use client';

import { useFormStatus } from 'react-dom';

function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-center text-white
      button-bg font-medium px-3 py-2 rounded-md"
    >
      {pending ? 'Logging out...' : 'Logout'}
    </button>
  );
}

export default LogoutButton;
