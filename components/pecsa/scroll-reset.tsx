'use client'

import { useEffect } from 'react'

export function ScrollReset() {
  useEffect(() => {
    // Disable browser scroll restoration so page refresh always starts at top
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // On fresh root load or refresh without hash anchor, reset scroll to top (HOME/HERO)
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [])

  return null
}
