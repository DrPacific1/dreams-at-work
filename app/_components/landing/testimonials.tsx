const TESTIMONIALS = [
  {
    quote:
      "Dreams@Work changed how we plan sprints. We went from guessing capacity to knowing it. Our delivery rate jumped 40% in the first quarter.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Meridian Labs",
    initials: "SC",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "The timeline view is genuinely beautiful. Our PMs finally have a single source of truth for who's working on what — no more spreadsheet chaos.",
    name: "Marcus Obi",
    title: "Head of Product",
    company: "Stackform",
    initials: "MO",
    color: "bg-fluro text-[#0D0D0D]",
  },
  {
    quote:
      "Onboarding took 20 minutes. Seriously. The Slack and Jira integrations just worked, and our whole team was scheduling inside a week.",
    name: "Priya Nair",
    title: "Operations Lead",
    company: "Cloudvault",
    initials: "PN",
    color: "bg-purple-100 text-purple-700",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-8xl font-black leading-none text-gray-100">"</p>
          <h2 className="-mt-6 text-4xl font-black tracking-tight text-[#0D0D0D]">
            Teams that ship on time
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Real stories from real teams using Dreams@Work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50 p-8"
            >
              <p className="text-base leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0D0D0D]">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
