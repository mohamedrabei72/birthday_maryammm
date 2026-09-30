import { motion } from 'framer-motion'
import { User, Cake, Mail, Sparkles } from 'lucide-react'
import { content } from '../data/content.js'

const fade = (i) => ({ initial: { y: 28, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.1 + i * 0.12, type: 'spring', damping: 20 } })
export default function Home({ onOpen }) {
  const h = content.home
  const nav = [
    { id: 'profile', icon: <User size={28} />, label: h.buttons.profile },
    { id: 'twentyone', icon: <Cake size={28} />, label: h.buttons.twentyOne },
    { id: 'readme', icon: <Mail size={28} />, label: h.buttons.readMe },
  ]
  return (
    <div className="home">
      <motion.div className="banner" {...fade(0)}>
        <span>{h.title}</span>
        <motion.div className="bubble" animate={{ rotate: [0, 12, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }}><Sparkles size={18} /></motion.div>
      </motion.div>
      <motion.div className="dark" {...fade(1)}>
        <h2>{h.greeting}</h2>
        <p>{h.message}</p>
      </motion.div>
      <div className="nav">
        {nav.map((n, i) => (
          <motion.button key={n.id} className="nav-card" {...fade(i + 2)} whileHover={{ y: -4 }} whileTap={{ scale: 0.92 }} onClick={() => onOpen(n.id)}>
            <span className="ico">{n.icon}</span>
            <span className="lbl">{n.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
