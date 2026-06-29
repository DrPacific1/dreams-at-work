import { appClient } from "@/lib/auth0"
import Nav from "./_components/landing/nav"
import Hero from "./_components/landing/hero"
import MarqueeStrip from "./_components/landing/marquee-strip"
import Features from "./_components/landing/features"
import Integrations from "./_components/landing/integrations"
import Pricing from "./_components/landing/pricing"
import Testimonials from "./_components/landing/testimonials"
import CtaBanner from "./_components/landing/cta-banner"
import Footer from "./_components/landing/footer"

export default async function Home() {
  const session = await appClient.getSession()

  return (
    <main className="overflow-x-hidden bg-white">
      <Nav isLoggedIn={!!session} />
      <Hero />
      <MarqueeStrip />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  )
}
