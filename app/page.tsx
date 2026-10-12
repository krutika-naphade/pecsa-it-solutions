import { ScrollReset } from '@/components/pecsa/scroll-reset'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Hero } from '@/components/pecsa/hero'
import { WhoWeAre } from '@/components/pecsa/who-we-are'
import { Expertise } from '@/components/pecsa/expertise'
import { ProblemApproach, HowWeWork } from '@/components/pecsa/how-we-work'
import { Products } from '@/components/pecsa/products'
import { Verticals } from '@/components/pecsa/verticals'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { Projects } from '@/components/pecsa/projects'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollReset />
      <Nav />
      <SideNav />

      {/* 01. HERO */}
      <Hero />

      {/* 02. PECSA INTRODUCTION / POSITIONING */}
      <WhoWeAre />

      {/* 03. WHAT WE DO — SELECTED CAPABILITIES */}
      <Expertise />

      {/* 04. PROBLEM-FIRST APPROACH */}
      <ProblemApproach />

      {/* 05. FEATURED PRODUCTS */}
      <Products />

      {/* 06. HOW WE WORK — SHORT VERSION */}
      <HowWeWork />

      {/* 07. INDUSTRIES — SELECTED OVERVIEW */}
      <Verticals />

      {/* 08. WHY PECSA — CREDIBILITY SECTION */}
      <WhyPecsa />

      {/* 09. FEATURED PROJECTS / CASE STUDIES */}
      <Projects />

      {/* 10. FINAL CTA */}
      <BuildWithUs />

      {/* 11. FOOTER */}
      <Footer />
    </main>
  )
}
