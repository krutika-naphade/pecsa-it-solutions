'use client'

import { AnimatePresence, motion } from 'motion/react'
import {
  ClipboardCheck,
  Building2,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Reveal, Section } from './primitives'

const PRODUCTS = [
  {
    id: 'auditool',
    name: 'Auditool',
    tagline: 'Simplifying Safety Audits Through Technology',
    purpose:
      'A cloud-based safety audit management platform designed to help safety auditors manage audits, documentation, reports, clients, and compliance more efficiently.',
    features: [
      'Digital audit management',
      'Statutory forms',
      'Automated reports',
      'Client management',
      'Compliance tracking',
      'Centralized records',
    ],
    ctaText: 'Explore Solutions →',
    ctaHref: '/solutions',
  },
  {
    id: 'society',
    name: 'Society Management System',
    tagline: 'Smarter Communities. Simpler Management.',
    purpose:
      'A digital platform that connects residents, administrators, security staff, maintenance teams, and vendors in one centralized system.',
    features: [
      'Visitor Management',
      'Complaint Management',
      'Resident Communication',
      'Amenity Management',
      'Maintenance Management',
      'Digital Administration',
    ],
    ctaText: 'Explore Solutions →',
    ctaHref: '/solutions',
  },
]

export function Products() {
  const [active, setActive] = useState(0)
  const [expandedDetails, setExpandedDetails] = useState(false)

  const handleNextProduct = () => {
    setActive((prev) => (prev + 1) % PRODUCTS.length)
    setExpandedDetails(false)
  }

  const p = PRODUCTS[active]

  return (
    <Section id="products" index="04" eyebrow="Our Products">
      <Reveal>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
          Technology We Build.{' '}
          <span className="text-primary italic font-serif-editorial">
            Products We Believe In.
          </span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-3xl font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
          Alongside client solutions, PECSA develops its own technology products designed to solve specific real-world challenges.
        </p>
      </Reveal>

      {/* Product Card / Showcase Canvas */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-6 md:p-8 relative shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              PRODUCT SHOWCASE [{active + 1} / 02]
            </span>
            <span className="font-mono-tech text-xs text-primary font-semibold uppercase">
              {p.name}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start"
            >
              {/* Left Details */}
              <div>
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-primary block mb-1">
                  {p.tagline}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground">
                  {p.name}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {p.purpose}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={p.ctaHref}
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold"
                  >
                    <span>{p.ctaText}</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setExpandedDetails(!expandedDetails)}
                    className="inline-flex items-center gap-2 border border-white/20 bg-[#211a17] px-4 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:border-primary transition-all cursor-pointer"
                  >
                    <span>{expandedDetails ? 'Hide Features' : 'View Features'}</span>
                    <ChevronDown className={`h-3.5 w-3.5 text-primary transition-transform ${expandedDetails ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Right Feature List Grid */}
              <div className="border border-white/10 bg-[#211a17] p-5 sm:p-6">
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-3">
                  Key Capabilities & Features
                </span>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {p.features.map((feat) => (
                    <div
                      key={feat}
                      className="border border-white/10 bg-[#2b211d] p-3 flex items-center gap-2.5"
                    >
                      <span className="h-1.5 w-1.5 bg-primary shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-foreground/90 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Transition Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to transition product →
            </span>

            <button
              type="button"
              onClick={handleNextProduct}
              className="group flex items-center gap-3 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Transition to next product"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Small CTA Card */}
      <Reveal delay={0.2}>
        <div className="mt-6 border border-white/15 bg-[#2b211d] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif-editorial text-2xl text-foreground font-normal">
              Have an idea for a technology product?
            </h4>
            <p className="font-sans text-xs text-muted-foreground mt-1">
              We collaborate with forward-looking teams to build high-value technology platforms from scratch.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-3 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shrink-0"
          >
            <span>Let's Build It →</span>
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}

