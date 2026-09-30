import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PasscodeScreen from './components/PasscodeScreen.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import TwentyOne from './components/TwentyOne.jsx'
import ReadMe from './components/ReadMe.jsx'
import Hearts from './components/Hearts.jsx'

export default function App() {
  const [screen, setScreen] = useState('lock') // lock | home | profile | twentyone | readme
  const back = () => setScreen('home')
  return (
    <div className="app">
      <Hearts />
      <AnimatePresence mode="wait">
        <motion.div key={screen === 'lock' ? 'lock' : 'main'} className="layer"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          {screen === 'lock' ? <PasscodeScreen onUnlock={() => setScreen('home')} /> : <Home onOpen={setScreen} />}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {screen === 'profile' && <Profile key="p" onBack={back} />}
        {screen === 'twentyone' && <TwentyOne key="t" onBack={back} />}
        {screen === 'readme' && <ReadMe key="r" onBack={back} />}
      </AnimatePresence>
    </div>
  )
}
