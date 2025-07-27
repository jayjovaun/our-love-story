import React from 'react'
import { motion } from 'framer-motion'

const FloatingHearts: React.FC = () => {
  const hearts = ['💕', '💖', '💝', '💞', '🌸', '✨']
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {hearts[i % hearts.length]}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts 