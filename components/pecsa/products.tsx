'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Landmark, Receipt, Users } from 'lucide-react'
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
    capabilitiesHeading: 'Core Product Capabilities',
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
    id: 'digital-gram-panchayat',
    name: 'Digital Gram Panchayat',
    badge: 'E-GOVERNANCE SOLUTIONS',
    icon: Landmark,
    tagline: 'BRINGING RURAL GOVERNANCE ONLINE',
    image: '/images/panchayat-portal.svg',
    imageAlt: 'Digital Gram Panchayat official portal interface preview showing public notices, welfare schemes, and citizen accessibility (Illustrative Demo)',
    url: 'panchayat.demo.pecsa.in (Illustrative Interface)',
    previewTag: 'ILLUSTRATIVE DEMO',
    purpose:
      'A digital platform designed to help Gram Panchayats establish their official online presence, publish important information, showcase village development activities and improve accessibility for citizens.',
    audience:
      'Gram Panchayat offices, Sarpanch, Gram Sevaks, local administrative authorities and rural citizens.',
    achievement: '15+ Gram Panchayat websites created.',
    capabilitiesHeading: 'Digital Platform Capabilities',
    features: [
      'Dedicated official Gram Panchayat websites',
      'Village profile and administrative information',
      'Public notices, announcements and circulars',
      'Government schemes and development activities',
      'Important contacts and office information',
      'Mobile-responsive citizen information access',
      'Social media integration and SEO-friendly structure',
    ],
    ctaText: 'Discuss a Digital Gram Panchayat Website',
    ctaHref: '/contact?interest=Software%20Development',
  },
  {
    id: 'gram-panchayat-tax-system',
    name: 'Gram Panchayat Tax System',
    badge: 'CUSTOM GOVERNANCE SOFTWARE',
    statusBadge: 'UNDER DEVELOPMENT',
    icon: Receipt,
    tagline: 'SIMPLIFYING TAX ADMINISTRATION THROUGH TECHNOLOGY',
    image: '/images/tax-system-preview.svg',
    imageAlt: 'Gram Panchayat Tax Management System administrative interface preview showing taxpayer records, demand register, and collections (Demo Data)',
    url: 'tax-preview.pecsa.in (Under Development — Demo Data)',
    previewTag: 'UNDER DEVELOPMENT // DEMO DATA',
    purpose:
      'A customized digital tax management platform designed to help Gram Panchayats manage property records, taxpayer information, tax assessments, payment collections and administrative reports through a centralized system.',
    audience:
      'Gram Panchayat administrators, Gram Sevaks, tax collection staff, Sarpanch and local administrative teams.',
    statusNote:
      'Under active development. Requirements have been gathered from and are being shaped with 5+ Gram Panchayats. The final modules and workflows are being customized to their administrative requirements prior to rollout.',
    capabilitiesHeading: 'Planned Product Capabilities (Under Development)',
    features: [
      'Digital property and taxpayer registration',
      'Property-wise tax records and management',
      'Tax assessment and calculation',
      'Annual tax demand management',
      'Tax collection and payment tracking',
      'Digital tax receipt generation',
      'Outstanding tax and pending payment reports',
      'Year-wise collection analytics and dashboards',
      'Historical transaction and record management',
    ],
    ctaText: 'Request a Product Discussion',
    ctaHref: '/contact?interest=Software%20Development',
  },
]

export function Products() {
  const PREVIEW_PRODUCTS = [
    {
      id: 'auditool',
      name: 'Auditool',
      badge: 'ENTERPRISE SAAS',
      icon: ShieldCheck,
      shortDescription:
        'Cloud-based safety audit compliance, digital inspection reporting, and documentation tracking.',
    },
    {
      id: 'digital-gram-panchayat',
      name: 'Digital Gram Panchayat',
      badge: 'E-GOVERNANCE',
      icon: Landmark,
      shortDescription:
        'Official online presence, statutory public notices, village development activities, and citizen accessibility.',
    },
    {
      id: 'gram-panchayat-tax-system',
      name: 'Gram Panchayat Tax System',
      badge: 'GOVERNANCE SOFTWARE',
      statusBadge: 'UNDER DEVELOPMENT',
      icon: Receipt,
      shortDescription:
        'Centralized digital platform for property records, taxpayer assessments, and payment tracking.',
    },
  ]

  return (
    <Section id="products" index="05" eyebrow="Our Products">
      <div className="space-y-8 sm:space-y-10">
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
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground break-words">
                Our Products.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground font-light">
                Alongside custom engineering services, PECSA develops proprietary platforms designed to solve acute operational challenges.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs shrink-0 w-full sm:w-auto text-center"
            >
              <span>Explore Products Catalogue</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>

        {/* 3-Card Responsive Grid Preview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_PRODUCTS.map((prod, idx) => {
            const Icon = prod.icon
            return (
              <Reveal key={prod.id} delay={0.08 * idx}>
                <div className="border border-border bg-card p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between hover:border-primary/60 transition-all shadow-xs group">
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                          {prod.badge}
                        </span>
                        {prod.statusBadge && (
                          <span className="rounded border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-mono-tech uppercase tracking-wider text-amber-600 font-bold">
                            {prod.statusBadge}
                          </span>
                        )}
                      </div>
                      <span className="font-mono-tech text-xs text-muted-foreground">
                        0{idx + 1} // PRODUCT
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif-editorial text-2xl font-normal text-foreground break-words">
                          {prod.name}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light mb-6">
                      {prod.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/products"
                      className="font-mono-tech text-xs text-primary uppercase tracking-widest font-semibold hover:underline flex items-center gap-1.5"
                    >
                      <span>Explore on Products Page</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
              These platforms represent reusable, actively developed software products engineered by PECSA IT Solutions. Each product addresses statutory compliance, e-governance, or rural public administration with direct, ongoing technical support.
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
                    <div className="flex items-center gap-2">
                      {p.statusBadge && (
                        <span className="rounded border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono-tech text-[9px] uppercase tracking-wider text-amber-600 font-bold">
                          {p.statusBadge}
                        </span>
                      )}
                      <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                        PROPRIETARY PRODUCT // 0{i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start p-4 sm:p-6 md:p-10">
                    <div className="relative group">
                      <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-md">
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover object-top"
                        />
                        {p.previewTag && (
                          <div className="absolute top-2.5 right-2.5 z-10 rounded border border-border/80 bg-background/95 px-2 py-1 backdrop-blur-xs font-mono-tech text-[9px] uppercase tracking-wider text-muted-foreground font-semibold shadow-xs">
                            {p.previewTag}
                          </div>
                        )}
                      </div>
                      <div className="mt-2 text-right">
                        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                          {p.statusBadge
                            ? 'UNDER DEVELOPMENT // DEMO DATA'
                            : p.id === 'digital-gram-panchayat'
                            ? '15+ WEBSITES CREATED // DEMO PREVIEW'
                            : 'PRODUCT OVERVIEW'}{' '}
                          // {p.name}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="flex h-6 w-6 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold">
                            {p.badge}
                          </span>
                          {p.statusBadge && (
                            <span className="rounded border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono-tech text-[10px] uppercase tracking-wider text-amber-600 font-bold">
                              {p.statusBadge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground break-words">
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

                      {/* Achievement Badge (Digital Gram Panchayat) */}
                      {p.achievement && (
                        <div className="border border-primary/30 bg-primary/5 p-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center border border-primary/40 bg-primary/10 text-primary shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <div>
                            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold block mb-0.5">
                              PROJECT ACHIEVEMENT
                            </span>
                            <span className="font-sans text-xs text-foreground font-medium">
                              {p.achievement}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Development Status Note (Gram Panchayat Tax System) */}
                      {p.statusNote && (
                        <div className="border border-amber-500/30 bg-amber-500/5 p-4 flex items-start gap-3">
                          <span className="flex h-8 w-8 items-center justify-center border border-amber-500/40 bg-amber-500/10 text-amber-600 shrink-0 mt-0.5">
                            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                          </span>
                          <div>
                            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-amber-600 font-bold block mb-1">
                              DEVELOPMENT STATUS // ACTIVE PILOT
                            </span>
                            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                              {p.statusNote}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Product Capabilities (Verified or Planned) */}
                      <div>
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-3">
                          {p.capabilitiesHeading || 'Core Product Capabilities'}
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
                          className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-xs w-full sm:w-auto text-center"
                        >
                          <span>{p.ctaText}</span>
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
        <div className="border border-border bg-card/60 p-5 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              CUSTOM ENGINEERING CAPABILITIES
            </span>
            <h4 className="font-serif-editorial text-xl sm:text-2xl font-normal text-foreground break-words">
              Need a Custom System Built for Your Specific Operations?
            </h4>
            <p className="mt-2 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In addition to our proprietary platforms, we build tailored software, AI systems, automation pipelines, and IoT solutions adapted directly to your business workflows.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shrink-0 shadow-2xs w-full sm:w-auto text-center"
          >
            <span>Explore Custom Services</span>
            <ArrowRight className="h-3.5 w-3.5 text-primary" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
