import { motion } from 'framer-motion'
import Page from './Page.jsx'
import { content } from '../data/content.js'

export default function TwentyOne({ onBack }) {
  return (
    <Page title={content.twentyOne.title} onBack={onBack}>
      <div className="grid">
        {content.images.memories.map((m, i) => (
          <motion.figure key={i} className="photo" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.12 }} whileTap={{ scale: 0.96, rotate: i % 2 ? 1 : -1 }}>
            {/* 📸 Replace files in /public/images (or edit paths in content.js) */}
            <img src={m.src} alt={m.caption || 'memory'} loading="lazy" />
            {m.caption && <figcaption>{m.caption}</figcaption>}
          </motion.figure>
        ))}
      </div>
    </Page>
  )
}
