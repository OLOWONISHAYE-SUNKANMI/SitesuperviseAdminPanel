export default function AdminSettingsModules() {
  const modules = [
    { name: 'Task Management', status: 'Enabled', version: 'v2.4.1', usage: 'High (98%)' },
    { name: 'AR Tools', status: 'Enabled', version: 'v3.1.2', usage: 'Medium (65%)' },
    { name: 'AI Engine', status: 'Enabled', version: 'v4.0.1', usage: 'High (92%)' },
    { name: 'Client Portal', status: 'Limited', version: 'v1.8.3', usage: 'Low (42%)' },
    { name: 'Financial Module', status: 'Disabled', version: '--', usage: '--' }
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0A1B2E]">Module Configuration</h1>
        <div>
          <button className="px-4 py-2 border border-gray-300 bg-white rounded text-sm">Save Changes</button>
        </div>
      </div>

      <section className="space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-semibold mb-4">ENABLED MODULES</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-fixed">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="py-3">MODULE</th>
                  <th className="py-3">STATUS</th>
                  <th className="py-3">VERSION</th>
                  <th className="py-3">USAGE</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {modules.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100">
                    <td className="py-4">{m.name}</td>
                    <td className="py-4">{m.status}</td>
                    <td className="py-4">{m.version}</td>
                    <td className="py-4">{m.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">MODULE SETTINGS</h3>
            <div className="text-sm text-gray-600">
              <div>• AR: Max scans/day: 1,000</div>
              <div>• AI: Max predictions/hour: 10,000</div>
              <div>• Task: Max concurrent: 500</div>
              <div>• Storage: Max per project: 500GB</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-slate-900 text-white rounded">Reset to Defaults</button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded">Save Changes</button>
          <button className="px-6 py-3 bg-white border border-gray-200 rounded">Export Configuration</button>
        </div>
      </section>
    </main>
  );
}
