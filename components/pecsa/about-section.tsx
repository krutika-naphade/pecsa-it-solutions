'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Section } from './primitives'

export function AboutSection() {
  return (
    <Section id="about-pecsa" index="10" eyebrow="About PECSA">
      <div className="border border-white/10 bg-[#2b211d] p-8 sm:p-12 shadow-2xl relative">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
              We're Building More Than{' '}
              <span className="text-primary italic font-serif-editorial">Software.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                PECSA IT Solutions is a technology company focused on creating practical solutions across software, AI, automation, IoT, robotics, and digital technologies.
              </p>
              <p>
                Our goal is simple: make technology useful, accessible, and capable of solving real-world problems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold"
              >
                <span>Learn About PECSA</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
