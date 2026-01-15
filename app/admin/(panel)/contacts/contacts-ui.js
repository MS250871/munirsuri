'use client';

import { updateContact } from '@/actions/admin.actions';
import { useState } from 'react';

export default function ContactsUI({ contacts }) {
  const [list, setList] = useState(contacts);

  const save = async (id, status, notes) => {
    await updateContact(id, status, notes);

    setList((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status, followup_notes: notes } : c
      )
    );
  };

  return (
    <>
      {list.map((c) => (
        <div key={c.id} className="bg-white p-4 mb-4 rounded shadow">
          <p>
            <b>Name:</b> {c.name}
          </p>
          <p>
            <b>Email:</b> {c.email}
          </p>
          <p>
            <b>Subject:</b> {c.subject}
          </p>
          <p>
            <b>Message:</b> {c.message}
          </p>

          <select
            value={c.status}
            onChange={(e) => save(c.id, e.target.value, c.followup_notes)}
            className="border p-2 mt-2"
          >
            <option>new</option>
            <option>contacted</option>
            <option>closed</option>
          </select>

          <textarea
            value={c.followup_notes || ''}
            className="w-full border p-2 mt-2"
            placeholder="Follow-up notes"
            onChange={(e) =>
              setList((prev) =>
                prev.map((x) =>
                  x.id === c.id ? { ...x, followup_notes: e.target.value } : x
                )
              )
            }
            onBlur={(e) => save(c.id, c.status, e.target.value)}
          />
        </div>
      ))}
    </>
  );
}
