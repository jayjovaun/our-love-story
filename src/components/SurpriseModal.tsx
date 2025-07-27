import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Sparkles } from 'lucide-react'
import { ThemeConfig } from '../App'

interface SurpriseModalProps {
  isOpen: boolean
  onClose: () => void
  theme: ThemeConfig
}

const loveLetters = [
  {
    id: 1,
    title: "A Secret Message",
    content: "You clicked the bear three times! You're so curious and playful - one of the million reasons I fell in love with you. Every day with you feels like discovering a new surprise. 💕",
    emoji: "🐻"
  },
  {
    id: 2,
    title: "Hidden Love Note",
    content: "If you're reading this, it means you found one of my secret Easter eggs! Just like how I found you - unexpectedly perfect in every way. You make ordinary moments magical. ✨",
    emoji: "💌"
  },
  {
    id: 3,
    title: "For My Curious Love",
    content: "Your curiosity and wonder about everything, including clicking random things in our love story app, reminds me why I fall in love with you more each day. Never stop being amazingly you! 🌟",
    emoji: "🔍"
  }
]

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose, theme }) => {
  const [currentLetter, setCurrentLetter] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const nextLetter = () => {
    if (currentLetter < loveLetters.length - 1) {
      setCurrentLetter(currentLetter + 1)
    } else {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const letter = loveLetters[currentLetter]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Confetti Effect */}
            <AnimatePresence>
              {showConfetti && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl pointer-events-none"
                      initial={{ 
                        opacity: 1, 
                        y: -50, 
                        x: Math.random() * window.innerWidth,
                        rotate: 0 
                      }}
                      animate={{ 
                        opacity: 0, 
                        y: window.innerHeight + 100, 
                        rotate: 360 
                      }}
                      transition={{ 
                        duration: 3, 
                        delay: i * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      {['💕', '💖', '💝', '💞', '🌟', '✨', '🎉'][i % 7]}
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Modal */}
            <motion.div
              className={`${theme.card} rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden`}
              initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative hearts */}
              <div className="absolute -top-2 -right-2 text-pink-400 opacity-30">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  💕
                </motion.div>
              </div>
              <div className="absolute -bottom-2 -left-2 text-purple-400 opacity-30">
                <motion.div
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  💖
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-pink-100 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Content */}
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {letter.emoji}
                </motion.div>

                <motion.h3
                  className={`text-2xl font-romantic font-bold ${theme.text} mb-4`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {letter.title}
                </motion.h3>

                <motion.div
                  className={`${theme.text} opacity-90 leading-relaxed mb-6 text-lg`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {letter.content}
                </motion.div>

                {/* Action buttons */}
                <div className="flex gap-3 justify-center">
                  {currentLetter < loveLetters.length - 1 ? (
                    <motion.button
                      onClick={nextLetter}
                      className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Another Surprise!
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={nextLetter}
                      className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-4 h-4" />
                      Celebrate Our Love!
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={onClose}
                    className={`${theme.secondary} ${theme.text} px-6 py-3 rounded-full font-medium hover:opacity-80 transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Keep Exploring
                  </motion.button>
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {loveLetters.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index <= currentLetter ? 'bg-pink-400' : 'bg-gray-300'
                      }`}
                      animate={{ scale: index === currentLetter ? 1.2 : 1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SurpriseModal 