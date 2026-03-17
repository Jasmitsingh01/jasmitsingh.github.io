import { motion } from "framer-motion"
import { useState } from "react"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const contactLinks = [
    {
        name: "Email",
        value: "jasmits007@gmail.com",
        href: "mailto:jasmits007@gmail.com",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        value: "github.com/Jasmitsingh01",
        href: "https://github.com/Jasmitsingh01",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/jasmit-singh",
        href: "https://www.linkedin.com/in/jasmit-singh-1aaa97206/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        value: "@jasmit",
        href: "https://twitter.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:jasmits007@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
        window.open(mailtoLink)
    }

    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center pointer-events-auto overflow-y-auto overflow-x-hidden"
            style={{ position: "absolute", top: 0, left: "300vw" }}
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    {/* Left side - Info */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={item}>
                            <span className="text-orange-400 font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
                                Get In Touch
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-3 sm:mb-4">
                                Contact{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-br from-orange-400 via-pink-400 to-purple-500">
                                    Me
                                </span>
                            </h2>
                            <div className="h-px w-16 sm:w-20 bg-linear-to-r from-orange-500 to-transparent mb-4 sm:mb-6" />
                        </motion.div>

                        <motion.p variants={item} className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8 max-w-sm">
                            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to
                            discussing new opportunities and ideas.
                        </motion.p>

                        {/* Contact links */}
                        <motion.div variants={item} className="space-y-3">
                            {contactLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all">
                                        {link.icon}
                                    </span>
                                    <div>
                                        <span className="text-gray-500 text-[10px] font-mono tracking-widest uppercase block">
                                            {link.name}
                                        </span>
                                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                            {link.value}
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        {/* Glow */}
                        <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />

                        <motion.div variants={item} className="mb-5">
                            <label className="text-gray-500 text-[10px] font-mono tracking-widest uppercase block mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500/40 focus:bg-white/[0.07] transition-all"
                                placeholder="Your name"
                            />
                        </motion.div>

                        <motion.div variants={item} className="mb-5">
                            <label className="text-gray-500 text-[10px] font-mono tracking-widest uppercase block mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500/40 focus:bg-white/[0.07] transition-all"
                                placeholder="you@example.com"
                            />
                        </motion.div>

                        <motion.div variants={item} className="mb-6">
                            <label className="text-gray-500 text-[10px] font-mono tracking-widest uppercase block mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500/40 focus:bg-white/[0.07] transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </motion.div>

                        <motion.div variants={item}>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </motion.button>
                        </motion.div>

                        {/* Footer */}
                        <motion.p variants={item} className="text-center text-gray-600 text-xs mt-6 font-mono">
                            I'll get back to you within 24 hours
                        </motion.p>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}
