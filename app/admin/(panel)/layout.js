import AdminSidebar from '@/components/admin-sidebar';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Right side */}
      <div className="lg:ml-64">
        {/* Fixed Header */}
        <header
          className="
            fixed top-0 right-0 left-0 lg:left-64
            bg-[#1a5050] text-white p-4
            flex items-center gap-4
            z-30
          "
        >
          {/* Hamburger */}
          <button className="lg:hidden" id="openSidebar">
            <FaBarsStaggered size={24} />
          </button>

          <h1 className="font-bold">Admin Panel</h1>
        </header>

        {/* CONTENT */}
        <main className="pt-16 p-6">{children}</main>
      </div>
    </div>
  );
}
