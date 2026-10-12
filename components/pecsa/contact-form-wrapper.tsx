'use client'

import { useSearchParams } from 'next/navigation'
import { Connect } from './connect'

export function ContactFormWrapper() {
  const searchParams = useSearchParams()
  const interestParam = searchParams.get('interest') || undefined

  return <Connect initialInterest={interestParam} />
}
