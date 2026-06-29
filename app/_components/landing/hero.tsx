function DashboardPreview() {
  const members = [
    { name: "Alex R.", role: "Designer" },
    { name: "Jamie L.", role: "Engineer" },
    { name: "Sam K.", role: "PM" },
    { name: "Taylor W.", role: "Engineer" },
    { name: "Morgan B.", role: "Designer" },
  ]

  const tasks = [
    { row: 0, col: 0, span: 3, color: "bg-blue-200", label: "Brand Refresh" },
    { row: 0, col: 4, span: 2, color: "bg-fluro", label: "Handoff" },
    { row: 1, col: 1, span: 4, color: "bg-purple-200", label: "API v2" },
    { row: 1, col: 6, span: 2, color: "bg-orange-200", label: "Review" },
    { row: 2, col: 0, span: 2, color: "bg-pink-200", label: "Q3 Planning" },
    { row: 2, col: 3, span: 3, color: "bg-teal-200", label: "Sprint 12" },
    { row: 3, col: 2, span: 5, color: "bg-indigo-200", label: "Platform Infra" },
    { row: 4, col: 0, span: 3, color: "bg-amber-200", label: "UI Library" },
    { row: 4, col: 4, span: 4, color: "bg-rose-200", label: "Design System" },
  ]

  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"]

  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200">
      {/* App chrome bar */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-300" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-green-300" />
        <div className="ml-4 flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-700">Dreams@Work</span>
          <span className="rounded bg-fluro px-2 py-0.5 text-[10px] font-bold text-[#0D0D0D]">
            Q3 Schedule
          </span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-40 shrink-0 border-r border-gray-100 md:block">
          <div className="border-b border-gray-100 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Team
          </div>
          {members.map((m) => (
            <div key={m.name} className="flex items-center gap-2 border-b border-gray-50 px-4 py-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-[9px] font-bold text-gray-600">
                {m.name[0]}
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-800">{m.name}</p>
                <p className="text-[9px] text-gray-400">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="min-w-0 flex-1 overflow-x-auto">
          {/* Week headers */}
          <div
            className="grid border-b border-gray-100"
            style={{ gridTemplateColumns: `repeat(8, minmax(60px, 1fr))` }}
          >
            {weeks.map((w) => (
              <div
                key={w}
                className="border-r border-gray-100 px-2 py-2 text-center text-[10px] font-bold text-gray-400 last:border-r-0"
              >
                {w}
              </div>
            ))}
          </div>

          {/* Rows */}
          {members.map((m, rowIdx) => (
            <div
              key={m.name}
              className="relative grid border-b border-gray-50 last:border-b-0"
              style={{
                gridTemplateColumns: `repeat(8, minmax(60px, 1fr))`,
                minHeight: "40px",
              }}
            >
              {weeks.map((_, colIdx) => (
                <div key={colIdx} className="border-r border-gray-50 last:border-r-0" />
              ))}
              {tasks
                .filter((t) => t.row === rowIdx)
                .map((task, i) => (
                  <div
                    key={i}
                    className={`absolute top-1.5 bottom-1.5 ${task.color} flex items-center rounded px-2`}
                    style={{
                      left: `calc(${(task.col / 8) * 100}% + 2px)`,
                      width: `calc(${(task.span / 8) * 100}% - 4px)`,
                    }}
                  >
                    <span className="truncate text-[10px] font-semibold text-gray-700">
                      {task.label}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Utilization bar at bottom */}
      <div className="flex items-center gap-3 border-t border-gray-100 bg-gray-50 px-4 py-2">
        <span className="text-[10px] font-semibold text-gray-400">Team utilization</span>
        <div className="flex flex-1 gap-1">
          {[78, 92, 65, 88, 71, 95, 83, 60].map((pct, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-full bg-gray-200">
              <div
                className={`h-1.5 rounded-full ${pct > 90 ? "bg-orange-400" : "bg-fluro"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          ))}
        </div>
        <span className="text-[10px] font-semibold text-green-600">82% avg</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-white pb-0 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Social proof badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
            <span className="text-yellow-400">★★★★★</span> 4.8 on G2
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
            <span className="text-yellow-400">★★★★★</span> 4.7 on Capterra
          </span>
          <span className="rounded-full bg-fluro px-3 py-1.5 text-xs font-bold text-[#0D0D0D]">
            #1 Resource Planner 2025
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center text-5xl font-black leading-[1.08] tracking-tight text-[#0D0D0D] md:text-7xl">
          Plan work with the{" "}
          <mark className="bg-fluro px-2 text-[#0D0D0D]">full picture</mark>
        </h1>

        {/* Subheader */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-relaxed text-gray-500">
          Dreams@Work gives your team real-time visibility into capacity, workload, and
          timelines — so you can plan confidently and deliver on time.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/onboarding"
            className="rounded-full bg-[#0D0D0D] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-gray-800"
          >
            Try for free — no card needed
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base font-semibold text-gray-500 transition-colors hover:text-[#0D0D0D]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200">
              ▶
            </span>
            Watch demo
          </a>
        </div>

        {/* Dashboard preview — bleeds to edge */}
        <DashboardPreview />
      </div>
    </section>
  )
}
