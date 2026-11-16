'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string
  href: string
}

const LINKS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SOLUTIONS', href: '/solutions' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'ARCHITECTURE', href: '/architecture' },
  { label: 'CONTACT', href: '/contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    try {
      localStorage.removeItem('pecsa-theme')
    } catch {}
    document.documentElement.setAttribute('data-theme', 'light')
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-3 sm:top-4 md:top-5 z-50 px-4 sm:px-6 lg:px-8 xl:px-10 pointer-events-none">
      <div className="mx-auto max-w-7xl pointer-events-auto">
        <div
          className={`relative rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 border-[rgba(11,31,58,0.12)] shadow-[0_8px_30px_rgba(11,31,58,0.08),0_1px_3px_rgba(0,0,0,0.02)] backdrop-blur-md py-2.5 px-4 sm:px-6'
              : 'bg-white/90 border-[rgba(11,31,58,0.08)] shadow-[0_4px_20px_-4px_rgba(11,31,58,0.06)] backdrop-blur-md py-3 px-4 sm:px-6'
          }`}
        >
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Brand Logo */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="group flex items-center gap-2.5"
                aria-label="PECSA IT Solutions home"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border/80 bg-card text-xs font-mono-tech font-bold text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  P
                </span>
                <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-foreground">
                  PECSA <span className="text-primary font-normal">// IT</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center gap-3.5 xl:gap-5.5 lg:flex">
              {LINKS.map((l) => {
                const isActive = pathname === l.href

                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`relative group text-[11px] xl:text-xs font-mono-tech uppercase tracking-wider xl:tracking-widest transition-colors ${
                        isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Action Group: CTA & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Start a Project CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-primary bg-primary px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-widest text-white font-semibold transition-all hover:bg-primary/90 shadow-2xs"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground hover:border-primary lg:hidden cursor-pointer"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Dropdown Card */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mt-2 rounded-2xl border border-border/80 bg-white/98 backdrop-blur-xl p-5 shadow-2xl lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                    Navigation Directory
                  </span>
                  <span className="font-mono-tech text-[10px] text-muted-foreground uppercase tracking-widest">
                    Nagpur, India
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {LINKS.map((l, i) => {
                    const isActive = pathname === l.href

                    return (
                      <li key={l.href} className="flex flex-col">
                        <div className="border-b border-border/40 pb-2">
                          <Link
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className={`group flex items-baseline justify-between w-full transition-colors ${
                              isActive
                                ? 'text-primary font-medium'
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            <span className="font-serif-editorial text-xl">{l.label}</span>
                            <span
                              className={`font-mono-tech text-xs tabular-nums select-none transition-colors ${
                                isActive
                                  ? 'text-primary font-bold'
                                  : 'text-muted-foreground group-hover:text-primary'
                              }`}
                            >
                              0{i + 1}
                            </span>
                          </Link>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <div className="pt-2 flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-lg border border-primary bg-primary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white font-semibold shadow-xs"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
