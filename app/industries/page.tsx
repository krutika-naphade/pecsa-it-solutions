import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Verticals } from '@/components/pecsa/verticals'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Industries — Sector Solutions | PECSA IT Solutions',
  description: 'Technology Adapted to Your Industry. PECSA delivers specialized solutions for Manufacturing, Architecture & Real Estate, Education, Healthcare, Residential Communities, and Startups.',
}

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-[#211a17]">
      <Nav />
      <SideNav />

      {/* Page Header Banner */}
      <section className="bg-[#211a17] py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
            INDUSTRY SECTORS & VERTICALS
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-foreground">
            Technology Adapted to <span className="text-primary italic">Your Industry.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
            We adapt software, AI, automation, IoT, and robotics to solve sector-specific operational bottlenecks and unlock business growth.
          </p>
        </div>
      </section>

      <Verticals />
      <WhyPecsa />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
