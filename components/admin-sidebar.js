'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { adminLogout } from '@/actions/auth.actions';
import { useNavigation } from '@/stores/useNavigation';
import { FaTimes } from 'react-icons/fa';
import LogoutButton from './LogoutBtn';

const menu = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Contacts', href: '/admin/contacts' },
  { name: 'Subscribers', href: '/admin/subscribers' },
  { name: 'Blogs', href: '/admin/blogs' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const start = useNavigation((s) => s.start);

  useEffect(() => {
    const btn = document.getElementById('openSidebar');
    if (btn) btn.onclick = () => setOpen(true);
  }, []);

  const handleNav = (href) => {
    if (pathname === href) return;
    start(href);
    setOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-full lg:w-64
          bg-[#ccd8d8] border-r
          transform transition-transform
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          flex flex-col justify-between
        `}
      >
        {/* TOP */}
        <div>
          {/* BRAND */}
          <div className="p-4 border-b bg-[#1a5050] text-white">
            <p className="font-semibold tracking-wide">munirsuri.com</p>
          </div>

          {/* Mobile close */}
          <div className="lg:hidden flex justify-between p-4 border-b">
            <b>Menu</b>
            <button onClick={() => setOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          {/* MENU */}
          <nav className="p-4 flex flex-col gap-2">
            {menu.map((item) => {
              const isParentActive =
                pathname === item.href ||
                item.children?.some((c) => pathname === c.href);

              return (
                <div key={item.href}>
                  {/* Parent */}
                  <Link
                    href={item.href}
                    onClick={() => handleNav(item.href)}
                    className={`px-3 py-2 rounded-md transition block
                      ${
                        isParentActive
                          ? 'bg-[#99b1b1] text-[#003d3d] font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                  >
                    {item.name}
                  </Link>

                  {/* Children */}
                  {item.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => handleNav(child.href)}
                            className={`px-3 py-1.5 rounded text-sm transition
                              ${
                                isChildActive
                                  ? 'bg-[#003d3d] text-white'
                                  : 'hover:bg-gray-100'
                              }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t">
          <form action={adminLogout}>
            <LogoutButton />
          </form>
        </div>
      </aside>
    </>
  );
}
