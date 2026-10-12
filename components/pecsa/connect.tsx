'use client'

import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useState, useEffect, type FormEvent } from 'react'
import { Reveal, Section } from './primitives'

const INTERESTS = [
  'Architect Portfolio',
  'Software Development',
  'AI Solutions',
  'Automation',
  'IoT Solutions',
  'Robotics',
  'Digital Solutions',
  'Partnership',
  'Something else',
]

type Fields = {
  name: string
  email: string
  company: string
  interest: string
  message: string
}

const EMPTY: Fields = { name: '', email: '', company: '', interest: '', message: '' }

export function Connect({ initialInterest }: { initialInterest?: string }) {
  const [values, setValues] = useState<Fields>(() => ({
    ...EMPTY,
    interest: initialInterest || '',
  }))
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (initialInterest) {
      setValues((v) => ({ ...v, interest: initialInterest }))
    }
  }, [initialInterest])

  function set<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!values.name.trim()) next.name = 'Please provide your name.'
    if (!values.email.trim()) {
      next.email = 'Please provide an email address so our engineers can reply.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email format (e.g., name@company.com).'
    }
    if (!values.interest) next.interest = 'Please select the area closest to your business requirement.'
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = 'Please provide at least a short description of the business problem you are looking to solve.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (isSubmitting) return
    if (!validate()) return

    setIsSubmitting(true)
    try {
      // Direct client-side submission simulation with safeguard
      await new Promise((resolve) => setTimeout(resolve, 600))
      setSent(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  function reset() {
    setValues(EMPTY)
    setErrors({})
    setSent(false)
  }

  const fieldClass =
    'w-full border border-border bg-background px-4 py-3 text-foreground outline-none font-sans text-sm transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed'

  return (
    <Section id="connect" index="01" eyebrow="PROJECT INTAKE">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <Reveal>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] text-foreground">
              Direct Engineering <span className="text-primary italic">Intake.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground max-w-lg">
              Tell us what operational friction or technology goal you are trying to address.
              Our core engineering team will evaluate your requirements and respond with clear, objective technical direction.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 border-l-2 border-primary pl-6">
              {[
                'Direct review by core technical team.',
                'Honest, practical engineering direction.',
                'Transparent evaluation — if custom tech is not needed, we will say so.',
              ].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <p className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground font-medium">{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border border-border bg-card p-6 sm:p-10 shadow-lg">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                PROJECT INTAKE FORM
              </span>
              <span className="font-mono-tech text-xs text-muted-foreground font-medium">
                NAGPUR, INDIA
              </span>
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif-editorial text-3xl font-normal text-foreground">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
                    Thank you, {values.name.split(' ')[0] || 'there'}. We have logged your inquiry regarding{' '}
                    <strong className="text-foreground font-medium">{values.interest.toLowerCase()}</strong>. Our engineering team in Nagpur will evaluate your requirements and reply directly to{' '}
                    <strong className="text-foreground font-medium">{values.email}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-8 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer font-semibold shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-busy={isSubmitting}
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" id="intake-name" error={errors.name} required>
                      <input
                        id="intake-name"
                        className={fieldClass}
                        value={values.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'intake-name-error' : undefined}
                        disabled={isSubmitting}
                      />
                    </Field>
                    <Field label="Email" id="intake-email" error={errors.email} required>
                      <input
                        id="intake-email"
                        type="email"
                        className={fieldClass}
                        value={values.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'intake-email-error' : undefined}
                        disabled={isSubmitting}
                      />
                    </Field>
                  </div>

                  <Field label="Company" id="intake-company" hint="Optional">
                    <input
                      id="intake-company"
                      className={fieldClass}
                      value={values.company}
                      onChange={(e) => set('company', e.target.value)}
                      placeholder="Company or organisation"
                      autoComplete="organization"
                      disabled={isSubmitting}
                    />
                  </Field>

                  <Field label="Interest / Domain" id="intake-interest" error={errors.interest} required>
                    <select
                      id="intake-interest"
                      className={`${fieldClass} appearance-none`}
                      value={values.interest}
                      onChange={(e) => set('interest', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.interest}
                      aria-describedby={errors.interest ? 'intake-interest-error' : undefined}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select the technology domain
                      </option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i} className="bg-card text-foreground">
                          {i}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Problem / Requirement" id="intake-message" error={errors.message} required>
                    <textarea
                      id="intake-message"
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      value={values.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Describe the operational friction or system requirements you want to solve."
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'intake-message-error' : undefined}
                      disabled={isSubmitting}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-2 flex items-center justify-center gap-3 border border-primary bg-primary px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer font-semibold shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Evaluating & Submitting...' : 'Send Inquiry'}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({
  label,
  id,
  hint,
  error,
  required,
  children,
}: {
  label: string
  id: string
  hint?: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-center justify-between font-mono-tech text-xs uppercase tracking-wider text-foreground font-semibold">
        <span>
          {label}
          {required && <span className="text-primary ml-1" aria-hidden="true">*</span>}
        </span>
        {hint && <span className="text-[10px] text-muted-foreground font-normal">{hint}</span>}
      </label>
      {children}
      {error && (
        <motion.span
          id={`${id}-error`}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono-tech text-[11px] text-primary"
        >
          {error}
        </motion.span>
      )}
    </div>
  )
}
