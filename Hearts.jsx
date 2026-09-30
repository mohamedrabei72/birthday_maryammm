import { motion } from 'framer-motion'
const items = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37) % 100, size: 12 + ((i * 7) % 16), delay: (i * 0.9) % 8, dur: 9 + (i % 5) * 2, ch: ['❤', '✦', '♡', '✧'][i % 4],
}))
// Decorative floating hearts & sparkles behind everything
export default function Hearts() {
  return (
    <div className="hearts" aria-hidden>
      {items.map((h, i) => (
        <motion.span key={i} style={{ left: h.left + '%', fontSize: h.size }}
          initial={{ y: '105vh', opacity: 0 }} animate={{ y: '-10vh', opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: h.dur, delay: h.delay, repeat: Infinity, ease: 'linear' }}>{h.ch}</motion.span>
      ))}
    </div>
  )
}
