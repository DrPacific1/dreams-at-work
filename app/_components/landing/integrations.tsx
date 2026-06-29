const INTEGRATIONS = [
  { icon: "📅", name: "Google Calendar", tag: "Native" },
  { icon: "💬", name: "Slack", tag: "Native" },
  { icon: "🎯", name: "Jira", tag: "Native" },
  { icon: "📝", name: "Notion", tag: "Native" },
  { icon: "📊", name: "HubSpot", tag: "via Zapier" },
  { icon: "🐙", name: "GitHub", tag: "Native" },
  { icon: "📹", name: "Zoom", tag: "via Zapier" },
  { icon: "⚡", name: "Linear", tag: "Native" },
  { icon: "🔗", name: "Zapier", tag: "500+ apps" },
]

export default function Integrations() {
  return (
    <section id="solutions" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Integrations
          </p>
          <h2 className="text-4xl font-black tracking-tight text-[#0D0D0D]">
            Works with your stack
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Connect Dreams@Work to the tools your team already lives in.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {INTEGRATIONS.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-[#0D0D0D]">{item.name}</p>
                <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
