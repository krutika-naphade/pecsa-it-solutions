import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Innovation } from '@/components/pecsa/innovation'
import { WhyPecsa } from '@/components/pecsa/why-pecsa'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'About PECSA — Building Technology for the Real World',
  description: 'PECSA IT Solutions is a technology company focused on creating practical solutions across software, AI, automation, IoT, robotics, and digital technologies.',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-[#211a17]">
      <Nav />
      <SideNav />

      {/* Page Header Banner */}
      <section className="bg-[#211a17] py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
            ABOUT PECSA IT SOLUTIONS
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-foreground">
            We're Building More Than <span className="text-primary italic">Software.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
            PECSA IT Solutions is a technology company focused on creating practical solutions across software, AI, automation, IoT, robotics, and digital technologies.
          </p>
          <p className="mt-3 max-w-3xl font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
            Our goal is simple: make technology useful, accessible, and capable of solving real-world problems.
          </p>
        </div>
      </section>

      <Innovation />
      <WhyPecsa />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
