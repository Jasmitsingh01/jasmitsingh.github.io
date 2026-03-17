import { useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"

export default function LoadingScreen({ onFinished }) {
    const { progress, active } = useProgress()
    const [show, setShow] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        if (progress === 100 && !active) {
            // Small delay so user sees 100%
            const timer = setTimeout(() => {
                setFadeOut(true)
            }, 600)
            return () => clearTimeout(timer)
        }
    }, [progress, active])

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => {
                setShow(false)
                onFinished?.()
            }, 800)
            return () => clearTimeout(timer)
        }
    }, [fadeOut, onFinished])

    if (!show) return null

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111] transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
            {/* Glow effects */}
            <div className="absolute w-72 h-72 bg-blue-500/10 blur-[140px] rounded-full animate-pulse" />
            <div className="absolute w-60 h-60 bg-purple-500/8 blur-[120px] rounded-full translate-x-20 translate-y-10 animate-pulse" style={{ animationDelay: "1s" }} />

            {/* Logo / Name */}
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-2 text-center">
                    <span className="text-white">JASMIT</span>{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-400 via-indigo-400 to-purple-500">
                        SINGH
                    </span>
                </h1>

                <p className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-12">
                    Loading Experience
                </p>

                {/* Progress bar */}
                <div className="w-48 sm:w-64 md:w-80">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-600 font-mono text-[10px] tracking-widest uppercase">
                            {progress < 100 ? "Loading assets..." : "Ready"}
                        </span>
                        <span className="text-gray-400 font-mono text-xs tabular-nums">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>

                {/* Animated dots */}
                {progress < 100 && (
                    <div className="flex gap-1.5 mt-8">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-white/20 animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
