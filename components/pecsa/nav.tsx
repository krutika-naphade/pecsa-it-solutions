'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowUpRight, Sun, Moon, ChevronDown, SlidersHorizontal } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SubLink = {
  label: string
  href: string
  desc: string
  badge?: string
}

type NavItem = {
  label: string
  href: string
  children?: SubLink[]
}

const LINKS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  {
    label: 'SOLUTIONS',
    href: '/solutions',
    children: [
      {
        label: 'Solutions Overview',
        href: '/solutions',
        desc: 'Core capabilities, AI, IoT & platforms',
      },
      {
        label: 'For Architects',
        href: '/for-architects/philosophy',
        desc: 'Built Around Your Philosophy — Portfolios',
        badge: 'SPECIALIZED',
      },
    ],
  },
  { label: 'SERVICES', href: '/services' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'CONTACT', href: '/contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = (localStorage.getItem('pecsa-theme') as 'dark' | 'light') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('pecsa-theme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close solutions dropdown when route changes
  useEffect(() => {
    setSolutionsMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-3 sm:top-4 md:top-5 z-50 px-4 sm:px-6 lg:px-8 xl:px-10 pointer-events-none">
      <div className="mx-auto max-w-7xl pointer-events-auto">
        <div
          className={`relative rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-[#faf6ee]/95 dark:bg-[#1f1815]/95 border-[rgba(28,22,20,0.12)] dark:border-[rgba(245,237,224,0.15)] shadow-[0_8px_30px_rgba(40,30,20,0.08),0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] backdrop-blur-md py-2.5 px-4 sm:px-6'
              : 'bg-[#faf6ee]/85 dark:bg-[#1f1815]/85 border-[rgba(28,22,20,0.08)] dark:border-[rgba(245,237,224,0.12)] shadow-[0_4px_20px_-4px_rgba(40,30,20,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md py-3 px-4 sm:px-6'
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
            <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
              {LINKS.map((l) => {
                const isActive = pathname === l.href
                const isChildActive = l.children?.some((c) => pathname === c.href)

                if (l.children) {
                  return (
                    <li
                      key={l.href}
                      className="relative"
                      onMouseEnter={() => setSolutionsMenuOpen(true)}
                      onMouseLeave={() => setSolutionsMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Link
                          href={l.href}
                          className={`relative group flex items-center gap-1 text-[11px] xl:text-xs font-mono-tech uppercase tracking-widest transition-colors py-1 ${
                            isActive || isChildActive
                              ? 'text-primary font-semibold'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                          aria-expanded={solutionsMenuOpen}
                          aria-haspopup="true"
                        >
                          <span>{l.label}</span>
                          <ChevronDown
                            className={`h-3 w-3 transition-transform duration-200 ${
                              solutionsMenuOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                              isActive || isChildActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                          />
                        </Link>
                      </div>

                      <AnimatePresence>
                        {solutionsMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.98 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            className="absolute left-0 top-full pt-2 z-50 w-72"
                          >
                            <div className="rounded-xl border border-border/80 bg-card/95 backdrop-blur-md p-2 shadow-2xl">
                              <div className="px-3 py-1.5 border-b border-border/60 flex items-center justify-between mb-1">
                                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
                                  Solutions Directory
                                </span>
                                <span className="font-mono-tech text-[9px] text-primary font-semibold">
                                  PECSA // CORE
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                {l.children.map((sub) => {
                                  const isSubActive = pathname === sub.href
                                  return (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={() => setSolutionsMenuOpen(false)}
                                      className={`group flex flex-col p-2.5 rounded-lg transition-colors border-l-2 ${
                                        isSubActive
                                          ? 'border-primary bg-primary/10'
                                          : 'border-transparent hover:border-primary hover:bg-background/80'
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span
                                          className={`text-xs font-mono-tech uppercase tracking-wider font-semibold ${
                                            isSubActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
                                          }`}
                                        >
                                          {sub.label}
                                        </span>
                                        {sub.badge && (
                                          <span className="rounded border border-primary/40 bg-primary/15 px-1.5 py-0.5 text-[9px] font-mono-tech text-primary uppercase tracking-widest font-bold">
                                            {sub.badge}
                                          </span>
                                        )}
                                      </div>
                                      <span className="mt-0.5 text-[11px] text-muted-foreground font-sans line-clamp-1">
                                        {sub.desc}
                                      </span>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                }

                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`relative group text-[11px] xl:text-xs font-mono-tech uppercase tracking-widest transition-colors ${
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

            {/* Action Group: Theme Toggle, CTA, Menu/Settings Control, Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
                title={`Switch to ${theme === 'dark' ? 'Light Modern' : 'Dark Espresso'} Theme`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* Start a Project CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-primary bg-primary px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-widest text-white font-semibold transition-all hover:bg-primary/90 shadow-2xs"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              {/* Menu / Settings Directory Control */}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('pecsa:toggle-directory'))}
                className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
                title="Page Directory & Quick Navigation"
                aria-label="Toggle section directory"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground hover:border-primary lg:hidden cursor-pointer"
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
              className="mt-2 rounded-2xl border border-border/80 bg-[#faf6ee]/98 dark:bg-[#1f1815]/98 backdrop-blur-xl p-5 shadow-2xl lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
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
                    const isChildActive = l.children?.some((c) => pathname === c.href)

                    return (
                      <li key={l.href} className="flex flex-col">
                        <div className="flex items-center justify-between border-b border-border/40 pb-2">
                          <Link
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className={`font-serif-editorial text-xl transition-colors ${
                              isActive || isChildActive
                                ? 'text-primary font-medium'
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            <span>{l.label}</span>
                          </Link>
                          <span className="font-mono-tech text-xs text-muted-foreground">
                            0{i + 1}
                          </span>
                        </div>

                        {l.children && (
                          <ul className="mt-2 ml-3 flex flex-col gap-1.5 border-l-2 border-primary/30 pl-3 pb-1">
                            {l.children.map((sub) => {
                              const isSubActive = pathname === sub.href
                              return (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className={`group flex items-center justify-between py-1 font-mono-tech text-xs uppercase tracking-wider transition-colors ${
                                      isSubActive
                                        ? 'text-primary font-bold'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                      <span>{sub.label}</span>
                                    </span>
                                    {sub.badge && (
                                      <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[9px] text-primary font-bold">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center justify-between w-full rounded-lg border border-border/80 bg-card/70 px-4 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-foreground cursor-pointer"
                  >
                    <span>Theme: {theme === 'dark' ? 'Dark Espresso' : 'Light Modern'}</span>
                    {theme === 'dark' ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />}
                  </button>
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
