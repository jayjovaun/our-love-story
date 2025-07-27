import { useState } from 'react'
import { motion } from 'framer-motion'
import Timeline from './components/Timeline'
import MusicPlayer from './components/MusicPlayer'
import SurpriseModal from './components/SurpriseModal'
import FloatingHearts from './components/FloatingHearts'

export interface ThemeConfig {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  card: string
}

const theme: ThemeConfig = {
  name: 'Pastel Pink',
  primary: 'bg-gradient-to-br from-pink-200 to-purple-200',
  secondary: 'bg-pink-100',
  accent: 'bg-pink-500',
  background: 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100',
  text: 'text-pink-900',
  card: 'bg-white/80 backdrop-blur-sm border border-pink-200'
}

function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [easterEggCount, setEasterEggCount] = useState(0)

  const handleEasterEgg = () => {
    const newCount = easterEggCount + 1
    setEasterEggCount(newCount)
    
    if (newCount === 3) {
      setShowSurprise(true)
      setEasterEggCount(0)
    }
  }

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text} relative overflow-x-hidden transition-all duration-500 ease-in-out`}>
      {/* Floating background elements */}
      <FloatingHearts />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-float opacity-20">💕</div>
        <div className="absolute top-1/4 right-20 text-3xl animate-bounce-slow opacity-30">💖</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl animate-pulse-slow opacity-15">💝</div>
        <div className="absolute top-1/2 right-1/3 text-2xl animate-float opacity-25" style={{ animationDelay: '1s' }}>💞</div>
      </div>

      {/* Header */}
      <motion.header 
        className={`relative z-10 ${theme.card} p-6 shadow-xl transition-all duration-500 ease-in-out`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-4xl md:text-6xl font-romantic font-bold text-gradient">
              Jennie & Josh
            </h1>
            <p className={`text-lg ${theme.text} opacity-80 mt-2`}>
              A digital scrapbook of our beautiful journey together 💕
            </p>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <motion.button
              onClick={handleEasterEgg}
              className="text-2xl hover:scale-125 transition-transform duration-200"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              🐻
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        <Timeline theme={theme} />
      </main>

      {/* Fixed Elements */}
      <MusicPlayer theme={theme} />
      
      {/* Surprise Modal */}
      <SurpriseModal 
        isOpen={showSurprise} 
        onClose={() => setShowSurprise(false)}
        theme={theme}
      />
    </div>
  )
}

export default App 