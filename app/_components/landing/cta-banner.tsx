export default function CtaBanner() {
  return (
    <section className="bg-[#0D0D0D] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
          Your team deserves the{" "}
          <mark className="bg-fluro px-2 text-[#0D0D0D]">full picture</mark>
        </h2>
        <p className="mt-6 text-xl text-gray-400">
          Start planning with clarity. No credit card required.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/onboarding"
            className="rounded-full bg-fluro px-8 py-4 text-base font-bold text-[#0D0D0D] transition-opacity hover:opacity-90"
          >
            Try for free
          </a>
          <a
            href="#"
            className="rounded-full border border-gray-600 px-8 py-4 text-base font-bold text-white transition-colors hover:border-gray-400"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  )
}
