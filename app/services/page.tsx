import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { HowWeWork } from '@/components/pecsa/how-we-work'
import { TechStack } from '@/components/pecsa/tech-stack'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Services — Process & Delivery | PECSA IT Solutions',
  description: 'From Problem to Possibility. Discover how PECSA works with businesses across discovery, definition, design, building, launching, and evolving solutions.',
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-[#211a17]">
      <Nav />
      <SideNav />

      {/* Page Header Banner */}
      <section className="bg-[#211a17] py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
            SERVICE DELIVERY METHODOLOGY
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-foreground">
            From Problem to <span className="text-primary italic">Possibility.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Our structured 6-stage engineering process ensures every project moves smoothly from initial vision to measurable business value.
          </p>
        </div>
      </section>

      <HowWeWork />
      <TechStack />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
