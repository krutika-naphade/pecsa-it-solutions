'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Bot, Boxes, Cpu, Network, Radio, Workflow } from 'lucide-react'

const ORBIT_NODES = [
  { icon: Cpu, label: 'AI', radius: 132, angle: -20, size: 44 },
  { icon: Workflow, label: 'Automation', radius: 132, angle: 60, size: 44 },
  { icon: Network, label: 'IoT', radius: 132, angle: 150, size: 44 },
  { icon: Bot, label: 'Robotics', radius: 208, angle: 25, size: 40 },
  { icon: Boxes, label: 'Software', radius: 208, angle: 130, size: 40 },
  { icon: Radio, label: 'Digital', radius: 208, angle: 235, size: 40 },
]

/* Center + two rotating orbits with icon nodes and animated data paths */
export function OrbitalSystem() {
  const reduce = useReducedMotion()
  const size = 480
  const c = size / 2

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      aria-hidden="true"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* concentric SVG rings + data paths */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.72 0.17 240)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.72 0.17 240)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.17 240)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.72 0.17 240)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {[132, 208].map((r) => (
          <circle
            key={r}
            cx={c}
            cy={c}
            r={r}
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth="1"
          />
        ))}
        <circle cx={c} cy={c} r={70} fill="url(#coreGlow)" />

        {/* animated connective spokes */}
        <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
          {ORBIT_NODES.slice(0, 3).map((n) => {
            const rad = (n.angle * Math.PI) / 180
            return (
              <line
                key={n.label}
                x1={c}
                y1={c}
                x2={c + Math.cos(rad) * n.radius}
                y2={c + Math.sin(rad) * n.radius}
                stroke="oklch(0.72 0.17 240)"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
            )
          })}
        </g>

        <circle
          cx={c}
          cy={c}
          r={168}
          fill="none"
          stroke="oklch(0.72 0.17 240)"
          strokeOpacity="0.35"
          className="animate-dash"
        />
      </svg>

      {/* Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="glow-ring flex h-24 w-24 items-center justify-center rounded-2xl bg-card/80 backdrop-blur">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
            <span className="font-display text-lg font-bold text-primary">
              PECSA
            </span>
          </div>
        </div>
      </motion.div>

      {/* Orbit layer 1 (inner) */}
      <div
        className={reduce ? '' : 'animate-spin-slow'}
        style={{ position: 'absolute', inset: 0, transformOrigin: 'center' }}
      >
        {ORBIT_NODES.slice(0, 3).map((n, i) => (
          <OrbitNode key={n.label} node={n} counterSpin={!reduce} delay={i * 0.15} />
        ))}
      </div>

      {/* Orbit layer 2 (outer, reverse) */}
      <div
        className={reduce ? '' : 'animate-spin-reverse'}
        style={{ position: 'absolute', inset: 0, transformOrigin: 'center' }}
      >
        {ORBIT_NODES.slice(3).map((n, i) => (
          <OrbitNode
            key={n.label}
            node={n}
            counterSpin={!reduce}
            reverse
            delay={i * 0.15 + 0.3}
          />
        ))}
      </div>
    </div>
  )
}

function OrbitNode({
  node,
  counterSpin,
  reverse,
  delay,
}: {
  node: (typeof ORBIT_NODES)[number]
  counterSpin: boolean
  reverse?: boolean
  delay: number
}) {
  const Icon = node.icon
  const rad = (node.angle * Math.PI) / 180
  const x = Math.cos(rad) * node.radius
  const y = Math.sin(rad) * node.radius
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay, duration: 0.6, ease: 'backOut' }}
    >
      <div
        className={counterSpin ? (reverse ? 'animate-spin-slow' : 'animate-spin-reverse') : ''}
        style={{ transformOrigin: 'center' }}
      >
        <div
          className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ width: node.size + 40 }}
        >
          <div
            className="flex items-center justify-center rounded-xl border border-border bg-card/90 text-primary shadow-lg backdrop-blur"
            style={{ width: node.size, height: node.size }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
            {node.label}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
