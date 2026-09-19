import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { Projects } from '@/components/pecsa/projects'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Projects & Case Studies | PECSA IT Solutions',
  description: 'From Ideas to Real-World Solutions. Explore PECSA case studies structured by Challenge, Solution, Technology, and Result.',
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-[#211a17]">
      <Nav />
      <SideNav />

      {/* Page Header Banner */}
      <section className="bg-[#211a17] py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
            SELECTED PROJECTS & CASE STUDIES
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-foreground">
            From Ideas to <span className="text-primary italic">Real-World Solutions.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
            We present every project through a consistent, objective structure: Challenge, Solution, Technology, and Result.
          </p>
        </div>
      </section>

      <Projects />
      <BuildWithUs />
      <Footer />
    </main>
  )
}
