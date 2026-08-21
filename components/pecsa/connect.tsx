'use client'

import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const INTERESTS = [
  'Software Development',
  'AI Solutions',
  'Automation',
  'IoT Solutions',
  'Robotics',
  'Digital Solutions',
  'Partnership',
  'Careers',
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

export function Connect() {
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  function set<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    if (!values.email.trim()) next.email = 'Please add an email so we can reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'That email address looks incomplete.'
    if (!values.interest) next.interest = 'Pick the area closest to your need.'
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = 'A sentence or two about your goal helps us reply well.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (validate()) setSent(true)
  }

  function reset() {
    setValues(EMPTY)
    setErrors({})
    setSent(false)
  }

  const fieldClass =
    'w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-1 focus:ring-primary/40'

  return (
    <Section id="connect" index="12" eyebrow="Let's Connect">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionTitle>
              Have a problem worth <span className="text-primary">solving?</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Tell us what you are trying to achieve. We will get back to you to
              explore whether — and how — technology can help. No obligation,
              just a genuine conversation about your goal.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4">
              {[
                'We read every message ourselves.',
                'We reply with honest, practical direction.',
                'If technology is not the answer, we will say so.',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-foreground/80">{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8">
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
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    Message received
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                    Thanks, {values.name.split(' ')[0] || 'there'}. We have your
                    note about {values.interest.toLowerCase()} and will get back
                    to you to explore how we can help.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-8 rounded-full border border-primary/50 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    Send another message
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
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" error={errors.name}>
                      <input
                        className={fieldClass}
                        value={values.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        className={fieldClass}
                        value={values.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  <Field label="Company" hint="Optional">
                    <input
                      className={fieldClass}
                      value={values.company}
                      onChange={(e) => set('company', e.target.value)}
                      placeholder="Company or organisation"
                      autoComplete="organization"
                    />
                  </Field>

                  <Field label="Interest" error={errors.interest}>
                    <select
                      className={`${fieldClass} appearance-none`}
                      value={values.interest}
                      onChange={(e) => set('interest', e.target.value)}
                    >
                      <option value="" disabled>
                        What is this about?
                      </option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i} className="bg-background">
                          {i}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      value={values.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Tell us what you are trying to achieve."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="glow-ring mt-1 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-100"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
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
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center justify-between text-sm font-medium text-foreground/90">
        {label}
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </span>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-destructive"
        >
          {error}
        </motion.span>
      )}
    </label>
  )
}
