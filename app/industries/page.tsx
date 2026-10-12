import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { FullVerticalsGrid } from '@/components/pecsa/verticals'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Industries — Sector Solutions | PECSA IT Solutions',
  description: 'Technology Adapted to Your Industry. PECSA delivers specialized solutions for Manufacturing, Architecture & Real Estate, Education, Healthcare, Residential Communities, and Startups.',
}

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="INDUSTRY SECTORS & VERTICALS"
        title="Technology Adapted to"
        titleAccent="Your Industry."
        description="We adapt software, AI, automation, IoT, and robotics to solve sector-specific operational bottlenecks and unlock business growth."
        lead="Explore how our multidisciplinary technology approach solves challenges across manufacturing, real estate, education, healthcare, and residential communities."
      />

      {/* Full Sector Grid Catalog */}
      <FullVerticalsGrid />

      <WhyPecsa />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
