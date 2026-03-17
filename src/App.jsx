import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Suspense, useState, useCallback, useEffect } from "react";
import Experience from "./Experience";
import LoadingScreen from "./components/LoadingScreen";
import MusicToggle from "./components/MusicToggle";
import SpotlightCursor from "./components/SpotlightCursor";

function MobileBlocker() {
  return (
    <div className="fixed inset-0 z-100 bg-[#111111] flex flex-col items-center justify-center px-8 text-center">
      {/* Glow */}
      <div className="absolute w-72 h-72 bg-blue-500/10 blur-[140px] rounded-full" />
      <div className="absolute w-60 h-60 bg-purple-500/8 blur-[120px] rounded-full translate-x-16 translate-y-8" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon */}
        <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
          <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
        </div>

        <h1 className="text-3xl font-black tracking-tighter mb-2">
          <span className="text-white">JASMIT</span>{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-400 via-indigo-400 to-purple-500">
            SINGH
          </span>
        </h1>

        <div className="h-px w-16 bg-linear-to-r from-blue-500 to-transparent mx-auto my-5" />

        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-2">
          This experience is built with immersive <span className="text-white font-medium">3D graphics</span> and works best on a larger screen.
        </p>

        <p className="text-white font-semibold text-base mt-4 mb-1">
          Please open on a Desktop or Laptop
        </p>
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase">
          for the best experience
        </p>

        {/* Animated arrow pointing to desktop */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-white/15 flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const handleFinished = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (isMobile) return <MobileBlocker />

  return (
    <div className="h-screen w-screen overflow-hidden">
      <SpotlightCursor />
      <LoadingScreen onFinished={handleFinished} />
      <MusicToggle />
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.3} horizontal>
            <Experience />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
