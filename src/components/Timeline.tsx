import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { memories, Memory } from '../data/memories'
import MemoryCard from './MemoryCard'
import MilestoneModal from './MilestoneModal'
import { ThemeConfig } from '../App'

interface TimelineProps {
  theme: ThemeConfig
}

const Timeline: React.FC<TimelineProps> = ({ theme }) => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMemory(null)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-romantic font-bold text-gradient mb-4">
            Our Journey Together
          </h2>
          <p className={`text-xl ${theme.text} opacity-80`}>
            Every moment is a page in our love story 📖
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 rounded-full"></div>

          {/* Memory entries */}
          <div className="space-y-16">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    className={`w-6 h-6 ${theme.accent} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-xs">{memory.emoji}</span>
                  </motion.div>
                </div>

                {/* Memory card */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <MemoryCard 
                    memory={memory} 
                    theme={theme} 
                    onClick={() => handleMemoryClick(memory)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* End of timeline decoration */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-6xl mb-4">💕</div>
          <p className={`text-lg ${theme.text} opacity-70 font-romantic`}>
            And this is just the beginning...
          </p>
        </motion.div>
      </div>

      {/* Milestone Modal */}
      <MilestoneModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        memory={selectedMemory}
        theme={theme}
      />
    </section>
  )
}

export default Timeline 