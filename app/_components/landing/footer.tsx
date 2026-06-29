const LINKS = {
  Product: ["Features", "Integrations", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-xl font-black tracking-tight text-[#0D0D0D]">
              Dreams<span className="text-fluro">@</span>Work
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Resource planning for teams that want to see the full picture.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SOC2", "GDPR", "B-Corp"].map((badge) => (
                <span
                  key={badge}
                  className="rounded border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                {heading}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-[#0D0D0D]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dreams@Work. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with ♥ for teams everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
