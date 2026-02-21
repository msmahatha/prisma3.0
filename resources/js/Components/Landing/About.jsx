import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion';

function Counter({ value, suffix = '', colorClass = 'gradient-text' }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className={colorClass} />;
}

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section id="about" ref={containerRef} className="py-32 bg-gradient-to-br from-white via-amber-50/30 to-blue-50/30 text-slate-800 px-6 md:px-12 lg:px-24 relative overflow-hidden">

            {/* Colorful background orbs */}
            <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-amber-200/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

            {/* Background Text */}
            <motion.div
                style={{ y: bgY }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden"
            >
                <div className="text-[40vw] md:text-[30vw] font-display font-bold text-amber-100/40 whitespace-nowrap leading-none">
                    LEGACY
                </div>
            </motion.div>

            <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-mono uppercase tracking-widest text-amber-600 mb-6 bg-amber-50/80 backdrop-blur-xl border border-amber-200/50 rounded-full px-5 py-2 shadow-sm"
                    >
                        // The Philosophy
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] mb-12"
                    >
                        Form follows <br /> <span className="italic font-light bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">function.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-200/30 space-y-8"
                    >
                        <p className="text-xl font-light text-slate-600 leading-relaxed max-w-lg">
                            We curate environments that inspire. Our approach combines rigorous engineering with an artist's eye for light and shadow.
                        </p>
                        <div className="w-full h-[1px] bg-gradient-to-r from-amber-300/40 via-blue-300/30 to-transparent" />
                        <p className="text-lg font-light text-slate-500 leading-relaxed max-w-lg">
                            Every joint is considered, every material is chosen for its truth, and every space is designed to endure.
                        </p>
                    </motion.div>
                </div>

                {/* Right Image + Glass Card Stats */}
                <div className="relative">
                    <motion.div
                        style={{ y }}
                        className="relative z-10 aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl"
                    >
                        <img
                            src="/images/project-1.jpg"
                            alt="Modern Architecture"
                            className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Floating Glass Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative md:absolute -bottom-6 md:-bottom-12 left-0 md:-left-12 lg:-left-24 z-20 bg-white/60 backdrop-blur-2xl border border-white/50 p-6 md:p-12 shadow-2xl shadow-slate-200/50 rounded-3xl max-w-sm w-full mt-8 md:mt-0"
                    >
                        <div className="grid grid-cols-1 gap-8">
                            <div className="border-b border-amber-200/30 pb-6">
                                <div className="text-5xl md:text-6xl font-display font-bold mb-1">
                                    <Counter value={150} suffix="+" colorClass="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent" />
                                </div>
                                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Completed Projects</div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-4xl font-display font-medium mb-1">
                                        <Counter value={25} colorClass="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent" />
                                    </div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Years Exp.</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-display font-medium mb-1">
                                        <Counter value={500} suffix="+" colorClass="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent" />
                                    </div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Clients</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
