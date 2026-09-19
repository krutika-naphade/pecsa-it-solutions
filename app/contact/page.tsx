import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Connect } from '@/components/pecsa/connect'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Contact Us — Start a Project | PECSA IT Solutions',
  description: 'Have a Problem Worth Solving? Let\'s Turn It Into Technology. Contact PECSA IT Solutions today to discuss your software, AI, automation, IoT, or robotics requirements.',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-[#211a17]">
      <Nav />
      <SideNav />

      {/* Page Header Banner */}
      <section className="bg-[#211a17] py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
            START A PROJECT / CONTACT
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-foreground">
            Have a Problem Worth Solving?{' '}
            <span className="text-primary italic">Let's Turn It Into Technology.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Whether you're starting with an idea, improving an existing process, or looking for a technology partner — let's talk.
          </p>

          <div className="mt-8 border-t border-white/10 pt-6 grid gap-6 sm:grid-cols-2 font-mono-tech text-xs text-muted-foreground">
            <div>
              <span className="text-primary font-semibold block mb-1 uppercase tracking-widest">Location</span>
              <span className="text-foreground text-sm font-sans">Nagpur, Maharashtra, India</span>
            </div>
            <div>
              <span className="text-primary font-semibold block mb-1 uppercase tracking-widest">Direct Contact</span>
              <span className="text-foreground text-sm font-sans">contact@pecsa.in</span>
            </div>
          </div>
        </div>
      </section>

      <Connect />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
