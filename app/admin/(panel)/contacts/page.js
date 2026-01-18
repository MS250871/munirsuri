export const dynamic = 'force-dynamic';

import { getContacts } from '@/actions/admin.actions';
import ContactsUI from './contacts-ui';

export default async function ContactsPage() {
  const contacts = await getContacts();

  if (contacts.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
        <p>No contact messages found.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      <ContactsUI contacts={contacts} />
    </div>
  );
}
