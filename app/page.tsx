import { ScrollReset } from '@/components/pecsa/scroll-reset'
import { Nav } from '@/components/pecsa/nav'
import { Hero } from '@/components/pecsa/hero'
import { WhoWeAre } from '@/components/pecsa/who-we-are'
import { Expertise } from '@/components/pecsa/expertise'
import { ProblemApproach } from '@/components/pecsa/how-we-work'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollReset />
      <Nav />

      {/* 01. HERO */}
      <Hero />

      {/* 02. PECSA INTRODUCTION / POSITIONING */}
      <WhoWeAre />

      {/* 03. WHAT WE DO — 6 CAPABILITIES OVERVIEW */}
      <Expertise />

      {/* 04. CONCISE PROBLEM-FIRST APPROACH */}
      <ProblemApproach />

      {/* 05. WHY PECSA — CREDIBILITY & PILLARS */}
      <WhyPecsa />

      {/* 06. FINAL CTA */}
      <BuildWithUs />

      {/* 07. FOOTER */}
      <Footer />
    </main>
  )
}
