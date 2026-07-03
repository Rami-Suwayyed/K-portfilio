'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-reveal wrapper (spec 010, US6). Fades + lifts content into view once.
 * Collapses to a static render under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
