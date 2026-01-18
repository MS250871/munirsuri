'use client';

import { useState } from 'react';
import { unsubscribeEmail } from '@/actions/subscription.actions';

export default function UnsubscribePage() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUnsubscribe = async () => {
    setLoading(true);
    await unsubscribeEmail();
    setDone(true);
  };

  if (done) {
    return (
      <div className="bg-white/20 backdrop-blur-lg border border-white/30  p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-2 text-[#003d3d]">
          You’re unsubscribed
        </h2>
        <p className="text-gray-600">
          You will no longer receive emails from me.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/30  p-8 rounded-xl shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-3 text-[#003d3d]">Unsubscribe?</h1>

      <p className="text-gray-600 mb-4">
        I send occasional insights on consulting, retail strategy and business
        growth. You might miss:
      </p>

      <ul className="text-sm text-gray-600 mb-6 list-disc ml-5">
        <li>Exclusive business frameworks</li>
        <li>Real-world case studies</li>
        <li>Early access to new content</li>
      </ul>

      <p className="text-gray-600 mb-6">
        Are you sure you want to unsubscribe?
      </p>

      <button
        onClick={handleUnsubscribe}
        disabled={loading}
        className="w-full button-bg text-white py-3 rounded-full"
      >
        {loading ? 'Processing...' : 'Yes, unsubscribe me'}
      </button>
    </div>
  );
}
