import React from 'react';
import { motion } from 'framer-motion';

const principles = [
    {
        number: '01',
        title: 'Precision.',
        description: 'Every joint, every finish, executed to the millimeter.',
        color: 'border-amber-400',
        numColor: 'text-amber-400',
        gradient: 'from-amber-400/10 to-transparent',
        iconBg: 'bg-amber-100 text-amber-600',
        glowColor: 'hover:shadow-amber-200/50',
    },
    {
        number: '02',
        title: 'Integrity.',
        description: 'Transparency in process, honesty in execution.',
        color: 'border-blue-400',
        numColor: 'text-blue-400',
        gradient: 'from-blue-400/10 to-transparent',
        iconBg: 'bg-blue-100 text-blue-600',
        glowColor: 'hover:shadow-blue-200/50',
    },
    {
        number: '03',
        title: 'Vision.',
        description: 'Seeing potential where others see limitation.',
        color: 'border-emerald-400',
        numColor: 'text-emerald-400',
        gradient: 'from-emerald-400/10 to-transparent',
        iconBg: 'bg-emerald-100 text-emerald-600',
        glowColor: 'hover:shadow-emerald-200/50',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 text-navy-dark px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1800px] mx-auto mb-24">
                <div className="inline-block bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl px-6 py-3 shadow-lg shadow-slate-200/20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-display font-medium tracking-tight text-slate-500"
                    >
                        Our Philosophy
                    </motion.h2>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                {principles.map((principle, index) => (
                    <motion.div
                        key={principle.number}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className={`group relative bg-white/60 backdrop-blur-2xl border border-white/70 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/30 hover:-translate-y-2 ${principle.glowColor} hover:shadow-2xl transition-all duration-500`}
                    >
                        {/* Glass number badge */}
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${principle.iconBg} backdrop-blur-xl text-lg font-display font-bold mb-8 shadow-sm`}>
                            {principle.number}
                        </div>
                        <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-navy-dark group-hover:translate-x-2 transition-transform duration-300">{principle.title}</h3>
                        <p className="text-slate-500 max-w-xs text-sm leading-relaxed tracking-wide group-hover:text-slate-700 transition-colors duration-300">
                            {principle.description}
                        </p>
                        {/* Glass bottom accent line */}
                        <div className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${principle.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
