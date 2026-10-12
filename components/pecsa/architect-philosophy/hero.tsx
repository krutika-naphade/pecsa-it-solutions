'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react'

export function ArchitectHero({
  onOpenModal,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: {
  onOpenModal: () => void
  onPrimaryCtaClick?: () => void
  onSecondaryCtaClick?: () => void
}) {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-border tech-grid-bg"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Issue Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
              [SPECIALIZED PRACTICE]
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Built Around Your Philosophy
            </span>
          </div>
          <div className="font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-4">
            <span>FOR ARCHITECTS & SPATIAL STUDIOS</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline">PECSA DIGITAL MONOGRAPH</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.98] tracking-tight text-foreground"
            >
              Your portfolio should look like you think.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl font-sans text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground font-light"
            >
              We work with architects to understand the ideas, principles, process and personality
              behind their work—and translate them into a portfolio that feels like an extension
              of their practice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                onClick={onPrimaryCtaClick}
                className="group flex items-center gap-3 border border-primary bg-primary px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                <span>Let’s build your portfolio</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                onClick={onSecondaryCtaClick}
                className="group flex items-center gap-3 border border-border bg-card px-7 py-4 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-colors font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                <span>See our work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
              </Link>

              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 border border-border/80 bg-background/80 px-5 py-4 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5 text-primary" />
                <span>Quick Studio Brief</span>
              </button>
            </motion.div>
          </div>

          {/* Architectural Specification */}
          <div className="border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-5 font-mono-tech text-xs">
              <span className="text-primary font-bold uppercase tracking-wider">
                SPECIFICATION / 00
              </span>
              <span className="text-muted-foreground uppercase tracking-wider">
                TRANSLATION AUDIT
              </span>
            </div>
            <div className="space-y-4 font-sans text-sm">
              <div className="border-b border-border/60 pb-3">
                <span className="font-mono-tech text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
                  Primary Principle
                </span>
                <p className="text-foreground font-medium">
                  “We don’t build portfolio websites for architects. We translate the architect’s
                  way of thinking into a digital experience.”
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-border/60 pb-3 font-mono-tech text-xs">
                <div>
                  <span className="text-[10px] uppercase text-muted-foreground block">Medium</span>
                  <span className="text-foreground font-semibold">Custom Digital Monograph</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-muted-foreground block">Curatorial Stance</span>
                  <span className="text-foreground font-semibold">Frame Never Artwork</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Every portfolio is conceived from first principles—grounded in your spatial methodology,
                material palette, and studio voice.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Architectural Photography Plate */}
        <div className="mt-14 sm:mt-18 relative overflow-hidden border border-border bg-card">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
            <Image
              src="/images/architects/hero-pavilion.jpg"
              alt="Minimalist contemporary concrete and timber pavilion bathed in soft morning natural light, expressing structural clarity and spatial calm"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card/90 font-mono-tech text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-foreground font-medium uppercase tracking-wider">
                Plate 01 — Structural Clarity, Material Truth & Quiet Spatial Order
              </span>
            </div>
            <span className="text-[11px] tracking-widest uppercase">
              ARCHITECTURAL MONOGRAPH ARCHIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
