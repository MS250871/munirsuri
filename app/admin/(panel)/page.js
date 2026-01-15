export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <p>Total Contacts</p>
          <b>—</b>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Subscribers</p>
          <b>—</b>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>New Today</p>
          <b>—</b>
        </div>
      </div>
    </div>
  );
}
