import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { FullProjectsList } from '@/components/pecsa/projects'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Projects & Case Studies | PECSA IT Solutions',
  description: 'From Ideas to Real-World Solutions. Explore PECSA case studies structured by Challenge, Solution, Technology, and Result.',
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="SELECTED PROJECTS & CASE STUDIES"
        title="From Ideas to"
        titleAccent="Real-World Solutions."
        description="We present every project through a consistent, objective structure: Challenge, Solution, Technology, and Result."
        lead="Projects represent custom client implementations, telemetry deployments, and bespoke digital platforms—distinct from our reusable software products."
      />

      {/* Verified Engineering Case Studies List */}
      <FullProjectsList />

      <BuildWithUs />
      <Footer />
    </main>
  )
}
