'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { Reveal, Section } from './primitives'

export function BuildWithUs() {
  return (
    <Section id="final-cta" index="10" eyebrow="Next Steps">
      <Reveal>
        <div className="border border-border bg-card p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle warm glow in corner */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3">
                LET'S BUILD TOGETHER // NEXT STEPS
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] text-foreground">
                Have a Problem Worth Solving?
              </h2>
              <p className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-primary italic mt-3">
                Let's Turn It Into Technology.
              </p>

              <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl font-light">
                Whether you're starting from an initial idea, streamlining an existing manual operation, or looking for an end-to-end technology partner — we're ready to listen and build.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 border border-primary bg-primary px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/solutions"
                  className="group flex items-center gap-3 border border-border bg-background px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-sm"
                >
                  <span>Explore Capabilities</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
                </Link>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="border border-border bg-background/80 p-6 sm:p-7 space-y-4">
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold block">
                DIRECT INQUIRY CHANNELS
              </span>
              <div className="space-y-3 font-sans text-xs text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href="mailto:info@pecsa.in" className="hover:text-foreground transition-colors font-mono-tech">
                    info@pecsa.in
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-mono-tech">+91 91754 50920</span>
                </div>
                <div className="flex items-start gap-2.5 pt-1 border-t border-border/60">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Maharashtra, India • Serving Clients Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
