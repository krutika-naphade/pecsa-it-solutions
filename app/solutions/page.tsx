import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Expertise } from '@/components/pecsa/expertise'
import { Products } from '@/components/pecsa/products'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Solutions — Capabilities & Products | PECSA IT Solutions',
  description: 'Businesses don\'t always need more technology. They need the right technology. Explore PECSA capabilities and flagship products like Auditool and Society Management System.',
}

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-[#211a17]">
      <Nav />
      <SideNav />

      {/* Page Header Banner */}
      <section className="bg-[#211a17] py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
            PECSA SOLUTIONS & CAPABILITIES
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-foreground">
            One Technology Partner.{' '}
            <span className="text-primary italic">Multiple Possibilities.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Businesses don't always need more technology. They need the right technology.
          </p>
          <p className="mt-3 max-w-3xl font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
            At PECSA, we combine multiple technology capabilities to create solutions around your actual business requirements.
          </p>
        </div>
      </section>

      {/* Part 1: The 6 Capability Areas */}
      <Expertise />

      {/* Part 2: Flagship Products */}
      <Products />

      <BuildWithUs />
      <Footer />
    </main>
  )
}
