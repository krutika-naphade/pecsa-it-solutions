import type { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { ScrollReset } from '@/components/pecsa/scroll-reset'
import { ArchitectPhilosophy } from '@/components/pecsa/architect-philosophy'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Architecture — Spatial Digital Portfolios | PECSA IT Solutions',
  description:
    'Discover how PECSA works with architectural practices to translate their philosophy, materiality, drawing language, and spatial sequencing into thoughtful digital portfolio monographs.',
  alternates: {
    canonical: 'https://pecsa.in/architecture',
  },
  openGraph: {
    title: 'Architecture — Spatial Digital Portfolios | PECSA IT Solutions',
    description:
      'Discover how PECSA works with architectural practices to translate their philosophy, materiality, drawing language, and spatial sequencing into thoughtful digital portfolio monographs.',
    url: 'https://pecsa.in/architecture',
    siteName: 'PECSA IT Solutions',
    type: 'article',
    images: [
      {
        url: '/images/architects/hero-pavilion.jpg',
        width: 1200,
        height: 675,
        alt: 'Minimalist contemporary architectural pavilion bathed in natural light',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture — Spatial Digital Portfolios | PECSA IT Solutions',
    description:
      'Discover how PECSA works with architectural practices to translate their philosophy, materiality, drawing language, and spatial sequencing into thoughtful digital portfolio monographs.',
    images: ['/images/architects/hero-pavilion.jpg'],
  },
}

export default function ArchitecturePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollReset />
      <Nav />
      <ArchitectPhilosophy />
      <Footer />
    </main>
  )
}
