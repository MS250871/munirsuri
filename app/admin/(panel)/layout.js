export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 flex justify-between">
        <h1 className="font-bold">Admin Panel</h1>
        <a href="/" className="text-sm underline">
          Back to site
        </a>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white min-h-screen p-4 border-r">
          <nav className="flex flex-col gap-3">
            <a href="/admin" className="hover:underline">
              Dashboard
            </a>
            <a href="/admin/contacts" className="hover:underline">
              Contacts
            </a>
            <a href="/admin/subscribers" className="hover:underline">
              Subscribers
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
