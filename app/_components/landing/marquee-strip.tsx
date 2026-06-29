const LOGOS = [
  "Vercel", "Stripe", "Linear", "Notion", "Figma",
  "Loom", "Intercom", "Calendly", "HubSpot", "Asana",
]

export default function MarqueeStrip() {
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section className="border-y border-gray-100 bg-white py-14">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
        Trusted by 4,500+ forward-thinking teams
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-lg font-bold tracking-tight text-gray-300 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
