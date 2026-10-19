'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, ArrowDown, Users, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 bg-background border-b border-border overflow-hidden"
    >
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 h-[500px] w-[500px] blur-[150px] pointer-events-none rounded-full bg-primary/10" />
      <div className="absolute bottom-10 left-10 h-[350px] w-[350px] blur-[130px] pointer-events-none rounded-full bg-primary/5" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Main Hero Grid: Editorial Statement (Left) + Human Collaboration Photography (Right) */}
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Column: Brand Statement & Primary Actions */}
          <div className="max-w-2xl">
            {/* Top Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 sm:gap-3 border border-border bg-card/90 px-3 py-1.5 sm:px-4 sm:py-2 shadow-2xs backdrop-blur-xs max-w-full"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-muted-foreground font-semibold truncate sm:whitespace-normal">
                SOFTWARE • AI • AUTOMATION • IoT • ROBOTICS
              </span>
            </motion.div>

            {/* Core Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-foreground break-words"
            >
              Technology That Solves Real{' '}
              <span className="text-primary italic">Business Problems.</span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-5 sm:mt-6 max-w-xl text-base leading-relaxed text-muted-foreground font-sans sm:text-lg font-light break-words"
            >
              We design and build practical technology solutions that help businesses automate operations, improve efficiency, and grow — from custom software and AI systems to IoT, robotics, and digital platforms.
            </motion.p>

            {/* Credibility Micro-Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-5 sm:mt-6 flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-6 text-xs font-mono-tech text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Problem-First Engineering</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Direct Practitioner Access</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Multi-Disciplinary Delivery</span>
              </span>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 border border-primary bg-primary px-6 py-3.5 sm:px-8 sm:py-4 font-mono-tech text-xs uppercase tracking-widest text-white transition-all hover:bg-primary/90 shadow-sm font-semibold text-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/solutions"
                className="group flex items-center justify-center gap-3 border border-border bg-card px-6 py-3.5 sm:px-8 sm:py-4 font-mono-tech text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary/60 shadow-2xs font-semibold text-center"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Purposeful Human Collaboration Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Photographic Frame with Architectural Precision Border */}
            <div className="relative overflow-hidden border border-border bg-card shadow-xl group">
              {/* Technical Precision Corner Ticks */}
              <div className="absolute top-3 left-3 z-20 text-white/60 font-mono-tech text-xs select-none pointer-events-none">+</div>
              <div className="absolute top-3 right-3 z-20 text-white/60 font-mono-tech text-xs select-none pointer-events-none">+</div>
              <div className="absolute bottom-3 left-3 z-20 text-white/60 font-mono-tech text-xs select-none pointer-events-none">+</div>
              <div className="absolute bottom-3 right-3 z-20 text-white/60 font-mono-tech text-xs select-none pointer-events-none">+</div>

              {/* High-Resolution Collaborative Working Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="/images/hero-practical-engineering.jpg"
                  alt="PECSA systems engineer and operations director reviewing live diagnostic telemetry data on a tablet beside an automated robotic assembly module"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Restrained Technical Status Badge */}
              <div className="absolute bottom-3.5 left-3.5 z-20 inline-flex items-center gap-2.5 border border-border/80 bg-card/92 px-3.5 py-2 backdrop-blur-md shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold">
                  FIELD ENGINEERING // AUTOMATION & TELEMETRY
                </span>
                <span className="font-mono-tech text-[9px] text-muted-foreground uppercase border-l border-border pl-2 select-none">
                  REAL DELIVERY
                </span>
              </div>
            </div>

            {/* Subtle Background Accent Offset Frame */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-primary/20 pointer-events-none hidden sm:block" />
          </motion.div>
        </div>

        {/* Hero Bottom Transition Bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
              PECSA APPROACH //
            </span>
            <span className="font-sans text-xs sm:text-sm text-muted-foreground">
              We start with your operational problem — not preconceived technology.
            </span>
          </div>

          <a
            href="#who-we-are"
            className="group inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Explore Who We Are</span>
            <ArrowDown className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
