'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Users } from 'lucide-react'
import { Reveal, Section } from './primitives'

export const PRODUCTS = [
  {
    id: 'auditool',
    name: 'Auditool',
    badge: 'FLAGSHIP ENTERPRISE SAAS',
    icon: ShieldCheck,
    tagline: 'Simplifying Safety Audits Through Technology',
    image: '/images/auditool-dashboard.jpg',
    imageAlt: 'Auditool cloud safety audit management dashboard showing compliance score, statutory inspection modules, and reports',
    url: 'https://auditool.pecsa.app/dashboard',
    purpose:
      'A cloud-based safety audit management platform designed to help safety auditors manage statutory audits, documentation, automated reports, clients, and compliance with total traceability.',
    audience:
      'Safety audit firms, industrial plant EHS managers, multi-facility compliance directors, and statutory inspection teams.',
    features: [
      'Digital audit workflows with instant photo & evidence capture',
      'Pre-configured statutory compliance checklists & automated PDF reports',
      'Real-time multi-site compliance scoring & status tracking',
      'Client, facility, and audit archive record management',
      'Centralized regulatory documentation & historical traceability',
      'Role-based auditor permissions & secure cloud accessibility',
    ],
    ctaText: 'Explore Auditool Platform',
    ctaHref: '/contact?interest=Software%20Development',
  },
  {
    id: 'society',
    name: 'Society Management System',
    badge: 'COMMUNITY & OPERATIONS PLATFORM',
    icon: Building2,
    tagline: 'Smarter Communities. Simpler Management.',
    image: '/images/society-dashboard.jpg',
    imageAlt: 'Society Management System dashboard showing visitor logs, gate security check-ins, and maintenance tickets',
    url: 'https://society.pecsa.app/portal',
    purpose:
      'A comprehensive digital platform connecting residents, committee administrators, gate security personnel, maintenance staff, and vendors within a unified operational hub.',
    audience:
      'Apartment owners associations (AOAs), gated residential societies, property management teams, and facility administrators.',
    features: [
      'Real-time visitor, delivery, and cab gate check-in logging',
      'Direct resident maintenance ticket submission & status tracking',
      'Broadcast resident communications, meeting circulars, and notices',
      'Amenity & clubhouse reservation management calendar',
      'Automated maintenance billing, dues tracking, and payment records',
      'Transparent digital administrative records for management committees',
    ],
    ctaText: 'Explore Society Management',
    ctaHref: '/contact?interest=Software%20Development',
  },
]

export function Products() {
  const [active, setActive] = useState(0)
  const p = PRODUCTS[active]
  const Icon = p.icon

  return (
    <Section id="products" index="05" eyebrow="Our Products">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                  PROPRIETARY SOFTWARE CATALOGUE
                </span>
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
                Technology We Build.{' '}
                <span className="text-primary italic">Products We Believe In.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground font-light">
                Alongside custom client engineering, PECSA develops and maintains proprietary software platforms built to solve acute operational inefficiencies.
              </p>
            </Reveal>
          </div>

          {/* Product Switcher Tabs */}
          <Reveal delay={0.15}>
            <div className="inline-flex border border-border bg-card p-1 shadow-2xs">
              {PRODUCTS.map((prod, idx) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`px-5 py-2.5 font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    active === idx
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {prod.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Active Product Showcase */}
        <Reveal delay={0.2}>
          <div className="border border-border bg-card shadow-lg overflow-hidden">
            {/* Software Window Header */}
            <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-2.5 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 hidden sm:inline-block font-mono-tech text-[11px] text-muted-foreground">
                  {p.url}
                </span>
              </div>
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                PECSA SOFTWARE PLATFORM
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start p-6 sm:p-8 md:p-10">
              {/* Left Column: UI Screenshot */}
              <div className="relative group">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-md">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono-tech text-muted-foreground">
                  <span>PRODUCTION UI INTERFACE</span>
                  <span className="text-primary font-semibold">{p.name} // CLOUD</span>
                </div>
              </div>

              {/* Right Column: Purpose, Audience & Verified Capabilities */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground">
                    {p.name}
                  </h3>
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-muted-sage font-semibold block mt-1">
                    {p.tagline}
                  </span>

                  <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {p.purpose}
                  </p>
                </div>

                {/* Target Audience Callout */}
                <div className="border border-border/80 bg-background/50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
                    <Users className="h-3.5 w-3.5" />
                    <span>Target Audience & Use Cases</span>
                  </div>
                  <p className="font-sans text-xs text-foreground/90 font-medium leading-relaxed">
                    {p.audience}
                  </p>
                </div>

                {/* Verified Features */}
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-2.5">
                    Verified Product Capabilities
                  </span>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {p.features.slice(0, 4).map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2 border border-border/80 bg-background/60 p-2.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-foreground/90 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={p.ctaHref}
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-xs"
                  >
                    <span>Request Product Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>View Product Catalogue →</span>
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

/* -------------------------------------------------------------------------- */
/* FULL PRODUCTS CATALOG (FOR /products PAGE)                                 */
/* -------------------------------------------------------------------------- */

export function FullProductsView() {
  return (
    <Section id="all-products" index="01" eyebrow="PROPRIETARY SOFTWARE CATALOGUE">
      <div className="space-y-16">
        <Reveal>
          <div className="border-l-2 border-primary pl-4 sm:pl-6 max-w-3xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              PECSA PRODUCT PORTFOLIO // WHAT WE OFFER
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-foreground">
              Proprietary Platforms Built to Solve Specific Operational Challenges
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
              These platforms represent reusable, actively developed software products engineered by PECSA IT Solutions. Each product addresses statutory compliance or community operations with direct, ongoing technical support.
            </p>
          </div>
        </Reveal>

        <div className="space-y-14">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.id} delay={i * 0.1}>
                <div className="border border-border bg-card shadow-sm overflow-hidden">
                  {/* Software Window Header */}
                  <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-2.5 sm:px-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                      <span className="ml-3 hidden sm:inline-block font-mono-tech text-[11px] text-muted-foreground">
                        {p.url}
                      </span>
                    </div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                      PROPRIETARY PRODUCT // 0{i + 1}
                    </span>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start p-6 sm:p-8 md:p-10">
                    <div className="relative group">
                      <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-md">
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="mt-2 text-right">
                        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                          PRODUCTION SAAS // {p.name}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex h-6 w-6 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                            {p.badge}
                          </span>
                        </div>
                        <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground">
                          {p.name}
                        </h3>
                        <span className="font-mono-tech text-xs uppercase tracking-wider text-muted-sage font-semibold block mt-1">
                          {p.tagline}
                        </span>
                        <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
                          {p.purpose}
                        </p>
                      </div>

                      {/* Target Audience */}
                      <div className="border border-border/80 bg-background/50 p-4">
                        <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
                          <Users className="h-3.5 w-3.5" />
                          <span>Primary Audience & Operations</span>
                        </div>
                        <p className="font-sans text-xs text-foreground/90 font-medium leading-relaxed">
                          {p.audience}
                        </p>
                      </div>

                      {/* Verified Core Capabilities */}
                      <div>
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-3">
                          Verified Product Capabilities
                        </span>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {p.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2 border border-border bg-background/60 p-2.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="font-sans text-xs text-foreground/90 font-medium">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Link
                          href={p.ctaHref}
                          className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-xs"
                        >
                          <span>Request Platform Demo</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Clear Notice on Products versus Custom Engineering */}
        <div className="border border-border bg-card/60 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              CUSTOM ENGINEERING CAPABILITIES
            </span>
            <h4 className="font-serif-editorial text-2xl font-normal text-foreground">
              Need a Custom System Built for Your Specific Operations?
            </h4>
            <p className="mt-2 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In addition to our proprietary platforms, we build tailored software, AI systems, automation pipelines, and IoT solutions adapted directly to your business workflows.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shrink-0 shadow-2xs"
          >
            <span>Explore Custom Services</span>
            <ArrowRight className="h-3.5 w-3.5 text-primary" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
