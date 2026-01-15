import { getContacts } from '@/actions/admin.actions';
import ContactsUI from './contacts-ui';

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>

      <ContactsUI contacts={contacts} />
    </div>
  );
}
