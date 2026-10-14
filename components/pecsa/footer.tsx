'use client'

import { ArrowUpRight, MapPin } from 'lucide-react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About PECSA', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'For Architects', href: '/for-architects/philosophy' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

const SOLUTIONS_LINKS = [
  { label: 'Software Development', href: '/solutions' },
  { label: 'AI Solutions', href: '/solutions' },
  { label: 'Automation', href: '/solutions' },
  { label: 'IoT Solutions', href: '/solutions' },
  { label: 'Robotics', href: '/solutions' },
  { label: 'Digital Solutions', href: '/solutions' },
  { label: 'Architect Portfolios (Philosophy)', href: '/for-architects/philosophy' },
]

const PRODUCTS_LINKS = [
  { label: 'Auditool', href: '/products' },
  { label: 'Society Management System', href: '/products' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_0.9fr]">
          {/* Brand & Intro */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-mono-tech text-xl font-bold tracking-widest text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center border border-border bg-background text-sm font-bold text-foreground">
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
                className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-sm w-full sm:w-auto text-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Directory */}
          <div>
            <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-muted-sage block mb-4">
              Navigation
            </span>
            <ul className="space-y-2 font-sans text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities & Products */}
          <div>
            <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-muted-sage block mb-4">
              Services & Capabilities
            </span>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-muted-foreground mb-6">
              {SOLUTIONS_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-foreground transition-colors py-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-muted-sage block mb-3">
              Flagship Products
            </span>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-muted-foreground">
              {PRODUCTS_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-foreground transition-colors py-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-muted-sage block mb-4">
              Contact & Location
            </span>
            <div className="space-y-2.5 font-sans text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 text-foreground font-semibold">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Registered Office:</span>
              </div>
              <p>Nagpur, Maharashtra, India</p>

              <p className="text-foreground font-semibold pt-2">Direct Contact:</p>
              <p>
                <a href="mailto:contact@pecsa.in" className="hover:text-primary transition-colors">
                  contact@pecsa.in
                </a>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-muted-sage block mb-3">
                Social Channels
              </span>
              <ul className="flex items-center gap-4 font-mono-tech text-xs">
                {SOCIAL_LINKS.map((soc) => (
                  <li key={soc.label}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {soc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-start sm:items-center justify-between border-t border-border pt-6 sm:pt-8 text-xs text-muted-foreground sm:flex-row gap-4 font-mono-tech">
          <p>© {new Date().getFullYear()} PECSA IT SOLUTIONS. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="text-foreground font-medium">Technology That Solves Real Business Problems.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
