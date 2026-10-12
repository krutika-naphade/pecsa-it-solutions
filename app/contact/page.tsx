import { Suspense } from 'react'
import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { ContactFormWrapper } from '@/components/pecsa/contact-form-wrapper'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Contact Us — Start a Project | PECSA IT Solutions',
  description: "Have a Problem Worth Solving? Let's Turn It Into Technology. Contact PECSA IT Solutions today to discuss your software, AI, automation, IoT, or robotics requirements.",
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="START A PROJECT / CONTACT"
        title="Have a Problem Worth Solving?"
        titleAccent="Let's Turn It Into Technology."
        description="Whether you're starting with an idea, improving an existing process, or looking for a technology partner — let's talk."
      >
        <div className="mt-8 pt-6 border-t border-border/80 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 font-mono-tech text-xs text-muted-foreground">
          <div className="border border-border bg-card p-4 shadow-2xs">
            <span className="text-primary font-bold block mb-1 uppercase tracking-widest">Registered Office</span>
            <span className="text-foreground text-sm font-sans font-medium">Nagpur, Maharashtra, India</span>
          </div>
          <div className="border border-border bg-card p-4 shadow-2xs">
            <span className="text-primary font-bold block mb-1 uppercase tracking-widest">Direct Contact</span>
            <span className="text-foreground text-sm font-sans font-medium">contact@pecsa.in</span>
          </div>
          <div className="border border-border bg-card p-4 shadow-2xs sm:col-span-2 lg:col-span-1">
            <span className="text-primary font-bold block mb-1 uppercase tracking-widest">Engineering Response</span>
            <span className="text-foreground text-sm font-sans font-medium">Direct Reply within 24 Hours</span>
          </div>
        </div>
      </PageHeader>

      <Suspense fallback={<div className="min-h-96 py-20 text-center font-mono-tech text-xs text-muted-foreground">LOADING FORM...</div>}>
        <ContactFormWrapper />
      </Suspense>
      <Footer />
    </main>
  )
}
