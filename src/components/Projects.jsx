import { motion } from "framer-motion"

const projects = [
    {
        title: "PulseAI",
        description: "Full-stack AI chat app with Google Gemini integration, JWT auth, and MongoDB backend.",
        tags: ["Express.js", "Gemini AI", "MongoDB", "JWT"],
        link: "https://github.com/Jasmitsingh01/PulseAI",
        gradient: "from-blue-600/30 via-indigo-500/20 to-violet-600/10",
        border: "border-blue-400/25",
        glow: "bg-blue-500/20",
        hoverBorder: "hover:border-blue-400/50",
        titleColor: "text-blue-100",
        titleHover: "group-hover:text-blue-300",
        descColor: "text-blue-200/50",
        descHover: "group-hover:text-blue-100/70",
        tagBg: "bg-blue-400/10 border-blue-400/15 text-blue-300/80",
        numColor: "text-blue-300/10 group-hover:text-blue-300/25",
    },
    {
        title: "Harvin E-Commerce",
        description: "E-commerce platform for furniture with i18n support, Zustand state management, and SEO optimization.",
        tags: ["Next.js", "Material UI", "TypeScript", "Zustand"],
        link: "https://github.com/Jasmitsingh01/Harvin",
        gradient: "from-purple-600/30 via-fuchsia-500/20 to-pink-600/10",
        border: "border-purple-400/25",
        glow: "bg-purple-500/20",
        hoverBorder: "hover:border-purple-400/50",
        titleColor: "text-purple-100",
        titleHover: "group-hover:text-purple-300",
        descColor: "text-purple-200/50",
        descHover: "group-hover:text-purple-100/70",
        tagBg: "bg-purple-400/10 border-purple-400/15 text-purple-300/80",
        numColor: "text-purple-300/10 group-hover:text-purple-300/25",
    },
    {
        title: "School Management",
        description: "School management system with image uploads, MySQL database, and Vercel deployment.",
        tags: ["Next.js 14", "TypeScript", "MySQL", "Tailwind"],
        link: "https://github.com/Jasmitsingh01/school-management",
        gradient: "from-emerald-600/30 via-teal-500/20 to-cyan-600/10",
        border: "border-emerald-400/25",
        glow: "bg-emerald-500/20",
        hoverBorder: "hover:border-emerald-400/50",
        titleColor: "text-emerald-100",
        titleHover: "group-hover:text-emerald-300",
        descColor: "text-emerald-200/50",
        descHover: "group-hover:text-emerald-100/70",
        tagBg: "bg-emerald-400/10 border-emerald-400/15 text-emerald-300/80",
        numColor: "text-emerald-300/10 group-hover:text-emerald-300/25",
    },
    {
        title: "Twitter Clone",
        description: "Full-featured social media app with real-time messaging, follow system, and notification feeds.",
        tags: ["React", "TypeScript", "Redux", "WebSocket"],
        link: "https://github.com/Jasmitsingh01/twitter-clone",
        gradient: "from-orange-600/30 via-amber-500/20 to-yellow-600/10",
        border: "border-orange-400/25",
        glow: "bg-orange-500/20",
        hoverBorder: "hover:border-orange-400/50",
        titleColor: "text-orange-100",
        titleHover: "group-hover:text-orange-300",
        descColor: "text-orange-200/50",
        descHover: "group-hover:text-orange-100/70",
        tagBg: "bg-orange-400/10 border-orange-400/15 text-orange-300/80",
        numColor: "text-orange-300/10 group-hover:text-orange-300/25",
    },
    {
        title: "AI Tutor Assistant",
        description: "AI-powered tutoring platform with FastAPI + Gemini backend and React TypeScript frontend.",
        tags: ["React", "TypeScript", "FastAPI", "Gemini"],
        link: "https://github.com/Jasmitsingh01/skc_jasmit_singh_Ai-tutor-assistant-frontend",
        gradient: "from-rose-600/30 via-pink-500/20 to-fuchsia-600/10",
        border: "border-rose-400/25",
        glow: "bg-rose-500/20",
        hoverBorder: "hover:border-rose-400/50",
        titleColor: "text-rose-100",
        titleHover: "group-hover:text-rose-300",
        descColor: "text-rose-200/50",
        descHover: "group-hover:text-rose-100/70",
        tagBg: "bg-rose-400/10 border-rose-400/15 text-rose-300/80",
        numColor: "text-rose-300/10 group-hover:text-rose-300/25",
    },
    {
        title: "DNK E-Commerce",
        description: "Modern e-commerce storefront with product catalog, cart, checkout, and order tracking.",
        tags: ["React", "Tailwind", "Axios", "JWT"],
        link: "https://dnkecommerce.netlify.app",
        gradient: "from-cyan-600/30 via-sky-500/20 to-blue-600/10",
        border: "border-cyan-400/25",
        glow: "bg-cyan-500/20",
        hoverBorder: "hover:border-cyan-400/50",
        titleColor: "text-cyan-100",
        titleHover: "group-hover:text-cyan-300",
        descColor: "text-cyan-200/50",
        descHover: "group-hover:text-cyan-100/70",
        tagBg: "bg-cyan-400/10 border-cyan-400/15 text-cyan-300/80",
        numColor: "text-cyan-300/10 group-hover:text-cyan-300/25",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-start pointer-events-auto overflow-hidden"
            style={{ position: "absolute", top: 0, left: "100vw" }}
        >
            <div className="w-full max-w-[60vw] pl-6 md:pl-16 lg:pl-24">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 sm:mb-12"
                >
                    <span className="text-blue-400 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2 sm:mb-3 block">
                        Featured Work
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                        My{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-400 via-indigo-400 to-purple-500">
                            Projects
                        </span>
                    </h2>
                    <div className="h-px w-16 sm:w-20 bg-linear-to-r from-blue-500 to-transparent mt-4 sm:mt-6" />
                </motion.div>

                {/* Project cards grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3"
                >
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={item}
                            whileHover={{ scale: 1.03, y: -6 }}
                            className={`group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${project.border} bg-linear-to-br ${project.gradient} backdrop-blur-md cursor-pointer transition-all duration-500 ${project.hoverBorder} hover:shadow-lg hover:shadow-black/20 no-underline`}
                        >
                            {/* Inner glow on hover */}
                            <div className={`absolute inset-0 rounded-xl sm:rounded-2xl ${project.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none`} />

                            <span className={`absolute top-3 right-3 sm:top-4 sm:right-4 ${project.numColor} font-mono text-xs sm:text-sm font-black transition-colors duration-300`}>
                                0{i + 1}
                            </span>

                            <h3 className={`relative ${project.titleColor} font-bold text-sm sm:text-base mb-1 sm:mb-1.5 ${project.titleHover} transition-colors duration-300`}>
                                {project.title}
                            </h3>
                            <p className={`relative ${project.descColor} text-[10px] sm:text-xs leading-relaxed mb-2.5 sm:mb-3 ${project.descHover} transition-colors duration-300`}>
                                {project.description}
                            </p>

                            <div className="relative flex flex-wrap gap-1 sm:gap-1.5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[9px] font-mono tracking-wider uppercase ${project.tagBg} rounded-full border transition-colors duration-300`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 hidden sm:block">
                                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
