import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Music, SkipBack, SkipForward } from 'lucide-react'
import { ThemeConfig } from '../App'

interface MusicPlayerProps {
  theme: ThemeConfig
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ theme }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Songs list with your actual audio files
  const playlist = [
    {
      title: "Accidentally In Love",
      artist: "Counting Crows",
      src: "/audio/AccidentallyInLove.mp3",
    },
    {
      title: "Isn't She Lovely",
      artist: "Stevie Wonder",
      src: "/audio/IsntSheLovely.mp3.mp3",
    },
    {
      title: "Every Breath You Take",
      artist: "The Police",
      src: "/audio/EveryBreathyouTake.mp3.mp3",
    },
    {
      title: "Be With You",
      artist: "Artist",
      src: "/audio/BeWithYou.mp3.mp3",
    },
    {
      title: "Baliw",
      artist: "Artist",
      src: "/audio/Baliw.mp3.mp3",
    },
    {
      title: "Pasilyo",
      artist: "Artist",
      src: "/audio/Pasilyo.mp3.mp3",
    },
    {
      title: "Palagi",
      artist: "Artist",
      src: "/audio/Palagi.mp3.mp3",
    },
    {
      title: "Perhaps Love",
      artist: "Artist",
      src: "/audio/PerhapsLove.mp3.mp3",
    }
  ]

  const [currentTrackIndex, setCurrentTrackIndex] = useState(2) // Start with "Every Breath You Take" (index 2)
  const currentSong = playlist[currentTrackIndex]

  // Auto-play when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.src
      audioRef.current.load()
      
      // Attempt to autoplay
      const playPromise = audioRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            console.log('Autoplay started successfully')
          })
          .catch(error => {
            console.log('Autoplay prevented by browser:', error)
            // User will need to click play button to start
          })
      }
    }
  }, [currentTrackIndex])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    const handleAudioEnd = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      // Auto play next track
      nextTrack()
    }

    const handleLoadStart = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)

    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    audio.addEventListener('ended', handleAudioEnd)
    audio.addEventListener('loadstart', handleLoadStart)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
      audio.removeEventListener('ended', handleAudioEnd)
      audio.removeEventListener('loadstart', handleLoadStart)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [currentTrackIndex])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Error playing audio:', error)
          // Handle autoplay restrictions
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) setIsMuted(false)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (audio) {
      const newTime = parseFloat(e.target.value)
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextIndex)
    setIsPlaying(false)
  }

  const prevTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
    setIsPlaying(false)
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        preload="metadata"
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration)
          }
        }}
      />

      {/* Floating Music Player */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={`${theme.card} rounded-2xl p-4 mb-4 shadow-xl min-w-[320px] transition-all duration-500 ease-in-out`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Song Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${theme.text}`}>{currentSong.title}</h4>
                  <p className={`text-sm ${theme.text} opacity-70`}>{currentSong.artist}</p>
                </div>
                {isLoading && (
                  <div className="w-4 h-4 border-2 border-pink-400 border-t-transparent rounded-full animate-spin" />
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-2"
                  style={{
                    background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${progressPercentage}%, #e5e7eb ${progressPercentage}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs opacity-70">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={toggleMute}
                    className="p-2 hover:bg-pink-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </motion.button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${(isMuted ? 0 : volume) * 100}%, #e5e7eb ${(isMuted ? 0 : volume) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={prevTrack}
                    className="p-2 hover:bg-pink-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SkipBack className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </motion.button>

                  <motion.button
                    onClick={nextTrack}
                    className="p-2 hover:bg-pink-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SkipForward className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Playlist indicator */}
              <div className="flex justify-center gap-1">
                {playlist.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTrackIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTrackIndex ? 'bg-pink-400' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 ${theme.accent} text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            rotate: isPlaying ? 360 : 0,
            scale: isPlaying ? [1, 1.05, 1] : 1
          }}
          transition={{ 
            rotate: { duration: 4, repeat: isPlaying ? Infinity : 0, ease: "linear" },
            scale: { duration: 1, repeat: isPlaying ? Infinity : 0 }
          }}
        >
          <Music className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </>
  )
}

export default MusicPlayer 