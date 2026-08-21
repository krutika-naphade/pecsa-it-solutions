'use client'

import { Reveal } from './primitives'

const LINKS = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Products', href: '#products' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Verticals', href: '#verticals' },
  { label: 'Why PECSA', href: '#why-pecsa' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technology', href: '#tech-stack' },
  { label: 'Build With Us', href: '#build-with-us' },
  { label: 'Connect', href: '#connect' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 font-display text-sm font-bold text-primary">
                  P
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  PECSA IT SOLUTIONS
                </span>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Technology that solves real business problems. We design and
                build practical systems across software, AI, automation, IoT and
                robotics.
              </p>
              <a
                href="#connect"
                className="mt-6 inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Start a Project
              </a>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} PECSA IT SOLUTIONS. All rights reserved.</p>
          <p className="text-foreground/70">Engineering what&apos;s next.</p>
        </div>
      </div>
    </footer>
  )
}
