import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { content } from '../data/content.js'

const keys = ['1','2','3','4','5','6','7','8','9']
export default function PasscodeScreen({ onUnlock }) {
  const [code, setCode] = useState('')
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState(false)
  const shake = useAnimation()
  const t = content.passcodeScreen
  const press = (d) => { if (!ok && code.length < 12) { setCode(code + d); setMsg('') } }
  const enter = async () => {
    if (code === content.passcode) { setOk(true); setMsg(t.success); setTimeout(onUnlock, 1100) }
    else { setMsg(t.error); setCode(''); await shake.start({ x: [0, -12, 12, -8, 8, 0], transition: { duration: 0.45 } }) }
  }
  return (
    <div className="center">
      <motion.div className="card lock" animate={shake} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
        <motion.div animate={ok ? { scale: [1, 1.04, 0.98], boxShadow: '0 0 0 12px rgba(255,45,111,.15)' } : {}}>
          <h1 className="lock-title">{t.title}</h1>
          <div className="lock-top">
            {/* 📸 Profile photo: replace /public/images/maryam-profile.jpg */}
            <img className="sq" src={content.images.profile} alt="" />
            <div className="dots">{code ? '•'.repeat(code.length) : <span className="ph">_ _ _ _ _</span>}</div>
          </div>
          <p className="hint">{t.hint}</p>
          <div className="pad">
            {keys.map((k) => <motion.button key={k} whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.06 }} className="key" onClick={() => press(k)}>{k}</motion.button>)}
            <motion.button whileTap={{ scale: 0.92 }} className="key wide" onClick={() => { setCode(''); setMsg('') }}>Clear</motion.button>
            <motion.button whileTap={{ scale: 0.88 }} className="key" onClick={() => press('0')}>0</motion.button>
            <motion.button whileTap={{ scale: 0.92 }} className="key wide go" onClick={enter}>Enter</motion.button>
          </div>
          <p className={'msg' + (ok ? ' good' : '')}>{msg}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
