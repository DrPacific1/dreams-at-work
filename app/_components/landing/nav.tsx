export default function Nav({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="text-xl font-black tracking-tight text-[#0D0D0D]">
          Dreams<span className="text-fluro">@</span>Work
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Product", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0D0D0D]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <a
              href="/dashboard"
              className="rounded-full bg-fluro px-5 py-2 text-sm font-bold text-[#0D0D0D] transition-opacity hover:opacity-90"
            >
              Go to Dashboard
            </a>
          ) : (
            <>
              <a
                href="/auth/login?returnTo=/dashboard"
                className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-[#0D0D0D] md:block"
              >
                Sign In
              </a>
              <a
                href="#"
                className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-[#0D0D0D] md:block"
              >
                Talk to Sales
              </a>
              <a
                href="/onboarding"
                className="rounded-full bg-[#0D0D0D] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-800"
              >
                Try for free
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
