'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Section } from './primitives'

export function BuildWithUs() {
  return (
    <Section id="final-cta" index="11" eyebrow="Final CTA">
      <Reveal>
        <div className="border border-white/15 bg-[#2b211d] p-8 sm:p-12 md:p-14 shadow-2xl relative">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3">
            GET STARTED TODAY
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] text-foreground">
            Have a Problem Worth Solving?
          </h2>
          <h3 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-primary italic mt-2">
            Let's Turn It Into Technology.
          </h3>

          <p className="mt-6 font-sans text-base sm:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            Whether you're starting with an idea, improving an existing process, or looking for a technology partner — let's talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-primary bg-primary px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-white/20 bg-[#211a17] px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-white/50 transition-colors font-semibold"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}


