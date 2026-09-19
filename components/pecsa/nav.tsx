'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SOLUTIONS', href: '/solutions' },
  { label: 'SERVICES', href: '/services' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'CONTACT', href: '/contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#211a17]/90 border-b border-white/10 backdrop-blur-md py-3.5'
            : 'bg-transparent border-b border-white/5 py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="PECSA IT Solutions home"
          >
            <span className="flex h-7 w-7 items-center justify-center border border-white/20 bg-card text-xs font-mono-tech font-bold text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              P
            </span>
            <span className="font-mono-tech text-sm font-semibold tracking-wider text-foreground">
              PECSA <span className="text-primary font-normal">// IT</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => {
              const isActive = pathname === l.href
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative group text-xs font-mono-tech uppercase tracking-widest transition-colors ${
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

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden items-center gap-2 border border-primary bg-primary px-5 py-2 text-xs font-mono-tech uppercase tracking-widest text-white transition-all hover:bg-primary/90 sm:inline-flex"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-card text-foreground hover:border-primary lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#211a17] border-t border-white/10 px-6 py-10 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 max-w-7xl mx-auto">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary">
                Navigation Directory
              </span>
              <ul className="flex flex-col gap-4">
                {LINKS.map((l, i) => {
                  const isActive = pathname === l.href
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between border-b border-white/10 pb-3 font-serif-editorial text-3xl transition-colors ${
                          isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="font-mono-tech text-xs text-muted-foreground group-hover:text-primary">
                          0{i + 1}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full border border-primary bg-primary px-6 py-4 font-mono-tech text-xs uppercase tracking-widest text-white font-semibold"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

