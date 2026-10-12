'use client'

import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Reveal, Section } from './primitives'

const POINTS = [
  {
    step: '01',
    title: 'Practical Technology',
    body: 'We focus on solutions that create measurable business value, not overly complex technology for its own sake.',
  },
  {
    step: '02',
    title: 'Business-Centric Approach',
    body: 'We understand your actual operational workflow and team friction points before writing architecture or designing interfaces.',
  },
  {
    step: '03',
    title: 'Scalable Architecture',
    body: 'We build systems designed to evolve smoothly with your organization as your data, user volume, and functional requirements expand.',
  },
  {
    step: '04',
    title: 'Multiple Technology Capabilities',
    body: 'Software, AI, automation, IoT, robotics, and digital engineering integrated seamlessly under one dedicated engineering partner.',
  },
  {
    step: '05',
    title: 'Long-Term Partnership',
    body: 'We stay connected post-deployment to measure real-world performance, optimize throughput, and support strategic growth.',
  },
]

export function WhyPecsa() {
  return (
    <Section id="why-pecsa" index="08" eyebrow="Why PECSA">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        {/* Left Sticky Column */}
        <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
          <Reveal>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold inline-block border border-primary/30 bg-primary/5 px-3 py-1 mb-2">
              CREDIBILITY & COMMITMENT
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal leading-[1.02] tracking-tight text-foreground">
              Built for Businesses That Want to{' '}
              <span className="text-primary italic">Move Forward.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
              We approach every technology partnership with a commitment to real business outcomes, engineering clarity, and long-term reliability.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs"
              >
                <span>About PECSA IT Solutions</span>
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Column: 5 Core Value Pillars */}
        <div className="space-y-4">
          {POINTS.map((p, idx) => (
            <Reveal key={p.step} delay={0.06 * idx}>
              <div className="group border border-border bg-card p-6 sm:p-7 hover:border-primary/60 transition-all duration-300 shadow-2xs">
                <div className="flex items-start gap-5">
                  <span className="font-serif-editorial text-3xl sm:text-4xl text-primary font-normal leading-none shrink-0 pt-0.5">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
