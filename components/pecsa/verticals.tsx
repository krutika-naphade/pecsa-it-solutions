'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Factory, Landmark, GraduationCap, HeartPulse, Home, Rocket, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal, Section } from './primitives'

const INDUSTRIES_LIST = [
  {
    id: '01',
    icon: Factory,
    name: 'Manufacturing & Industrial',
    image: '/images/telemetry-iot.jpg',
    imageAlt: 'Technician inspecting edge IoT telemetry sensor and machinery status on factory production floor',
    capabilities: ['Automation', 'IoT Telemetry', 'Predictive Monitoring', 'Custom MES Software'],
    description: 'Transform manual tracking into connected, automated production intelligence. We deploy IoT sensors and software dashboards to eliminate unplanned downtime and track equipment health.',
  },
  {
    id: '02',
    icon: Landmark,
    name: 'Architecture & Real Estate',
    image: '/images/architects/hero-pavilion.jpg',
    imageAlt: 'Architectural modern pavilion with refined spatial sequencing and minimalist materiality',
    capabilities: ['Bespoke Portfolios', 'Interactive Design Showcases', 'Lead Engines', 'Studio CMS'],
    description: 'Translate design philosophy, material depth, and spatial sequencing into an authentic digital presence. We build portfolios that look like architects think.',
  },
  {
    id: '03',
    icon: Home,
    name: 'Residential Communities',
    image: '/images/society-dashboard.jpg',
    imageAlt: 'Society Management System user interface dashboard',
    capabilities: ['Society Management', 'Gate Security', 'Maintenance Tracking', 'Resident Portal'],
    description: 'Connect residents, management committees, security guards, and service vendors through centralized digital management systems.',
  },
  {
    id: '04',
    icon: HeartPulse,
    name: 'Healthcare & Compliance',
    capabilities: ['Compliance Tracking', 'Audit Automation', 'Data Integrity', 'Workflow Platforms'],
    description: 'Streamline statutory documentation, inspection routines, and operational compliance with secure, audit-ready software platforms.',
  },
  {
    id: '05',
    icon: GraduationCap,
    name: 'Education & Training',
    capabilities: ['Learning Portals', 'Student Records', 'Administrative Automation', 'AI Workflows'],
    description: 'Modernize academic operations with intuitive student portals, streamlined administrative routines, and automated document generation.',
  },
  {
    id: '06',
    icon: Rocket,
    name: 'SMEs & Fast-Growing Startups',
    capabilities: ['MVP Development', 'SaaS Engineering', 'AI Integration', 'Modern Web Platforms'],
    description: 'Take high-potential product concepts from architectural whiteboard to battle-tested production environments rapidly and sustainably.',
  },
]

export function Verticals() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const current = INDUSTRIES_LIST[selectedIdx]
  const Icon = current.icon

  return (
    <Section id="verticals" index="07" eyebrow="Industries">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
                Technology Adapted to{' '}
                <span className="text-primary italic">Your Industry.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
                We adapt software, AI, automation, IoT, and robotics to solve sector-specific operational bottlenecks and unlock measurable business growth.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs shrink-0"
            >
              <span>Explore All Industries</span>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>

        {/* Industry Selector Grid */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {INDUSTRIES_LIST.map((ind, idx) => {
              const IndIcon = ind.icon
              const isSelected = selectedIdx === idx
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-3.5 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-primary bg-primary/10 shadow-xs'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono-tech text-[10px] font-bold ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                      {ind.id}
                    </span>
                    <IndIcon className={`h-4 w-4 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-foreground font-semibold block line-clamp-1">
                    {ind.name}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Selected Sector Showcase Canvas */}
        <Reveal delay={0.2}>
          <div className="border border-border bg-card shadow-lg p-6 sm:p-8 md:p-10">
            <div className={`grid gap-8 ${current.image ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[1.2fr_0.8fr]'} lg:items-start`}>
              {/* Sector Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold block">
                        INDUSTRY SECTOR [{current.id} / 06]
                      </span>
                      <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground">
                        {current.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {current.description}
                  </p>
                </div>

                {/* Capabilities Badges */}
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-2.5">
                    Documented Capability Solutions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="border border-border bg-background px-3 py-1 font-mono-tech text-xs text-foreground/90 font-medium"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-2xs"
                  >
                    <span>Sector Case Details</span>
                    <ArrowRight className="h-3.5 w-3.5 text-primary" />
                  </Link>
                </div>
              </div>

              {/* Sector Photography (if available) */}
              {current.image ? (
                <div className="relative group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-background shadow-md">
                    <Image
                      src={current.image}
                      alt={current.imageAlt || current.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="mt-2 text-right">
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                      REAL-WORLD APPLICATION // {current.id}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="border border-border/80 bg-background/50 p-6 flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary font-bold block mb-2">
                      OPERATIONAL FOCUS
                    </span>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Customized architecture tailored to industry regulations, data confidentiality, and specific team dynamics.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Link
                      href="/contact"
                      className="text-xs font-mono-tech uppercase tracking-widest text-primary font-semibold hover:underline flex items-center gap-1.5"
                    >
                      <span>Discuss Your Industry Needs →</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* FULL VERTICALS GRID CATALOG (FOR /industries PAGE)                         */
/* -------------------------------------------------------------------------- */

export function FullVerticalsGrid() {
  return (
    <Section id="all-verticals" index="01" eyebrow="ALL 6 INDUSTRY VERTICALS">
      <div className="space-y-12">
        <Reveal>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-foreground max-w-3xl">
            Detailed Industry Specifications & Solutions
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
            Explore how PECSA tailors software, AI, automation, IoT, and robotics to solve acute sector operational challenges.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_LIST.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Reveal key={ind.id} delay={i * 0.08}>
                <div className="group border border-border bg-card p-6 h-full flex flex-col justify-between hover:border-primary/60 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-4 font-mono-tech text-xs">
                      <span className="text-primary font-bold">[{ind.id}]</span>
                      <span className="text-muted-foreground uppercase font-semibold">SECTOR</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-primary bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-serif-editorial text-2xl font-normal text-foreground">
                        {ind.name}
                      </h3>
                    </div>

                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    <div>
                      <span className="font-mono-tech text-[11px] uppercase tracking-wider text-foreground font-semibold block mb-2">
                        Documented Capability Solutions
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.capabilities.map((c) => (
                          <span
                            key={c}
                            className="border border-border bg-background px-2.5 py-0.5 font-mono-tech text-[10px] text-muted-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="font-mono-tech text-xs text-primary uppercase tracking-widest font-semibold hover:underline flex items-center gap-1.5"
                    >
                      <span>Inquire Sector Solutions →</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
