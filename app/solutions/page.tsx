import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { FullSolutionsList } from '@/components/pecsa/expertise'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Solutions — Capabilities & Problem Areas | PECSA IT Solutions',
  description: "Businesses don't always need more technology. They need the right technology. Explore PECSA capabilities across Software, AI, Automation, IoT, Robotics, and Digital Solutions.",
}

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="PECSA SOLUTIONS & CAPABILITIES"
        title={
          <>
            <span className="text-primary italic block">Multiple Possibilities.</span>
            <span className="block">One Technology Partner.</span>
          </>
        }
        description="Businesses don't always need more technology. They need the right technology."
        lead="At PECSA, we combine multiple engineering disciplines to solve your operational bottlenecks, eliminate manual friction, and build scalable systems."
      />

      {/* All 6 Core Capability Areas with Operational Problems Solved */}
      <FullSolutionsList />

      {/* Contextual Bridge to Software Products */}
      <section className="bg-card border-y border-border py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border border-border bg-background p-8 sm:p-12 shadow-sm">
            <div className="max-w-2xl">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-2">
                TURNKEY SOFTWARE PRODUCTS
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-foreground">
                Looking for Ready Software Platforms?
              </h2>
              <p className="mt-4 font-sans text-base text-muted-foreground leading-relaxed">
                Alongside custom engineering solutions, PECSA develops dedicated software platforms including <strong>Auditool</strong> (safety audit compliance) and our <strong>Society Management System</strong>.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shrink-0"
            >
              <span>Explore Products Catalogue</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Specialized Practice: For Architects */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border border-border bg-card p-8 sm:p-12 shadow-sm">
            <div className="max-w-2xl">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-2">
                SPECIALIZED DIGITAL PRACTICE // FOR ARCHITECTS
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-foreground">
                Built Around Your Philosophy.
              </h2>
              <p className="mt-4 font-sans text-base text-muted-foreground leading-relaxed">
                We don’t build generic portfolio templates. We translate an architectural studio’s unique design thinking and spatial sensibilities into an authentic digital portfolio experience.
              </p>
            </div>
            <Link
              href="/for-architects/philosophy"
              className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-all font-semibold shrink-0"
            >
              <span>Explore Architecture Philosophy</span>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      <BuildWithUs />
      <Footer />
    </main>
  )
}
