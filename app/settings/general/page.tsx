export default function AdminSettingsGeneral() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0A1B2E]">General Settings</h1>
        <div>
          <button className="px-4 py-2 border border-gray-300 bg-white rounded text-sm">
            Save Changes
          </button>
        </div>
      </div>

      <section className="space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-sm font-semibold mb-4">COMPANY INFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-sm text-gray-600">Platform Name</label>
              <input
                className="w-full border border-gray-200 rounded px-3 py-2"
                defaultValue="ConstructAI Pro"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm text-gray-600">Support Email</label>
              <input
                className="w-full border border-gray-200 rounded px-3 py-2"
                defaultValue="support@sitesupervise.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm text-gray-600">Timezone</label>
              <select className="w-full border border-gray-200 rounded px-3 py-2">
                <option>UTC-05:00 Eastern Time</option>
                <option>UTC+00:00 GMT</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-sm text-gray-600">Date Format</label>
              <input
                className="w-full border border-gray-200 rounded px-3 py-2"
                defaultValue="MM/DD/YYYY"
              />
            </div>
          </div>

          <h3 className="mt-8 text-sm font-semibold mb-3">
            PERFORMANCE SETTING
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                AR processing priority
              </label>
              <select className="w-full border border-gray-200 rounded px-3 py-2">
                <option>Balanced</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">AI model refresh</label>
              <select className="w-full border border-gray-200 rounded px-3 py-2">
                <option>Daily</option>
              </select>
            </div>
          </div>

          <h3 className="mt-8 text-sm font-semibold mb-3">STORAGE SETTINGS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Max project size</label>
              <input
                className="w-full border border-gray-200 rounded px-3 py-2"
                defaultValue="500GB"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Retention policy</label>
              <input
                className="w-full border border-gray-200 rounded px-3 py-2"
                defaultValue="Active 7 years, archived 3 years"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
