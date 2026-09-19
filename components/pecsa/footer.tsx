'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const SOLUTIONS_LINKS = [
  { label: 'Software Development', href: '/services' },
  { label: 'AI Solutions', href: '/services' },
  { label: 'Automation', href: '/services' },
  { label: 'IoT Solutions', href: '/services' },
  { label: 'Robotics', href: '/services' },
  { label: 'Digital Solutions', href: '/services' },
]

const PRODUCTS_LINKS = [
  { label: 'Auditool', href: '/solutions' },
  { label: 'Society Management System', href: '/solutions' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#211a17] text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr_0.9fr]">
          {/* Brand & Intro */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-mono-tech text-xl font-bold tracking-widest text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-card text-sm font-bold text-white">
                P
              </span>
              PECSA <span className="text-primary font-normal">// IT</span>
            </Link>
            <p className="mt-4 font-serif-editorial text-xl font-normal text-foreground">
              PECSA IT Solutions
            </p>
            <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
              Technology That Solves Real Business Problems.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Directory */}
          <div>
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-5">
              Navigation
            </span>
            <ul className="space-y-2.5 font-sans text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities & Products */}
          <div>
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-5">
              Solutions & Products
            </span>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-muted-foreground mb-6">
              {SOLUTIONS_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-3">
              Products
            </span>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-muted-foreground">
              {PRODUCTS_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-5">
              Contact & Social
            </span>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-muted-foreground">
              <p className="text-foreground font-medium">Location:</p>
              <p>Nagpur, Maharashtra, India</p>

              <p className="text-foreground font-medium pt-2">Direct Contact:</p>
              <p>
                <a href="mailto:contact@pecsa.in" className="hover:text-primary transition-colors">
                  contact@pecsa.in
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 (0712) PECSA-IT
                </a>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-3">
                Social Media
              </span>
              <ul className="flex items-center gap-4 font-mono-tech text-xs">
                {SOCIAL_LINKS.map((soc) => (
                  <li key={soc.label}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {soc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row font-mono-tech">
          <p>© {new Date().getFullYear()} PECSA IT SOLUTIONS. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 text-foreground">Technology That Solves Real Business Problems.</p>
        </div>
      </div>
    </footer>
  )
}

