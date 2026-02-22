import React from 'react';
import { motion } from 'framer-motion';

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        },
    },
};

export default function Marquee() {
    return (
        <div className="relative flex overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 py-5">
            {/* Glass edge overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amber-500 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rose-500 to-transparent z-20 pointer-events-none" />
            {/* Glass frost strip */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/30" />
            <motion.div
                className="flex whitespace-nowrap"
                variants={marqueeVariants}
                animate="animate"
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 mx-6">
                        <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-widest text-white/90">
                            Innovation • Precision • Integrity • Excellence • High-Rise • Residential • Commercial • Since 2025 • GLOBAL STANDARDS •
                        </span>
                    </div>
                ))}

                {[...Array(2)].map((_, i) => (
                    <div key={`dup-${i}`} className="flex items-center gap-12 mx-6">
                        <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-widest text-white/90">
                            Innovation • Precision • Integrity • Excellence • High-Rise • Residential • Commercial • Since 2025 • GLOBAL STANDARDS •
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
