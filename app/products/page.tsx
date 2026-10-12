import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { PageHeader } from '@/components/pecsa/primitives'
import { FullProductsView } from '@/components/pecsa/products'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Products — Flagship Software Platforms | PECSA IT Solutions',
  description: 'Explore proprietary software platforms built by PECSA IT Solutions, including Auditool safety compliance platform and Society Management System.',
}

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 md:pt-28 bg-background text-foreground">
      <Nav />
      <SideNav />

      {/* Standardized Page Header Banner */}
      <PageHeader
        eyebrow="PROPRIETARY SOFTWARE PLATFORMS"
        title="Technology We Build."
        titleAccent="Products We Believe In."
        description="Alongside custom engineering services, PECSA develops flagship software products designed to solve specific operational challenges."
        lead="Our software products are packaged, battle-tested platforms offering turnkey deployments, dedicated maintenance, and continuous feature evolution."
      />

      {/* Flagship Products Grid Catalog */}
      <FullProductsView />

      <BuildWithUs />
      <Footer />
    </main>
  )
}
