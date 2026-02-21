import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function CallToAction() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={ref} id="contact" className="py-32 bg-gradient-to-br from-amber-50/50 via-white to-blue-50/40 text-slate-800 px-6 md:px-12 lg:px-24 overflow-hidden relative">
            {/* Colorful background orbs */}
            <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-amber-200/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-10 md:p-14 shadow-2xl shadow-slate-200/30"
                >
                    <span className="inline-block text-xs uppercase tracking-widest text-amber-600 mb-8 bg-amber-50/80 backdrop-blur-xl border border-amber-200/50 rounded-full px-5 py-2 font-medium">Connect</span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[0.8] mb-6 tracking-tighter">
                        Start <br /> <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">Legacy.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12 items-start md:items-end">
                    <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-lg shadow-slate-200/20">
                        <p className="text-lg md:text-xl text-slate-500 max-w-sm leading-relaxed md:text-right font-light">
                            Exceptional projects begin with a conversation. Let's discuss your vision.
                        </p>
                    </div>

                    <Link href="/contact" className="group">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            viewport={{ once: true }}
                            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white flex items-center justify-center overflow-hidden cursor-pointer shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/50 to-transparent scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out origin-center" />
                            <span className="relative z-10 text-lg md:text-xl font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                Inquire <ArrowRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                            </span>
                        </motion.div>
                    </Link>
                </div>
            </div>

            {/* Scrolling Background Text */}
            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
                className="absolute bottom-10 left-0 whitespace-nowrap opacity-[0.04] pointer-events-none select-none"
            >
                <span className="text-[30vw] md:text-[20vw] font-display font-bold uppercase leading-none text-amber-400">
                    Build The Future. Create History. Build The Future. Create History.
                </span>
            </motion.div>
        </section>
    );
}
