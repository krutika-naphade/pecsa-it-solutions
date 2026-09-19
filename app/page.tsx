import { ScrollReset } from '@/components/pecsa/scroll-reset'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Hero } from '@/components/pecsa/hero'
import { WhoWeAre } from '@/components/pecsa/who-we-are'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#211a17]">
      <ScrollReset />
      <Nav />
      <SideNav />
      <Hero />
      <WhoWeAre />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
