'use client'

import { ArrowUpRight } from 'lucide-react'

const NAV_COL_1 = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Products', href: '#products' },
  { label: 'How We Work', href: '#how-we-work' },
]

const NAV_COL_2 = [
  { label: 'Verticals', href: '#verticals' },
  { label: 'Why PECSA', href: '#why-pecsa' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technology', href: '#tech-stack' },
  { label: 'Build With Us', href: '#build-with-us' },
  { label: 'Connect', href: '#connect' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#211a17] text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 font-mono-tech text-xl font-bold tracking-widest text-foreground">
              <span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-card text-sm font-bold text-white">
                P
              </span>
              PECSA <span className="text-primary font-normal">// IT</span>
            </a>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
              Technology that solves real business problems. We design and build practical systems across software, AI, automation, IoT and robotics.
            </p>
            <div className="mt-8">
              <a
                href="#connect"
                className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-6">
              Navigation Directory
            </span>
            <ul className="space-y-3 font-sans text-sm">
              {NAV_COL_1.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-6">
              Capabilities & Connect
            </span>
            <ul className="space-y-3 font-sans text-sm">
              {NAV_COL_2.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row font-mono-tech">
          <p>© {new Date().getFullYear()} PECSA IT SOLUTIONS. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 text-foreground">Engineering what’s next.</p>
        </div>
      </div>
    </footer>
  )
}
