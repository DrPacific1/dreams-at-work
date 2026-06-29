const FEATURES = [
  {
    icon: "◎",
    title: "Capacity Planning",
    body: "See exactly who has availability before you make a commitment. Stop over-allocating — or leaving talent idle — with real-time capacity bars for every person on your team.",
    preview: (
      <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4">
        {["Alex R.", "Jamie L.", "Sam K.", "Taylor W."].map((name, i) => {
          const pct = [85, 48, 100, 62][i]
          return (
            <div key={name} className="mb-3 last:mb-0">
              <div className="mb-1 flex justify-between text-xs font-medium text-gray-500">
                <span>{name}</span>
                <span className={pct >= 90 ? "font-bold text-orange-500" : "text-gray-400"}>
                  {pct}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-2 rounded-full ${pct >= 90 ? "bg-orange-400" : "bg-fluro"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    ),
  },
  {
    icon: "⟶",
    title: "Timeline View",
    body: "Visualize every project and every person on a single horizontal timeline. Drag to reschedule, resize to extend, and instantly spot where bottlenecks will hit before they do.",
    preview: (
      <div className="mt-6 space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-4">
        {[
          { label: "Brand Refresh", w: "70%", color: "bg-blue-200", offset: "0%" },
          { label: "API v2", w: "55%", color: "bg-purple-200", offset: "20%" },
          { label: "Sprint 12", w: "40%", color: "bg-fluro", offset: "10%" },
          { label: "Platform Infra", w: "65%", color: "bg-indigo-200", offset: "25%" },
        ].map((bar) => (
          <div key={bar.label} className="flex items-center gap-2">
            <span className="w-28 shrink-0 text-[11px] font-medium text-gray-500 truncate">
              {bar.label}
            </span>
            <div className="relative flex-1 h-6">
              <div
                className={`absolute top-0 bottom-0 ${bar.color} rounded flex items-center px-2`}
                style={{ left: bar.offset, width: bar.w }}
              >
                <span className="text-[9px] font-semibold text-gray-700 truncate">
                  {bar.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "◈",
    title: "Workload Insights",
    body: "Understand the health of your team at a glance with utilization heatmaps. Identify burnout risk, surface under-utilization, and balance work distribution across the quarter.",
    preview: (
      <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 40 }).map((_, i) => {
            const pct = Math.floor(((Math.sin(i * 0.7) + 1) / 2) * 100)
            const color =
              pct > 85
                ? "bg-orange-300"
                : pct > 60
                  ? "bg-fluro"
                  : "bg-green-200"
            return (
              <div
                key={i}
                title={`${pct}%`}
                className={`h-6 rounded-sm ${color} opacity-80`}
              />
            )
          })}
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] font-medium text-gray-400">
          <span>Under</span>
          <span>Optimal</span>
          <span className="text-orange-400">Over</span>
        </div>
      </div>
    ),
  },
]

export default function Features() {
  return (
    <section id="product" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
            How it works
          </p>
          <h2 className="text-4xl font-black tracking-tight text-[#0D0D0D] md:text-5xl">
            Everything your team needs to{" "}
            <mark className="bg-fluro px-1 text-[#0D0D0D]">plan with confidence</mark>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-lg"
            >
              <span className="text-3xl font-black text-[#0D0D0D]">{f.icon}</span>
              <h3 className="mt-4 text-xl font-black text-[#0D0D0D]">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.body}</p>
              {f.preview}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
