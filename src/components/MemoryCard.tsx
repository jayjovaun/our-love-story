import React from 'react'
import { motion } from 'framer-motion'
import { Memory } from '../data/memories'
import { ThemeConfig } from '../App'

interface MemoryCardProps {
  memory: Memory
  theme: ThemeConfig
  onClick?: () => void
}

const MemoryCard: React.FC<MemoryCardProps> = ({ memory, theme, onClick }) => {
  const getTypeColor = () => {
    return 'from-pink-400 to-rose-400'
  }

  return (
    <motion.div
      className={`${theme.card} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer max-w-md mx-auto`}
      whileHover={{ 
        scale: 1.02,
        y: -5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {/* Type badge */}
      <div className="flex items-center justify-between mb-6">
        <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getTypeColor()} capitalize`}>
          {memory.type}
        </span>
        <span className="text-3xl group-hover:animate-bounce">{memory.emoji}</span>
      </div>

      {/* Image */}
      <motion.div
        className="w-full h-64 rounded-xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={memory.image} 
          alt={memory.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">{memory.emoji}</div>
            <p className="text-sm text-gray-600 px-4">
              Image: {memory.image.split('/').pop()?.replace('.jpg', '')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className={`text-2xl font-romantic font-bold ${theme.text} mb-2 group-hover:text-pink-600 transition-colors`}>
            {memory.title}
          </h3>
          <p className={`text-sm ${theme.text} opacity-70 mb-3`}>
            {memory.date}
          </p>
        </div>
        
        <p className={`${theme.text} opacity-80 leading-relaxed text-base`}>
          {memory.description}
        </p>
        
        {memory.location && (
          <div className="flex items-center gap-2 text-sm opacity-60">
            <span>📍</span>
            <span>{memory.location}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default MemoryCard 