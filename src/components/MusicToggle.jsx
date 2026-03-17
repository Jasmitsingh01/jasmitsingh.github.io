import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MusicToggle() {
    const audioRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [showTooltip, setShowTooltip] = useState(true)

    useEffect(() => {
        audioRef.current = new Audio("/SOUND.mp3")
        audioRef.current.loop = true
        audioRef.current.volume = 0.3

        // Hide tooltip after 4 seconds
        const timer = setTimeout(() => setShowTooltip(false), 4000)

        return () => {
            clearTimeout(timer)
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const toggle = () => {
        if (!audioRef.current) return
        if (playing) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setPlaying(!playing)
        setShowTooltip(false)
    }

    return (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg"
                    >
                        <span className="text-gray-400 text-[10px] font-mono tracking-wider uppercase whitespace-nowrap">
                            Play Music
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Button */}
            <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
                    playing
                        ? "bg-white/10 border-white/20 shadow-lg shadow-blue-500/10"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
            >
                {/* Animated rings when playing */}
                {playing && (
                    <>
                        <span className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
                        <span className="absolute inset-[-4px] rounded-full border border-white/5 animate-pulse" />
                    </>
                )}

                {playing ? (
                    /* Sound bars animation */
                    <div className="flex items-end gap-[3px] h-4">
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="w-[3px] bg-blue-400 rounded-full"
                                animate={{
                                    height: ["4px", "14px", "6px", "16px", "4px"],
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    /* Muted icon */
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" className="text-gray-500" />
                    </svg>
                )}
            </motion.button>
        </div>
    )
}
