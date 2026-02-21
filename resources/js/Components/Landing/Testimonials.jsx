import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "They don't build houses. They curate atmospheres. Prima is the definition of quiet luxury.",
        author: "Elena Rodriguez",
        role: "Client, Azure Heights",
        color: 'from-amber-400 to-orange-500',
    },
    {
        quote: "An unwavering commitment to aesthetic purity and structural integrity. A rare partner in modern development.",
        author: "Thomas Sterling",
        role: "Investor, NYC",
        color: 'from-blue-400 to-violet-500',
    },
    {
        quote: "Minimalist perfection. Every detail serves a purpose. Living here feels like inhabiting art.",
        author: "Sarah Jenkins",
        role: "Resident, The Void",
        color: 'from-emerald-400 to-teal-500',
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Colorful ambient orbs */}
            <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-violet-500/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2" />

            <div className="inline-block bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 shadow-lg mb-24 relative z-10">
                <h2 className="text-xl md:text-2xl font-display font-medium tracking-tight text-white/60">Perspectives</h2>
            </div>

            <div className="max-w-[1800px] mx-auto min-h-[400px] flex items-center justify-center relative">
                {/* Glass quote container */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl -m-8 md:-m-12 pointer-events-none" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center md:text-left w-full relative z-10 px-4 md:px-8"
                    >
                        <blockquote className="text-3xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.1] max-w-5xl mx-auto tracking-tight select-none">
                            &quot;{testimonials[currentIndex].quote}&quot;
                        </blockquote>
                        <div className="mt-12 flex flex-col items-center gap-3">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-full px-6 py-2 inline-block">
                                <cite className={`not-italic text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${testimonials[currentIndex].color} bg-clip-text text-transparent`}>
                                    {testimonials[currentIndex].author}
                                </cite>
                            </div>
                            <span className="text-xs text-white/40 uppercase tracking-wider">{testimonials[currentIndex].role}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Glass progress indicators */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 z-20">
                    {testimonials.map((t, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`rounded-full transition-all duration-500 ${
                                index === currentIndex
                                    ? `w-8 h-3 bg-gradient-to-r ${t.color} shadow-lg`
                                    : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
