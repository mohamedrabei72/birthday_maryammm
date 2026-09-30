import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
// Shared sheet used by Profile / Twenty-one / Read me
export default function Page({ title, onBack, children }) {
  return (
    <motion.div className="sheet-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="sheet" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}>
        <div className="sheet-head">
          <button className="back" onClick={onBack} aria-label="Back"><ArrowLeft size={20} /></button>
          <h2>{title}</h2>
        </div>
        <div className="sheet-body">{children}</div>
      </motion.div>
    </motion.div>
  )
}
