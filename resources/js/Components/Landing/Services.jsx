import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'Architecture',
        description: 'Conceptualizing spaces that breathe.',
        image: '/images/project-1.jpg',
        color: 'from-amber-400 to-orange-500',
    },
    {
        id: '02',
        title: 'Development',
        description: 'Realizing vision through precision.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
        color: 'from-blue-400 to-violet-500',
    },
    {
        id: '03',
        title: 'Investment',
        description: 'Maximizing value over generations.',
        image: '/images/project-3.jpg',
        color: 'from-emerald-400 to-teal-500',
    },
    {
        id: '04',
        title: 'Consulting',
        description: 'Defining atmosphere and function.',
        image: '/images/project-1.jpg',
        color: 'from-rose-400 to-pink-500',
    },
];

export default function Services() {
    const [activeImage, setActiveImage] = useState(services[0].image);
    const [activeColor, setActiveColor] = useState(services[0].color);

    return (
        <section id="services" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-800 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Colorful background orbs */}
            <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
                <div>
                    <div className="inline-block bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl px-6 py-3 shadow-lg shadow-slate-200/30 mb-24">
                        <h2 className="text-xl md:text-2xl font-display font-medium tracking-tight text-slate-500">Our Expertise</h2>
                    </div>

                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => { setActiveImage(service.image); setActiveColor(service.color); }}
                                className="group flex justify-between items-center py-8 px-6 cursor-pointer relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl hover:bg-white/60 hover:shadow-xl hover:shadow-slate-200/30 hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className={`absolute bottom-0 left-4 right-4 w-0 h-[2px] bg-gradient-to-r ${service.color} group-hover:w-[calc(100%-2rem)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full`} />

                                <div className="flex items-baseline gap-8">
                                    <span className={`text-[10px] md:text-xs font-mono bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-bold transition-colors`}>({service.id})</span>
                                    <h3 className="text-3xl md:text-6xl font-display font-bold text-slate-800 group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-full p-3 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
                                    <ArrowUpRight className="text-amber-500" size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image Side */}
                <div className="hidden lg:block relative h-[600px] sticky top-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0, scale: 1.05, clipPath: 'inset(0 0 100% 0)' }}
                            animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
                            exit={{ opacity: 0, scale: 0.95, clipPath: 'inset(100% 0 0 0)' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50"
                        >
                            <img
                                src={activeImage}
                                alt="Service"
                                className="w-full h-full object-cover transition-all duration-700"
                            />

                            {/* Glass overlay */}
                            <div className="absolute bottom-0 left-0 p-8 bg-white/40 backdrop-blur-xl border-t border-white/30 w-full">
                                <div className={`text-xs font-mono uppercase tracking-widest mb-2 bg-gradient-to-r ${activeColor} bg-clip-text text-transparent font-bold`}>Service Detail</div>
                                <div className={`w-full h-[2px] bg-gradient-to-r ${activeColor} rounded-full opacity-50`} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
