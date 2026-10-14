'use client'

import { Reveal, Section } from './primitives'
import { ArrowUpRight, Handshake, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const DOMAIN_TAGS = [
  'Software',
  'AI',
  'Automation',
  'IoT',
  'Robotics',
  'Digital',
]

export function WhoWeAre() {
  return (
    <Section id="who-we-are" index="02" eyebrow="PECSA POSITIONING">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Left Column: Editorial Statement & Domain Tags */}
        <div className="space-y-6 max-w-2xl">
          <Reveal>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold inline-block border border-primary/30 bg-primary/5 px-3 py-1 mb-2">
              BUILDING TECHNOLOGY FOR THE REAL WORLD
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.05] text-foreground break-words">
              Building Technology for the{' '}
              <span className="text-primary italic">Real World.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-sans text-base sm:text-xl leading-relaxed text-muted-foreground font-light break-words">
              From a simple website to a complex automated system, we believe technology should have a purpose — solving problems, reducing complexity, and creating measurable value.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/90 break-words">
              We work alongside business leaders as hands-on engineering partners. Whether optimizing a manufacturing workflow or building custom software from the ground up, we connect technical architecture with real-world operational execution.
            </p>
          </Reveal>

          {/* Domain Tags Strip */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
              {DOMAIN_TAGS.map((tag, i) => (
                <div key={tag} className="flex items-center gap-2 sm:gap-2.5">
                  <span className="font-mono-tech text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground bg-card border border-border px-3 py-1.5 sm:px-3.5 hover:border-primary transition-colors shadow-2xs">
                    {tag}
                  </span>
                  {i < DOMAIN_TAGS.length - 1 && (
                    <span className="text-muted-foreground/40 font-mono-tech text-xs select-none">/</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Action Links */}
          <Reveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs text-center"
              >
                <span>Why PECSA</span>
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2 text-center"
              >
                <span>Explore Services →</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Partnership & Collaboration Photography */}
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="relative overflow-hidden border border-border bg-card shadow-lg group">
              {/* Corner marks */}
              <div className="absolute top-3 left-3 z-20 text-white/60 font-mono-tech text-xs select-none">+</div>
              <div className="absolute top-3 right-3 z-20 text-white/60 font-mono-tech text-xs select-none">+</div>
              <div className="absolute bottom-3 left-3 z-20 text-white/60 font-mono-tech text-xs select-none">+</div>
              <div className="absolute bottom-3 right-3 z-20 text-white/60 font-mono-tech text-xs select-none">+</div>

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/hero-engineering-collaboration.jpg"
                  alt="PECSA engineering team collaborating in an active design studio on system architecture and hardware prototyping"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Caption Card */}
              <div className="border-t border-border bg-card p-4 sm:p-5 flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-primary/40 bg-primary/10 text-primary shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary font-bold block mb-1">
                    BUILT BY PRACTITIONERS // DIRECT ACCESS
                  </span>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    We engage directly with operational reality. No layers of account bureaucracy — direct collaboration between businesses and hands-on builders.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle background frame */}
            <div className="absolute -bottom-2 -left-2 -z-10 h-full w-full border border-border/80 pointer-events-none hidden sm:block" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
