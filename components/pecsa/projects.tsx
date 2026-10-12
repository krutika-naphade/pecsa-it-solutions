'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AlertCircle, Lightbulb, Cpu, TrendingUp, ArrowRight, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react'
import { Reveal, Section } from './primitives'

export const VERIFIED_PROJECTS = [
  {
    id: 'industrial-monitoring',
    name: 'Industrial Machine Sensor & Telemetry Integration',
    category: 'INDUSTRIAL IOT & TELEMETRY',
    image: '/images/telemetry-iot.jpg',
    imageAlt: 'Industrial technician inspecting machine telemetry sensor on manufacturing facility floor',
    clientContext: 'Manufacturing Facility Operations',
    shortDescription: 'Real-time industrial machinery condition monitoring and automated threshold alert telemetry.',
    challenge: 'Unplanned machinery downtime went undetected until critical mechanical failures halted production line operations, causing delivery delays and elevated maintenance costs.',
    solution: 'Deployed IoT edge telemetry sensors with low-latency edge gateways connected to a real-time web monitoring console with automated threshold alerts for temperature, vibration, and runtime hours.',
    technologies: ['IoT Sensors', 'Embedded Telemetry', 'Edge Gateways', 'Next.js Dashboard', 'Real-Time Alerts'],
    result: 'Continuous operational monitoring without human intervention, enabling preventive maintenance interventions before mechanical breakdown occurs.',
    ctaText: 'Inquire About IoT Telemetry',
    ctaHref: '/contact?interest=IoT%20Solutions',
  },
  {
    id: 'architect-digital-identity',
    name: 'Architectural Studio Digital Identity & Spatial Portfolio',
    category: 'EDITORIAL DIGITAL SYSTEMS',
    image: '/images/architects/hero-pavilion.jpg',
    imageAlt: 'Minimalist architectural pavilion with natural light showcasing spatial depth and structural rigor',
    clientContext: 'Architecture & Spatial Design Practices',
    shortDescription: 'Bespoke digital portfolio platform translating architectural design philosophy into spatial digital experiences.',
    challenge: 'Generic website templates failed to reflect architectural design philosophy, spatial materiality, structural proportions, and design manifesto, reducing thoughtful architecture to shallow image grids.',
    solution: 'Engineered a bespoke digital portfolio platform centered around architectural thinking, structured spatial storytelling, custom typography, material narrative, and responsive media optimization.',
    technologies: ['Next.js', 'TypeScript', 'Editorial Spatial UX', 'Responsive Media', 'Typography Systems'],
    result: 'A tailored digital portfolio platform where architecture practices present their work through spatial and philosophical narrative, including interactive project brief workflows.',
    ctaText: 'View Case Study: Architectural Philosophy',
    ctaHref: '/for-architects/philosophy',
  },
]

export function Projects() {
  const [active, setActive] = useState(0)
  const p = VERIFIED_PROJECTS[active]

  return (
    <Section id="projects" index="09" eyebrow="Projects / Case Studies">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                  VERIFIED IMPLEMENTATIONS & CASE STUDIES
                </span>
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
                From Ideas to{' '}
                <span className="text-primary italic">Real-World Solutions.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground font-light">
                Explore how PECSA translates complex operational challenges into dependable software, AI, IoT, and automation systems with documented business outcomes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs shrink-0"
            >
              <span>View All Project Files</span>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>

        {/* Case Study Switcher Tabs */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {VERIFIED_PROJECTS.map((item, idx) => {
              const isSelected = active === idx
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`p-4 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-primary bg-card shadow-sm'
                      : 'border-border bg-card/60 hover:border-primary/40'
                  }`}
                >
                  <span className={`font-mono-tech text-[10px] uppercase tracking-widest block mb-1 font-bold ${
                    isSelected ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    CASE FILE 0{idx + 1} // {item.category}
                  </span>
                  <span className="font-serif-editorial text-lg text-foreground font-normal block">
                    {item.name}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Active Case Study Presentation */}
        <Reveal delay={0.2}>
          <div className="border border-border bg-card shadow-lg p-6 sm:p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              {/* Left Column: Case Narrative & Image */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-2 mb-3">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                      {p.category}
                    </span>
                    <span className="font-mono-tech text-[10px] text-muted-foreground uppercase font-semibold">
                      CONTEXT: {p.clientContext}
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                    "{p.shortDescription}"
                  </p>
                </div>

                {/* Case Study Image */}
                <div className="relative group">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-md">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono-tech text-muted-foreground">
                    <span>DOCUMENTED CASE FILE</span>
                    <span className="text-primary font-medium">PECSA // VERIFIED</span>
                  </div>
                </div>

                {/* Technologies Delivered */}
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-2">
                    Verified Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="border border-border bg-background px-3 py-1 font-mono-tech text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={p.ctaHref}
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-xs"
                  >
                    <span>{p.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Structured Challenge -> Solution -> Result */}
              <div className="space-y-4">
                <div className="border border-border bg-background p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">
                      The Operational Challenge
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.challenge}
                  </p>
                </div>

                <div className="border border-border bg-background p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Lightbulb className="h-4 w-4 shrink-0" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">
                      The Engineered Solution
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.solution}
                  </p>
                </div>

                <div className="border border-primary/30 bg-primary/5 p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">
                      Verified Business Outcome
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                    {p.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* FULL PROJECTS CATALOG (FOR /projects PAGE)                                 */
/* -------------------------------------------------------------------------- */

export function FullProjectsList() {
  return (
    <Section id="all-projects" index="01" eyebrow="VERIFIED IMPLEMENTATION ARCHIVE">
      <div className="space-y-12">
        <Reveal>
          <div className="border-l-2 border-primary pl-4 sm:pl-6 max-w-3xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              PECSA CASE FILES // WORK WE HAVE CARRIED OUT
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-foreground">
              Documented Implementations & Technical Case Studies
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
              Every project represents specific, verified engineering engagements structured across four dimensions: operational challenge, engineered solution, delivered tech stack, and verified business outcome.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          {VERIFIED_PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between border-b border-border/80 pb-2.5 mb-3">
                        <span className="font-mono-tech text-xs text-primary font-bold">
                          CASE FILE 0{i + 1}
                        </span>
                        <span className="font-mono-tech text-[10px] text-muted-foreground uppercase font-semibold">
                          {p.category}
                        </span>
                      </div>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground">
                        {p.name}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-foreground/80 italic">
                        "{p.shortDescription}"
                      </p>
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-xs">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-2">
                        Delivered Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="border border-border bg-background px-2.5 py-1 font-mono-tech text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3.5 pt-2 lg:pt-0">
                    <div className="border border-border bg-background p-4">
                      <div className="flex items-center gap-2 text-primary mb-1.5">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">Challenge</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.challenge}</p>
                    </div>

                    <div className="border border-border bg-background p-4">
                      <div className="flex items-center gap-2 text-primary mb-1.5">
                        <Lightbulb className="h-4 w-4 shrink-0" />
                        <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">Solution</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.solution}</p>
                    </div>

                    <div className="border border-primary/30 bg-primary/5 p-4">
                      <div className="flex items-center gap-2 text-primary mb-1.5">
                        <TrendingUp className="h-4 w-4 shrink-0" />
                        <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">Verified Outcome</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">{p.result}</p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={p.ctaHref}
                        className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-xs"
                      >
                        <span>{p.ctaText}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client Confidentiality & Publishing Protocol Notice */}
        <Reveal delay={0.2}>
          <div className="border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/10 text-primary shrink-0 mt-0.5">
                <Lock className="h-5 w-5" />
              </span>
              <div className="space-y-3">
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                    CLIENT CONFIDENTIALITY PROTOCOL
                  </span>
                  <h4 className="font-serif-editorial text-2xl font-normal text-foreground">
                    Why We Only Publish Verified & Authorized Case Files
                  </h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  Client intellectual property, proprietary industrial configurations, and sensitive operational architectures are strictly protected by non-disclosure agreements. We only publish case studies when outcomes are documented and explicitly authorized for public release by client stakeholders.
                </p>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  Additional enterprise deployments across custom ERP systems, AI automated document classification pipelines, and robotic workstation integrations are currently active and will be published upon client clearance.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono-tech text-xs text-primary uppercase tracking-widest font-semibold hover:underline"
                  >
                    <span>Collaborate With Our Engineering Team →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
