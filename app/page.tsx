import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Hero } from '@/components/pecsa/hero'
import { WhoWeAre } from '@/components/pecsa/who-we-are'
import { Expertise } from '@/components/pecsa/expertise'
import { Innovation } from '@/components/pecsa/innovation'
import { Products } from '@/components/pecsa/products'
import { HowWeWork } from '@/components/pecsa/how-we-work'
import { Verticals } from '@/components/pecsa/verticals'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { Projects } from '@/components/pecsa/projects'
import { TechStack } from '@/components/pecsa/tech-stack'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Connect } from '@/components/pecsa/connect'
import { Footer } from '@/components/pecsa/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <SideNav />
      <Hero />
      <WhoWeAre />
      <Expertise />
      <Innovation />
      <Products />
      <HowWeWork />
      <Verticals />
      <WhyPecsa />
      <Projects />
      <TechStack />
      <BuildWithUs />
      <Connect />
      <Footer />
    </main>
  )
}
