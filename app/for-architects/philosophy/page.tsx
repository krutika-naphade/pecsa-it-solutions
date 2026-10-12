import type { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { ScrollReset } from '@/components/pecsa/scroll-reset'
import { ArchitectPhilosophy } from '@/components/pecsa/architect-philosophy'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Architecture Portfolio Website Philosophy | PECSA IT Solutions',
  description:
    'Discover how PECSA works with architects to translate their philosophy, process and visual language into thoughtful digital portfolio experiences.',
  alternates: {
    canonical: 'https://pecsa.in/for-architects/philosophy',
  },
  openGraph: {
    title: 'Architecture Portfolio Website Philosophy | PECSA IT Solutions',
    description:
      'Discover how PECSA works with architects to translate their philosophy, process and visual language into thoughtful digital portfolio experiences.',
    url: 'https://pecsa.in/for-architects/philosophy',
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
    title: 'Architecture Portfolio Website Philosophy | PECSA IT Solutions',
    description:
      'Discover how PECSA works with architects to translate their philosophy, process and visual language into thoughtful digital portfolio experiences.',
    images: ['/images/architects/hero-pavilion.jpg'],
  },
}

export default function ArchitectPhilosophyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollReset />
      <Nav />
      <SideNav />
      <ArchitectPhilosophy />
      <Footer />
    </main>
  )
}
