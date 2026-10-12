'use client'

import { AnimatePresence, motion } from 'motion/react'
import { SlidersHorizontal, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const PAGE_SECTIONS = [
  { label: 'HOME', href: '/', code: '01' },
  { label: 'ABOUT', href: '/about', code: '02' },
  { label: 'SOLUTIONS', href: '/solutions', code: '03' },
  { label: 'FOR ARCHITECTS', href: '/for-architects/philosophy', code: '03A' },
  { label: 'SERVICES', href: '/services', code: '04' },
  { label: 'PRODUCTS', href: '/products', code: '05' },
  { label: 'INDUSTRIES', href: '/industries', code: '06' },
  { label: 'PROJECTS', href: '/projects', code: '07' },
  { label: 'CONTACT', href: '/contact', code: '08' },
]

export function SideNav() {
  const [open, setOpen] = useState(false)

  // Close side nav when clicking backdrop or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleToggle = () => setOpen((prev) => !prev)
    const handleClose = () => setOpen(false)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('pecsa:toggle-directory', handleToggle)
    window.addEventListener('pecsa:close-directory', handleClose)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('pecsa:toggle-directory', handleToggle)
      window.removeEventListener('pecsa:close-directory', handleClose)
    }
  }, [])

  return (
    <aside aria-label="Off-navbar section directory">
      {/* Global Viewport-Fixed Side Drawer Popover Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[105] bg-black/40 backdrop-blur-xs"
            />

            {/* Slide-Over Drawer Popover */}
            <motion.div
              initial={{ opacity: 0, y: -10, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -10, x: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-4 sm:right-8 top-18 sm:top-20 z-[110] w-72 sm:w-80 rounded-2xl border border-border/80 bg-[#faf6ee]/98 dark:bg-[#1f1815]/98 backdrop-blur-xl p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-sage font-bold">
                  PAGE DIRECTORY
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close directory"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ul className="flex flex-col gap-2.5 font-sans">
                {PAGE_SECTIONS.map((sec) => (
                  <li key={sec.href}>
                    <Link
                      href={sec.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-border/60 pb-2 text-sm font-serif-editorial text-foreground hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{sec.label}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </span>
                      <span className="font-mono-tech text-xs text-muted-foreground group-hover:text-primary">
                        {sec.code}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>PECSA IT SOLUTIONS</span>
                <span>DIRECT ACCESS</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </aside>
  )
}
