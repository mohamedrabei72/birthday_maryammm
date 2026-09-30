import { motion } from 'framer-motion'
// Pink envelope: click to open (flap rotates, letter slides up)
export default function Envelope({ open, onOpen, hint }) {
  return (
    <div className="env-wrap" onClick={onOpen} role="button" aria-label="Open letter">
      <motion.div className="env" animate={open ? { y: 30, opacity: 0, scale: 0.9 } : { y: [0, -6, 0] }}
        transition={open ? { duration: 0.6, delay: 0.5 } : { repeat: Infinity, duration: 2.4 }}>
        <motion.div className="paper" animate={{ y: open ? -70 : 0 }} transition={{ duration: 0.6, delay: 0.25 }} />
        <div className="env-front" />
        <motion.div className="flap" style={{ transformOrigin: 'top' }} animate={{ rotateX: open ? 180 : 0 }} transition={{ duration: 0.5 }} />
        <motion.div className="seal" animate={{ scale: open ? 0 : [1, 1.15, 1] }} transition={open ? {} : { repeat: Infinity, duration: 1.4 }}>❤</motion.div>
      </motion.div>
      {!open && <p className="tap">{hint}</p>}
    </div>
  )
}
