
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, MapPin, Heart } from 'lucide-react'
import { Memory } from '../data/memories'
import { ThemeConfig } from '../App'

interface MilestoneModalProps {
  isOpen: boolean
  onClose: () => void
  memory: Memory | null
  theme: ThemeConfig
}

const MilestoneModal: React.FC<MilestoneModalProps> = ({ memory, isOpen, onClose, theme }) => {
  const getTypeColor = () => {
    return 'from-pink-400 to-rose-400'
  }

  if (!memory) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-6 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r ${getTypeColor()} capitalize`}>
                      {memory?.type}
                    </span>
                    <span className="text-4xl">{memory?.emoji}</span>
                  </div>
                  
                  <h2 className={`text-4xl font-romantic font-bold ${theme.text} mb-4`}>
                    {memory?.title}
                  </h2>
                  
                  <div className="flex items-center gap-6 text-base opacity-70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{memory.date}</span>
                    </div>
                    {memory.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>{memory.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Letter Content */}
                <div className="mb-8">
                  <motion.div
                    className={`${theme.card} rounded-xl p-8 border-l-4 border-pink-400 shadow-lg`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Heart className="w-6 h-6 text-pink-500" />
                      <h4 className={`font-romantic font-bold ${theme.text} text-2xl`}>My Love Letter</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <p className={`${theme.text} opacity-90 leading-relaxed text-lg italic`}>
                        "{memory.description}"
                      </p>
                      
                      {memory.details && (
                        <div className="mt-6 pt-4 border-t border-pink-200">
                          <p className={`${theme.text} opacity-80 leading-relaxed text-base`}>
                            {memory.details}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-8 text-right">
                      <p className={`${theme.text} opacity-70 text-sm font-romantic`}>
                        With all my love,<br />
                        Forever yours 💕
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MilestoneModal 