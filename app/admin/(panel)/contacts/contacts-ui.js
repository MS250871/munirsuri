'use client';

import { useState, useEffect } from 'react';
import { addFollowup, getFollowups } from '@/actions/admin.actions';

export default function ContactsUI({ contacts }) {
  const [list, setList] = useState(contacts);
  const [notes, setNotes] = useState({});
  const [newNote, setNewNote] = useState({});

  useEffect(() => {
    contacts.forEach(async (c) => {
      const res = await getFollowups(c.id);
      setNotes((p) => ({ ...p, [c.id]: res }));
    });
  }, [contacts]);

  const saveNote = async (id) => {
    if (!newNote[id]) return;

    await addFollowup(id, newNote[id]);

    const res = await getFollowups(id);
    setNotes((p) => ({ ...p, [id]: res }));
    setNewNote((p) => ({ ...p, [id]: '' }));
  };

  return (
    <>
      {list.map((c) => (
        <div key={c.id} className="bg-white p-5 mb-5 rounded shadow">
          <p>
            <b>Name:</b> {c.name}
          </p>
          <p>
            <b>Mobile:</b> {c.mobile}
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

          {/* HISTORY */}
          <div className="mt-4 bg-gray-50 p-3 rounded">
            <b>Follow-up History</b>

            {notes[c.id]?.length ? (
              notes[c.id].map((n) => (
                <div key={n.id} className="border-b py-2 text-sm">
                  <p>{n.note}</p>
                  <span className="text-xs text-gray-500">
                    {new Date(n.created_at).toLocaleString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-400">No follow-ups yet</p>
            )}
          </div>

          {/* NEW NOTE */}
          <textarea
            className="w-full border p-2 mt-3"
            placeholder="Add new follow-up note"
            value={newNote[c.id] || ''}
            onChange={(e) =>
              setNewNote((p) => ({
                ...p,
                [c.id]: e.target.value,
              }))
            }
          />

          <button
            onClick={() => saveNote(c.id)}
            className="button-bg text-white px-4 py-2 mt-2 rounded"
          >
            Save Note
          </button>
        </div>
      ))}
    </>
  );
}
