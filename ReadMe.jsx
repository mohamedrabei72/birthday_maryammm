import { useState } from 'react'
import { motion } from 'framer-motion'
import Page from './Page.jsx'
import Envelope from './Envelope.jsx'
import { content } from '../data/content.js'

export default function ReadMe({ onBack }) {
  const [open, setOpen] = useState(false)
  const [letter, setLetter] = useState(false)
  const l = content.letter
  const go = () => { if (!open) { setOpen(true); setTimeout(() => setLetter(true), 900) } }
  return (
    <Page title={l.title} onBack={onBack}>
      {!letter ? <Envelope open={open} onOpen={go} hint={l.tapHint} /> : (
        <motion.div className="letter" initial={{ opacity: 0, y: 40, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', damping: 22 }}>
          {l.paragraphs.map((t, i) => <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.35 }}>{t}</motion.p>)}
          <motion.button className="close" whileTap={{ scale: 0.94 }} onClick={onBack}>{l.closeLabel}</motion.button>
        </motion.div>
      )}
    </Page>
  )
}
