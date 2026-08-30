'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

export function EngineeredObject({ activeIndex = 0 }: { activeIndex?: number }) {
  const [mounted, setMounted] = useState(false)

  // Real-time cursor tracking for subtle parallax tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  // 3D Perspective rotation transforms
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14])

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return <div className="h-[340px] w-full bg-transparent" />

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[420px] mx-auto perspective-1000">
      {/* Abstract Engineered Geometry Vector Composition */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{
          scale: 1 + activeIndex * 0.03,
          rotateZ: activeIndex * 18,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Layer 1: Outer Architectural Frame Plane */}
        <motion.div
          className="absolute inset-4 border border-black/15 bg-white/80"
          animate={{
            borderColor: activeIndex === 0 ? 'rgba(220, 38, 38, 0.7)' : 'rgba(22, 21, 25, 0.15)',
            rotateZ: activeIndex === 0 ? 0 : -8,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Layer 2: Offset Geometric Plane with Warm Amber Accent */}
        <motion.div
          className="absolute inset-10 border border-black/10 bg-[#faf8f5]/90"
          style={{ transform: 'translateZ(25px)' }}
          animate={{
            borderColor: activeIndex === 1 ? '#d97706' : 'rgba(22, 21, 25, 0.12)',
            scale: activeIndex === 1 ? 1.06 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Layer 3: Structural Vector Cross-Section Lines */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full pointer-events-none"
          style={{ transform: 'translateZ(45px)' }}
        >
          <motion.line
            x1="40"
            y1="40"
            x2="360"
            y2="360"
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeOpacity={activeIndex === 0 ? "0.85" : "0.25"}
            animate={{ strokeOpacity: activeIndex === 0 ? 0.85 : 0.25 }}
            transition={{ duration: 0.4 }}
          />
          <motion.line
            x1="360"
            y1="40"
            x2="40"
            y2="360"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeOpacity={activeIndex === 1 ? "0.85" : "0.25"}
            animate={{ strokeOpacity: activeIndex === 1 ? 0.85 : 0.25 }}
            transition={{ duration: 0.4 }}
          />

          {/* Fine Anchor Coordinates (No text labels) */}
          {[
            { cx: 40, cy: 40 },
            { cx: 360, cy: 40 },
            { cx: 360, cy: 360 },
            { cx: 40, cy: 360 },
          ].map((pt, i) => (
            <circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r="3.5"
              fill={i === activeIndex ? '#dc2626' : '#d97706'}
            />
          ))}
        </svg>

        {/* Core Focal Sculpture */}
        <motion.div
          className="relative z-10 border border-primary bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg"
          style={{ transform: 'translateZ(65px)' }}
          animate={{
            scale: activeIndex === 2 ? 1.08 : 1,
            borderColor: activeIndex === 2 ? '#d97706' : '#dc2626',
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-serif-editorial text-4xl text-foreground font-normal">
            PECSA
          </span>
          <span className="mt-1 font-mono-tech text-[10px] uppercase tracking-widest text-primary font-semibold">
            ENGINEERING STUDIO
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
