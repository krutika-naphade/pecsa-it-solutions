'use client'

import { AnimatePresence, motion } from 'motion/react'
import { SlidersHorizontal, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const PAGE_SECTIONS = [
  { label: 'HOME', href: '/', code: '01' },
  { label: 'ABOUT', href: '/about', code: '02' },
  { label: 'SOLUTIONS', href: '/solutions', code: '03' },
  { label: 'SERVICES', href: '/services', code: '04' },
  { label: 'INDUSTRIES', href: '/industries', code: '05' },
  { label: 'PROJECTS', href: '/projects', code: '06' },
  { label: 'CONTACT', href: '/contact', code: '07' },
]

export function SideNav() {
  const [open, setOpen] = useState(false)

  // Close side nav when clicking backdrop or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <aside aria-label="Off-navbar section directory">
      {/* Global Viewport-Fixed Indicator Button (Upper Right Edge, z-[100]) */}
      <div className="fixed right-6 top-5 sm:top-6 z-[100]">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="group flex h-11 w-11 items-center justify-center border border-white/20 bg-[#2b211d]/95 text-foreground backdrop-blur-md shadow-2xl transition-all hover:border-primary hover:bg-primary hover:text-white cursor-pointer"
          aria-label={open ? 'Close section directory' : 'Open off-navbar section directory'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <SlidersHorizontal className="h-4 w-4" />}
        </button>
      </div>

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
              className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-Over Drawer Popover */}
            <motion.div
              initial={{ opacity: 0, y: -10, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -10, x: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-6 top-20 z-[110] w-72 border border-white/15 bg-[#2b211d] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
                  PAGE DIRECTORY
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close directory"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ul className="flex flex-col gap-3 font-sans">
                {PAGE_SECTIONS.map((sec) => (
                  <li key={sec.href}>
                    <Link
                      href={sec.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/5 pb-2.5 text-sm font-serif-editorial text-foreground hover:text-primary transition-colors"
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

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider text-white/40">
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

