import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const menuItems = [
        { label: 'Philosophy', href: '/#about' },
        { label: 'Works', href: '/#projects' },
        { label: 'Expertise', href: '/#services' },
        { label: 'Journal', href: '#' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? 'py-4 bg-white/70 backdrop-blur-2xl border-b border-white/50 shadow-lg shadow-slate-200/20'
                        : 'py-10 bg-transparent'
                }`}
            >
                <div className="container-padding max-w-[1800px] mx-auto flex items-center justify-between">
                    <Link href="/" className={`relative z-50 text-2xl font-display font-bold tracking-tight group ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                        PRISMA<span className="text-amber-500 group-hover:text-orange-500 transition-colors">.</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-16">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`text-[11px] uppercase tracking-[0.3em] font-medium relative group transition-colors duration-300 ${
                                    scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'
                                }`}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full rounded-full" />
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-12">
                        <Link
                            href="/contact"
                            className={`text-[11px] font-medium px-8 py-3 rounded-full uppercase tracking-[0.2em] transition-all duration-500 ${
                                scrolled
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
                                    : 'bg-white/10 backdrop-blur-xl text-white border border-white/30 hover:bg-white/20'
                            }`}
                        >
                            Contact
                        </Link>
                    </div>

                    <button
                        className={`md:hidden relative z-50 p-2 ${scrolled ? 'text-slate-800' : 'text-white'}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-3xl flex flex-col items-center justify-center"
                    >
                        <div className="absolute top-20 right-10 w-[200px] h-[200px] bg-amber-400/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-20 left-10 w-[200px] h-[200px] bg-blue-400/20 rounded-full blur-[80px] pointer-events-none" />

                        <nav className="flex flex-col items-center gap-10 relative z-10">
                            {menuItems.map((item, i) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={item.label}
                                    href={item.href}
                                    className="text-4xl md:text-6xl font-display font-medium text-white hover:text-amber-400 transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: menuItems.length * 0.1 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="mt-8 text-xl font-display bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </nav>

                        <div className="absolute bottom-12 text-center text-white/30">
                            <p className="text-[10px] font-mono uppercase tracking-[0.5em]">PRISMA BUILDCON • EST 2025</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
