import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale, opacity, backgroundImage: `url('/images/hero-bg.jpg')` }}
                className="absolute inset-0 bg-cover bg-center origin-bottom"
            />

            {/* Warm colorful gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-amber-900/20 to-blue-900/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-rose-900/20" />

            {/* Floating colorful orbs */}
            <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-40 left-10 w-[250px] h-[250px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-rose-400/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-end h-full pb-20 md:pb-32">
                {/* Glass floating badge top-left */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute top-32 left-6 md:left-12 lg:left-24 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-3 shadow-lg shadow-white/5"
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">Premium Construction</span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        className="font-display font-bold text-[22vw] md:text-[18vw] leading-[0.8] tracking-tighter text-white select-none whitespace-nowrap flex"
                    >
                        {"PRISMA".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-block hover:text-amber-400 transition-all duration-300 cursor-default drop-shadow-lg"
                            >
                                {char}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-amber-400 text-[22vw] md:text-[18vw] leading-[0.8] drop-shadow-lg"
                        >
                            .
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Glass info bar */}
                <div className="flex flex-col md:flex-row justify-between items-end mt-12 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 px-8 py-6 overflow-hidden shadow-2xl shadow-white/5">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="max-w-md text-sm md:text-base font-medium tracking-wide text-white/80 uppercase leading-relaxed"
                    >
                        Constructing excellence.<br className="hidden md:block" />
                        From bedrock to skyline.
                    </motion.p>

                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex gap-6 mt-8 md:mt-0 font-medium text-sm tracking-widest uppercase"
                    >
                        <span className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-full px-5 py-2 text-white/70">Est. 2025</span>
                        <div className="animate-pulse flex items-center gap-2 bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-full px-5 py-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                            <span className="text-emerald-300">Live Projects</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
