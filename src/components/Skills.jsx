import { motion } from "framer-motion"

const skillCategories = [
    {
        title: "Frontend",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "Three.js / R3F", level: 85 },
            { name: "TypeScript", level: 88 },
            { name: "Tailwind CSS", level: 95 },
            { name: "HTML / CSS", level: 98 },
        ],
        color: "blue",
    },
    {
        title: "Backend",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>
        ),
        skills: [
            { name: "Node.js", level: 92 },
            { name: "Python", level: 85 },
            { name: "Express.js", level: 90 },
            { name: "PostgreSQL", level: 82 },
            { name: "MongoDB", level: 88 },
            { name: "REST / GraphQL", level: 87 },
        ],
        color: "purple",
    },
    {
        title: "DevOps & Tools",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.07 12.3a1.125 1.125 0 01-.11-1.59l5.1-5.1a1.125 1.125 0 011.59.11l2.24 2.24m-5.1 5.1l5.1 5.1m0 0l2.24-2.24a1.125 1.125 0 00.11-1.59l-5.1-5.1a1.125 1.125 0 00-1.59.11L3.07 12.3m14.35 2.87l2.24-2.24a1.125 1.125 0 00-.11-1.59l-5.1-5.1" />
            </svg>
        ),
        skills: [
            { name: "Docker", level: 88 },
            { name: "Kubernetes", level: 75 },
            { name: "AWS / GCP", level: 80 },
            { name: "CI/CD", level: 85 },
            { name: "Git / GitHub", level: 95 },
            { name: "Linux", level: 82 },
        ],
        color: "emerald",
    },
]

const colorMap = {
    blue: {
        bg: "from-blue-600/25 via-indigo-500/15 to-blue-900/10",
        border: "border-blue-400/25",
        hoverBorder: "hover:border-blue-400/50",
        glow: "bg-blue-500/15",
        bar: "bg-linear-to-r from-blue-500 via-blue-400 to-cyan-400",
        barBg: "bg-blue-950/40",
        badge: "text-blue-300 bg-blue-500/15 border-blue-400/25",
        skillText: "text-blue-100/90",
        levelText: "text-blue-300/60",
    },
    purple: {
        bg: "from-purple-600/25 via-fuchsia-500/15 to-purple-900/10",
        border: "border-purple-400/25",
        hoverBorder: "hover:border-purple-400/50",
        glow: "bg-purple-500/15",
        bar: "bg-linear-to-r from-purple-500 via-fuchsia-400 to-pink-400",
        barBg: "bg-purple-950/40",
        badge: "text-purple-300 bg-purple-500/15 border-purple-400/25",
        skillText: "text-purple-100/90",
        levelText: "text-purple-300/60",
    },
    emerald: {
        bg: "from-emerald-600/25 via-teal-500/15 to-emerald-900/10",
        border: "border-emerald-400/25",
        hoverBorder: "hover:border-emerald-400/50",
        glow: "bg-emerald-500/15",
        bar: "bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-400",
        barBg: "bg-emerald-950/40",
        badge: "text-emerald-300 bg-emerald-500/15 border-emerald-400/25",
        skillText: "text-emerald-100/90",
        levelText: "text-emerald-300/60",
    },
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center pointer-events-auto overflow-hidden"
            style={{ position: "absolute", top: 0, left: "200vw" }}
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-5 sm:mb-10"
                >
                    <span className="text-emerald-400 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2 sm:mb-3 block">
                        What I Work With
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                        My{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-br from-emerald-400 via-blue-400 to-purple-500">
                            Skills
                        </span>
                    </h2>
                    <div className="h-px w-16 sm:w-20 bg-linear-to-r from-emerald-500 to-transparent mt-4 sm:mt-6" />
                </motion.div>

                {/* Skill categories grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5"
                >
                    {skillCategories.map((category) => {
                        const colors = colorMap[category.color]
                        return (
                            <motion.div
                                key={category.title}
                                variants={item}
                                whileHover={{ y: -4 }}
                                className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${colors.border} bg-linear-to-br ${colors.bg} backdrop-blur-md transition-all duration-500 ${colors.hoverBorder} hover:shadow-lg hover:shadow-black/20`}
                            >
                                {/* Hover glow */}
                                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl ${colors.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none`} />

                                {/* Category header */}
                                <div className="relative flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                                    <span className={`p-1.5 sm:p-2 rounded-lg border ${colors.badge} transition-all duration-300 group-hover:scale-110`}>
                                        {category.icon}
                                    </span>
                                    <h3 className="text-white font-bold text-base sm:text-lg">{category.title}</h3>
                                </div>

                                {/* Skills list */}
                                <div className="relative space-y-2.5 sm:space-y-4">
                                    {category.skills.map((skill, i) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`${colors.skillText} text-xs sm:text-sm font-medium`}>{skill.name}</span>
                                                <span className={`${colors.levelText} text-[10px] sm:text-xs font-mono`}>{skill.level}%</span>
                                            </div>
                                            <div className={`h-1.5 sm:h-2 ${colors.barBg} rounded-full overflow-hidden`}>
                                                <motion.div
                                                    className={`h-full rounded-full ${colors.bar} shadow-sm`}
                                                    style={{ boxShadow: "0 0 8px rgba(255,255,255,0.1)" }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}
