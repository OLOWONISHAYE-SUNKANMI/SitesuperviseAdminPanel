import {
  Pencil,
  Bell,
  ChevronDown,
  User,
  Folder,
  Layers,
  Download,
  ArrowUpRight,
} from "lucide-react";

const statsCards = [
  {
    title: "Active User",
    value: "1,842",
    badge: "Live",
    badgeClass: "bg-green-500",
    cardClass: "bg-gray-900 text-white",
    textClass: "text-white",
    border: "",
    corner: "br", // bottom-right straight
  },
  {
    title: "Live Projects",
    value: "47",
    badge: "Active",
    badgeClass: "bg-red-500",
    cardClass: "bg-white",
    textClass: "text-gray-900",
    border: "border-2 border-gray-200",
    corner: "bl", // bottom-left straight
  },
  {
    title: "System Health",
    value: "98.7%",
    badge: "Optimal",
    badgeClass: "bg-green-500",
    cardClass: "bg-white",
    textClass: "text-gray-900",
    border: "border-2 border-gray-200",
    corner: "tr", // top-right straight
  },
  {
    title: "Revenue Today",
    value: "$12,450",
    badge: "+12%",
    badgeClass: "bg-green-500",
    cardClass: "bg-white",
    textClass: "text-gray-900",
    border: "border-2 border-gray-200",
    corner: "tl", // top-left straight
  },
];

const systemMetrics = [
  {
    label: "API Response Time",
    value: "85ms",
    progress: 85,
    barClass: "bg-green-500",
  },
  {
    label: "Database Performance",
    value: "98%",
    progress: 98,
    barClass: "bg-slate-900",
  },
  {
    label: "File Storage",
    value: "82% used",
    progress: 82,
    barClass: "bg-green-500",
  },
  {
    label: "AR Processing Queue",
    value: "45% load",
    progress: 45,
    barClass: "bg-red-500",
  },
  {
    label: "AI Model Performance",
    value: "99.2%",
    progress: 99.2,
    barClass: "bg-slate-900",
  },
];


export default function AdminDashboardPage() {
  const cornerClassMap: Record<string, string> = {
    br: "rounded-xl rounded-br-none",
    bl: "rounded-xl rounded-bl-none",
    tr: "rounded-xl rounded-tr-none",
    tl: "rounded-xl rounded-tl-none",
  };
  const services = [
    {
      id: "auth",
      name: "Authentication",
      status: "Operational",
      detail: "All Processing: Normal Queue (32 sec avg)",
    },
    { id: "ai", name: "AI Inference", status: "98ms" },
    { id: "db", name: "Database", status: "Replication sync: 7s" },
    { id: "storage", name: "File Storage", status: "82% capacity" },
  ];

  return (
    <div className="min-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 bg-white px-8 py-16 w-full">
        <div>
          <h1 className="text-3xl font-semibold text-gray-600 mb-1">
            Platform Command Center - Super Admin
          </h1>
        </div>
        <div className="text-sm text-gray-600 border p-6">Refresh: 10s</div>
      </div>

      <div className="gap-6 p-6 md:p-10 ">
        <div className="space-y-16">
          {/* KEY PLATFORM METRICS & SYSTEM HEALTH  */}
          <div className="grid md:grid-cols-2 gap-3 mb-28 ">
            {/* Key Platform Metrics */}
            <div className="rounded-lg col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                KEY PLATFORM METRICS
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6 h-full">
                {statsCards.map((card) => (
                  <div
                    key={card.title}
                    className={`
                        ${card.cardClass}
                        ${card.border}
                        ${cornerClassMap[card.corner]}
                        p-6 relative overflow-hidden flex flex-col justify-between
                      `}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`text-sm ${
                          card.cardClass.includes("bg-gray-900")
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {card.title}
                      </span>

                      <button className="text-gray-400 hover:text-gray-600">
                        <ArrowUpRight className="w-8 h-8" />
                      </button>
                    </div>

                    <div
                      className={`text-5xl font-bold mb-2 ${card.textClass}`}
                    >
                      {card.value}
                    </div>

                    <div
                      className={`inline-block ${card.badgeClass} text-white text-xs px-2 py-1 rounded-4xlKEY PLATFORM METRICS mt-4 w-18 text-center`}
                    >
                      {card.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health Dashboard */}
            <div className="rounded-lg col-span-1 h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                REAL-TIME SYSTEM MONITOR
              </h3>
              <div className="bg-white px-6 py-8 rounded-2xl shadow-sm h-full">
                <h4 className="text-lg font-bold text-gray-900 mb-6">
                  SYSTEM HEALTH DASHBOARD
                </h4>
                <div className="space-y-6">
                  {systemMetrics.map((metric) => (
                    <div key={metric.label} className="flex items-center gap-4">
                      <div className="w-44 text-sm text-gray-600">
                        {metric.label}
                      </div>

                      <div className="flex-1">
                        <div className="w-full h-8 md:h-10 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${metric.barClass} rounded-full`}
                            style={{ width: `${metric.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="w-16 text-right text-sm text-gray-900">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Real-time System Monitor */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-6">
              LIVE SERVICE STATUS
            </h3>

            {/* Live Service St              </div>
atus */}
            <div>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.id} className="text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-900 font-medium">
                        {s.name}
                      </span>
                      <span className="text-sm text-gray-600">{s.status}</span>
                    </div>
                    {s.detail && (
                      <div className="text-gray-600 text-xs">{s.detail}</div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-3">
                <button className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  View Logs
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                  Acknowledge Alerts
                </button>
              </div>
            </div>
          </div>

          {/* Platform Activity Feed */}
          <div className="">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              PLATFORM ACTIVITY FEED
            </h2>

            <div className="mb-6 bg-white rounded-tr-2xl rounded-bl-2xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                LIVE PLATFORM ACTIVITY
              </h3>
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-600 border-b border-gray-200">
                      <th className="pb-3 font-semibold">TIME</th>
                      <th className="pb-3 font-semibold">USER</th>
                      <th className="pb-3 font-semibold">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">10:15</td>
                      <td className="py-3 text-gray-900">Mike (ABC Tower)</td>
                      <td className="py-3 text-gray-900">AI Scan Completed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">10:12</td>
                      <td className="py-3 text-gray-900">
                        Sarah (River Bridge)
                      </td>
                      <td className="py-3 text-gray-900">
                        AI prediction generated
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">10:10</td>
                      <td className="py-3 text-gray-900">System</td>
                      <td className="py-3 text-gray-900">Backup completed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">10:08</td>
                      <td className="py-3 text-gray-900">Client Portal</td>
                      <td className="py-3 text-gray-900">Invoice paid</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">10:05</td>
                      <td className="py-3 text-gray-900">Jane (Highway)</td>
                      <td className="py-3 text-gray-900">
                        AI reconfiguration exec
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-900">10:00</td>
                      <td className="py-3 text-gray-900">System</td>
                      <td className="py-3 text-gray-900">
                        Daily report generated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  FILTER ACTIVITY BY:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                      <span>User Type</span>
                    </div>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Project</span>
                    </div>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>Module</span>
                    </div>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Export Logs</span>
                    </div>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Alert & Notification Center */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                ALERT & NOTIFICATION CENTER
              </h2>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-gray-900" />

                <h3 className="text-sm font-semibold text-gray-900">
                  ACTIVE ALERTS (3)
                </h3>
              </div>

              <div className="space-y-3">
                {/* Alert 1 */}
                <div className="border-l-4 border-yellow-500 bg-gray-50 p-4 rounded-r">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-gray-900">
                      1. Medium: Storage at 82% capacity
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-800">
                      Action
                    </button>
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                      Dismiss
                    </button>
                  </div>
                </div>

                {/* Alert 2 */}
                <div className="border-l-4 border-red-500 bg-gray-50 p-4 rounded-r">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-gray-900">
                      2. High: Unusual login pattern detected
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-800">
                      Action
                    </button>
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                      Dismiss
                    </button>
                  </div>
                </div>

                {/* Alert 3 */}
                <div className="border-l-4 border-blue-500 bg-gray-50 p-4 rounded-r">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-gray-900">
                      3. Low: API response time increasing
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-800">
                      Action
                    </button>
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
