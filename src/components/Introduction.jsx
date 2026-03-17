import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const socials = [
    { name: "GitHub", href: "https://github.com/Jasmitsingh01" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jasmit-singh-1aaa97206/" },
    { name: "Twitter", href: "https://twitter.com/" },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.3 + 0.05,
}))

export default function Introduction() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-start px-4 py-6 sm:p-6 md:p-16 lg:p-24 overflow-hidden">

            {/* Floating particles background */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        background: p.id % 3 === 0
                            ? "rgba(96,165,250,0.6)"
                            : p.id % 3 === 1
                                ? "rgba(129,140,248,0.6)"
                                : "rgba(168,85,247,0.5)",
                    }}
                    animate={{
                        y: [0, -40, 10, -20, 0],
                        x: [0, 15, -10, 20, 0],
                        opacity: [p.opacity, p.opacity + 0.15, p.opacity, p.opacity + 0.1, p.opacity],
                        scale: [1, 1.3, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-lg pointer-events-auto relative z-10"
            >
                {/* Glow effects */}
                <motion.div
                    className="absolute -top-32 -left-32 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 blur-[120px] rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-32 -right-32 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 blur-[120px] rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Status badge */}
                <motion.div variants={item}>
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-gray-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase">
                            Available for work
                        </span>
                    </span>
                </motion.div>

                <div className="flex gap-5 ">
                    {/* Name */}
                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-1 sm:mb-2 leading-[0.9] tracking-tighter"
                    >
                        JASMIT
                    </motion.h1>
                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-6xl md:text-8xl font-black mb-3 sm:mb-6 leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-blue-400 via-indigo-400 to-purple-500"
                    >
                        SINGH
                    </motion.h1>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="h-px w-16 sm:w-24 bg-linear-to-r from-blue-500 to-transparent mb-4 sm:mb-6 origin-left"
                />

                {/* Description */}
                <motion.p
                    variants={item}
                    className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-sm"
                >
                    Full Stack Developer passionate about building{" "}
                    <span className="text-white font-medium">AI-powered applications</span>,{" "}
                    <span className="text-white font-medium">scalable web platforms</span>, and{" "}
                    <span className="text-white font-medium">immersive 3D experiences</span> with modern technologies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={item} className="flex flex-col sm:flex-row  items-start sm:items-center gap-3 sm:gap-4">
                    <motion.a
                        href="/Resume.pdf"
                        download
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group/dl px-5 sm:px-8 py-3 text-nowrap sm:py-4 bg-linear-to-r from-blue-500 to-indigo-500 text-white text-xs sm:text-sm font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2"
                    >
                        Download Resume
                        <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/dl:translate-y-0.5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-5 sm:px-8 py-3 text-nowrap sm:py-4 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Social links */}
                <motion.div variants={item} className="flex gap-4 sm:gap-5 mt-5 sm:mt-8">
                    {socials.map((s) => (
                        <motion.a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, color: "#fff" }}
                            className="text-gray-500 text-[10px] sm:text-xs font-mono tracking-wider uppercase hover:text-white transition-colors"
                        >
                            {s.name}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
