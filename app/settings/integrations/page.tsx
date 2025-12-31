export default function AdminSettingsIntegrations() {
  const integrations = [
    {
      id: "weather",
      name: "Weather API (Openweather)",
      status: "Connected",
      usage: "1245 calls/day",
    },
    {
      id: "bim",
      name: "BIM Software (Autodesk BIM 360)",
      status: "Connected",
      usage: "Last sync: 10:15AM",
    },
    {
      id: "acct",
      name: "Accounting Software (QuickBooks)",
      status: "Connected",
      usage: "Sync: Bi-directional",
    },
    {
      id: "erp",
      name: "ERP System (SAP)",
      status: "Not configured",
      usage: "",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0A1B2E]">
          Integration Settings
        </h1>
        <div>
          <button className="px-4 py-2 border border-gray-300 bg-white rounded text-sm">
            Save Changes
          </button>
        </div>
      </div>

      <section className="space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-semibold mb-4">ACTIVE INTEGRATION</h2>
          <div className="space-y-4">
            {integrations.map((it) => (
              <div key={it.id} className="flex items-start gap-4">
                <input type="checkbox" className="mt-2" />
                <div>
                  <div className="font-medium text-sm text-[#0A1B2E]">
                    {it.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    Status: {it.status} {it.usage && `| ${it.usage}`}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">ADD NEW INTEGRATION</h3>
            <div className="flex gap-3 items-center">
              <select className="border border-gray-200 rounded px-3 py-2">
                <option>Select: Weather</option>
              </select>
              <select className="border border-gray-200 rounded px-3 py-2">
                <option>BIM</option>
              </select>
              <select className="border border-gray-200 rounded px-3 py-2">
                <option>Accounting</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
