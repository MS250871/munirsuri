export const dynamic = 'force-dynamic';

import {
  getAllSubscribers,
  subscribeEmail,
  unsubscribeEmail,
} from '@/actions/subscription.actions';
import { MdUnsubscribe } from 'react-icons/md';
import { RiMailAddFill } from 'react-icons/ri';

export default async function SubscribersPage() {
  const subs = await getAllSubscribers();

  return (
    <div className="max-w-3xl">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Subscribers</h2>
      </div>

      {/* ADD SUBSCRIBER */}
      <form
        action={async (formData) => {
          'use server';
          const email = formData.get('email');
          await subscribeEmail(email);
        }}
        className="bg-white p-4 rounded shadow mb-6 flex flex-col lg:flex-row gap-3"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter email to subscribe"
          className="flex-1 border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="button-bg text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      </form>

      {/* LIST */}
      {!subs.length && (
        <p className="text-center mt-10 text-gray-500">No active subscribers</p>
      )}

      {subs.map((s, i) => (
        <div
          key={i}
          className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center"
        >
          <span className="text-sm">{s.email}</span>

          {s.is_active === true ? (
            <form
              action={async () => {
                'use server';
                await unsubscribeEmail(s.email);
              }}
            >
              <button
                type="submit"
                className="text-gray-500 w-8 h-8 flex justify-center items-center rounded-full hover:text-red-500"
              >
                <MdUnsubscribe className="inline mb-1 mr-1 w-full h-full" />
              </button>
            </form>
          ) : (
            <form
              action={async () => {
                'use server';
                await subscribeEmail(s.email);
              }}
            >
              <button
                type="submit"
                className="text-gray-500 w-8 h-8 flex justify-center items-center rounded-full hover:text-green-500"
              >
                <RiMailAddFill className="inline mb-1 mr-1 w-full h-full" />
              </button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
}
