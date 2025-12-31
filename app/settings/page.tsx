import Link from "next/link";

export default function AdminSettingsIndex() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0A1B2E]">
          Platform Configuration
        </h1>
        <div>
          <button className="px-4 py-2 border border-gray-300 bg-white rounded text-sm">
            Save Changes
          </button>
        </div>
      </div>

      <section className="space-y-8">
        <div className="bg-gray-200 rounded p-6">
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/admin/settings/general"
              className="px-4 py-2 bg-slate-900 text-white rounded"
            >
              General
            </Link>
            <Link
              href="/admin/settings/integrations"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Integrations
            </Link>
            <Link
              href="/admin/settings/modules"
              className="px-4 py-2 bg-slate-900 text-white rounded"
            >
              Modules
            </Link>
            <button className="px-4 py-2 bg-slate-900 text-white rounded">
              Security
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Network
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0A1B2E] mb-4">
            General Settings
          </h2>
          <p className="text-sm text-gray-600">
            Select a settings area from the navigation above, or use the links
            to edit General, Integrations, or Module settings.
          </p>
        </div>
      </section>
    </main>
  );
}
