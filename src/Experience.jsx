import { ContactShadows, Environment, MeshDistortMaterial, MeshWobbleMaterial, Scroll, useScroll } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useEffect, useRef, useCallback } from "react"
import Avatar from "./components/Avtar"
import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { Scene } from "./components/SceneRoom"

function FloatingShape({ geometry, position, color, speed, rotationSpeed, scale, distort, wobble }) {
    const meshRef = useRef()

    useFrame((state) => {
        if (!meshRef.current) return
        const t = state.clock.elapsedTime * speed
        meshRef.current.position.x = position[0] + Math.sin(t * 0.6) * 3 + Math.cos(t * 0.3) * 2
        meshRef.current.position.y = position[1] + Math.cos(t * 0.5) * 2.5 + Math.sin(t * 0.8) * 1.5
        meshRef.current.position.z = position[2] + Math.sin(t * 0.4) * 2
        meshRef.current.rotation.x += rotationSpeed * 0.01
        meshRef.current.rotation.y += rotationSpeed * 0.012
        meshRef.current.rotation.z += rotationSpeed * 0.008
    })

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            {geometry}
            {distort ? (
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            ) : wobble ? (
                <MeshWobbleMaterial
                    color={color}
                    transparent
                    opacity={0.12}
                    factor={0.6}
                    speed={1.5}
                    roughness={0.3}
                    metalness={0.7}
                />
            ) : (
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.1}
                    roughness={0.2}
                    metalness={0.9}
                    wireframe
                />
            )}
        </mesh>
    )
}

// Snap scroll: when user scrolls a little, auto-snap to nearest page
function SnapScroll() {
    const scroll = useScroll()
    const lastPage = useRef(0)
    const snapping = useRef(false)
    const timeout = useRef(null)
    const totalPages = 4

    useFrame(() => {
        if (snapping.current || !scroll.el) return

        const offset = scroll.offset
        const pageSize = 1 / (totalPages - 1) // 0, 0.333, 0.666, 1.0
        const currentPage = Math.round(offset / pageSize)

        // Detect if user has scrolled enough to trigger snap (10% of a page)
        const distFromPage = Math.abs(offset - currentPage * pageSize)
        const prevDist = Math.abs(offset - lastPage.current * pageSize)

        if (prevDist > 0.04 && !snapping.current) {
            snapping.current = true
            const targetPage = offset > lastPage.current * pageSize ?
                Math.min(lastPage.current + 1, totalPages - 1) :
                Math.max(lastPage.current - 1, 0)

            const targetOffset = targetPage * pageSize
            const scrollWidth = scroll.el.scrollWidth - scroll.el.clientWidth
            const targetScroll = targetOffset * scrollWidth

            scroll.el.scrollTo({
                left: targetScroll,
                behavior: "smooth"
            })

            lastPage.current = targetPage

            // Reset snapping flag after animation
            clearTimeout(timeout.current)
            timeout.current = setTimeout(() => {
                snapping.current = false
            }, 800)
        }
    })

    return null
}

function ScrollScene() {
    const scroll = useScroll()
    const heroGroupRef = useRef()
    const roomGroupRef = useRef()
    const skillsGroupRef = useRef()
    const contactGroupRef = useRef()

    useFrame(() => {
        const offset = scroll.offset
        const smoothstep = (t) => t * t * (3 - 2 * t)

        // Page 1: Hero
        if (heroGroupRef.current) {
            const fadeOut = THREE.MathUtils.clamp(1 - (offset - 0.2) / 0.1, 0, 1)
            heroGroupRef.current.position.y = -1.5 + offset * 8 * (1 - fadeOut)
            heroGroupRef.current.visible = offset < 0.3
            heroGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.5, 1, fadeOut))
        }

        // Page 2: Projects/Room
        if (roomGroupRef.current) {
            const fadeIn = THREE.MathUtils.clamp((offset - 0.2) / 0.13, 0, 1)
            const fadeOut = THREE.MathUtils.clamp(1 - (offset - 0.45) / 0.1, 0, 1)
            const progress = smoothstep(fadeIn)
            roomGroupRef.current.position.y = THREE.MathUtils.lerp(-6, -1.2, progress)
            roomGroupRef.current.position.x = THREE.MathUtils.lerp(3, 0.8, progress)
            roomGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.5, 1, Math.min(fadeIn, fadeOut)))
            roomGroupRef.current.visible = offset > 0.18 && offset < 0.58
        }

        // Page 3: Skills
        if (skillsGroupRef.current) {
            const fadeIn = THREE.MathUtils.clamp((offset - 0.5) / 0.1, 0, 1)
            const fadeOut = THREE.MathUtils.clamp(1 - (offset - 0.75) / 0.1, 0, 1)
            const progress = smoothstep(fadeIn)
            skillsGroupRef.current.position.y = THREE.MathUtils.lerp(-6, -1.5, progress)
            skillsGroupRef.current.position.x = THREE.MathUtils.lerp(4, 1.2, progress)
            skillsGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.5, 1, Math.min(fadeIn, fadeOut)))
            skillsGroupRef.current.visible = offset > 0.48 && offset < 0.88
        }

        // Page 4: Contact
        if (contactGroupRef.current) {
            const fadeIn = THREE.MathUtils.clamp((offset - 0.8) / 0.1, 0, 1)
            const progress = smoothstep(fadeIn)
            contactGroupRef.current.position.y = THREE.MathUtils.lerp(-6, -1.5, progress)
            contactGroupRef.current.position.x = THREE.MathUtils.lerp(4, 1.5, progress)
            contactGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.5, 1, fadeIn))
            contactGroupRef.current.visible = offset > 0.78
        }
    })

    return (
        <>
            {/* Page 1: Hero - Avatar Waving */}
            <group ref={heroGroupRef} position={[1, -1.5, 0]}>
                <ContactShadows
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={4}
                />
                <Avatar animation="Waving" scale={1.4} />
            </group>

            {/* Page 2: Projects - Room + Avatar Typing */}
            <group ref={roomGroupRef} position={[3, -6, -1]} visible={false}>
                <Scene scale={0.5} rotation={[0, -0.8, 0]} />
                <group position={[0.08, 0.14, -0.6]} rotation={[0, 1.5, 0]} scale={0.66}>
                    <Avatar animation="Typing" />
                </group>
                <ContactShadows
                    opacity={0.6}
                    scale={10}
                    blur={2}
                    far={4}
                />
            </group>

            {/* Page 3: Skills - Avatar Standing */}
            <group ref={skillsGroupRef} position={[4, -6, 0]} visible={false}>
                <ContactShadows
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={4}
                />
                <Avatar animation="Standing" scale={1.4} />
            </group>

            {/* Page 4: Contact - Avatar Calling */}
            <group ref={contactGroupRef} position={[4, -6, 0]} visible={false}>
                <ContactShadows
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={4}
                />
                <Avatar animation="Calling" scale={1.4} />
            </group>
        </>
    )
}

export default function Experience() {
    const { scene } = useThree()

    useEffect(() => {
        scene.background = new THREE.Color("#111111")
    }, [scene])

    return (
        <>
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize={[2048, 2048]}
            />

            {/* Floating 3D shapes in background */}
            <FloatingShape
                geometry={<icosahedronGeometry args={[1.5, 1]} />}
                position={[-4, 2, -5]}
                color="#3b82f6"
                speed={0.4}
                rotationSpeed={0.5}
                scale={1.2}
                distort
            />
            <FloatingShape
                geometry={<torusGeometry args={[1.2, 0.4, 16, 32]} />}
                position={[4, -1, -6]}
                color="#8b5cf6"
                speed={0.3}
                rotationSpeed={0.7}
                scale={1.5}
                wobble
            />
            <FloatingShape
                geometry={<octahedronGeometry args={[1.2, 0]} />}
                position={[-3, -2, -4]}
                color="#6366f1"
                speed={0.5}
                rotationSpeed={0.4}
                scale={1}
                wireframe
            />
            <FloatingShape
                geometry={<dodecahedronGeometry args={[1, 0]} />}
                position={[5, 2.5, -7]}
                color="#a855f7"
                speed={0.35}
                rotationSpeed={0.6}
                scale={1.8}
                distort
            />
            <FloatingShape
                geometry={<torusKnotGeometry args={[0.8, 0.3, 64, 16]} />}
                position={[-5, 0, -8]}
                color="#3b82f6"
                speed={0.25}
                rotationSpeed={0.3}
                scale={1.4}
                wobble
            />
            <FloatingShape
                geometry={<icosahedronGeometry args={[1, 1]} />}
                position={[3, -2.5, -5]}
                color="#818cf8"
                speed={0.45}
                rotationSpeed={0.5}
                scale={0.9}
                wireframe
            />

            <ScrollScene />
            <SnapScroll />

            {/* HTML overlays for each scroll section */}
            <Scroll html>
                <Introduction />

                {/* Scroll Down Indicator */}
                <div
                    className="flex flex-col items-center gap-2 pointer-events-none animate-fade-in"
                    style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)" }}
                >
                    <span className="text-white/30 font-mono text-[10px] tracking-[0.3em] uppercase">
                        Scroll Down
                    </span>
                    <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
                        <div className="w-1 h-2 rounded-full bg-white/50 animate-scroll-dot" />
                    </div>
                    <svg
                        className="w-4 h-4 text-white/20 animate-bounce-slow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {/* Projects section - page 2 */}
                <Projects />

                {/* Skills section - page 3 */}
                <Skills />

                {/* Contact section - page 4 */}
                <Contact />
            </Scroll>
        </>
    )
}
