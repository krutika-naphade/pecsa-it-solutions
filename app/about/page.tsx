import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { WhoWeAre } from '@/components/pecsa/who-we-are'
import { Innovation } from '@/components/pecsa/innovation'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { TechStack } from '@/components/pecsa/tech-stack'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'About PECSA — Building Technology for the Real World',
  description: 'PECSA IT Solutions is a technology company focused on creating practical solutions across software, AI, automation, IoT, robotics, and digital technologies.',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="ABOUT PECSA IT SOLUTIONS"
        title="We're Building More Than"
        titleAccent="Software."
        description="PECSA IT Solutions is a technology company focused on creating practical solutions across software, AI, automation, IoT, robotics, and digital technologies."
        lead="Our goal is simple: make technology useful, accessible, and capable of solving real-world business problems."
      >
        <div className="mt-8 pt-6 border-t border-border/80 grid gap-6 sm:grid-cols-2 font-mono-tech text-xs text-muted-foreground">
          <div>
            <span className="text-primary font-bold block mb-1 uppercase tracking-widest">Engineering Hub</span>
            <span className="text-foreground text-sm font-sans font-medium">Nagpur, Maharashtra, India</span>
          </div>
          <div>
            <span className="text-primary font-bold block mb-1 uppercase tracking-widest">Core Focus</span>
            <span className="text-foreground text-sm font-sans font-medium">Objective-Driven Business Systems & Automation</span>
          </div>
        </div>
      </PageHeader>

      {/* 01. PECSA Positioning */}
      <WhoWeAre />

      {/* 02. Problem-First Approach */}
      <Innovation />

      {/* 03. 5 Pillars (Why PECSA) */}
      <WhyPecsa />

      {/* 04. Technology Stack Taxonomy */}
      <TechStack />

      {/* 05. Final CTA */}
      <BuildWithUs />

      {/* 06. Footer */}
      <Footer />
    </main>
  )
}
