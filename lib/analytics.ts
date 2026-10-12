import { track } from '@vercel/analytics'

export function trackEvent(name: string, properties?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined') {
    try {
      track(name, properties)
    } catch {
      // Graceful fallback if analytics is uninitialized or blocked
    }
  }
}
