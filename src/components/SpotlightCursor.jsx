import { useEffect, useRef } from "react"

export default function SpotlightCursor() {
    const spotlightRef = useRef(null)
    const posRef = useRef({ x: 0, y: 0 })
    const targetRef = useRef({ x: 0, y: 0 })
    const rafRef = useRef(null)

    useEffect(() => {
        const spotlight = spotlightRef.current
        if (!spotlight) return

        const handleMouseMove = (e) => {
            targetRef.current.x = e.clientX
            targetRef.current.y = e.clientY
        }

        const animate = () => {
            // Smooth lerp for fluid following
            posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15
            posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15

            spotlight.style.background = `radial-gradient(600px circle at ${posRef.current.x}px ${posRef.current.y}px, rgba(99, 102, 241, 0.07), rgba(139, 92, 246, 0.04) 30%, rgba(59, 130, 246, 0.02) 50%, transparent 70%)`

            rafRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener("mousemove", handleMouseMove)
        rafRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <div
            ref={spotlightRef}
            className="fixed inset-0 z-50 pointer-events-none transition-opacity duration-300"
            style={{ mixBlendMode: "screen" }}
        />
    )
}
