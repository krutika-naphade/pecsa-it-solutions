import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { FullProcessRoadmap } from '@/components/pecsa/how-we-work'
import { TechStack } from '@/components/pecsa/tech-stack'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Services — Process & Delivery | PECSA IT Solutions',
  description: 'From Problem to Possibility. Discover how PECSA works with businesses across discovery, definition, design, building, launching, and evolving solutions.',
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="SERVICE DELIVERY METHODOLOGY"
        title="From Problem to"
        titleAccent="Possibility."
        description="Our structured 6-stage engineering process ensures every project moves smoothly from initial vision to measurable business value."
        lead="Explore each sequential stage from initial discovery through long-term evolution and continuous support."
      />

      {/* 6-Stage Process Roadmap */}
      <FullProcessRoadmap />

      <TechStack />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
