import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Page from './Page.jsx'
import { content } from '../data/content.js'

export default function Profile({ onBack }) {
  const p = content.profile
  return (
    <Page title={<>{p.title} <Heart size={16} fill="#FF2D6F" color="#FF2D6F" /></>} onBack={onBack}>
      <motion.img className="avatar" src={content.images.profile} alt="" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25, type: 'spring' }} />
      <motion.p className="txt" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>{p.text}</motion.p>
      <motion.p className="txt soft" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>{p.text2}</motion.p>
      <motion.div className="bigheart" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.6 }}>❤</motion.div>
    </Page>
  )
}
