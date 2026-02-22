import React, { useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import CustomCursor from '@/Components/Common/CustomCursor';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        service: 'Architecture',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.send'), {
            onSuccess: () => reset(),
        });
    };
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <Head title="Contact | Prisma Buildcon" />

            <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
                <div className="hidden md:block">
                    <CustomCursor />
                </div>

                {/* Noise Overlay */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-noise mix-blend-overlay"></div>

                <Navbar />

                <main className="relative z-10 pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-[1800px] mx-auto">
                        <header className="mb-16 md:mb-24">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-xs font-mono uppercase tracking-[0.3em] text-accent/60 mb-6 block"
                            >
                                Get In Touch
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[1] md:leading-[0.85]"
                            >
                                Let's build <br /> <span className="text-slate-500 italic">together.</span>
                            </motion.h1>
                        </header>

                        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="space-y-12 md:space-y-16"
                            >
                                <div className="space-y-8 md:space-y-12">
                                    <div className="group">
                                        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Email Us</p>
                                        <a href="mailto:info@prismabuildcon.com" className="text-xl md:text-3xl font-display hover:text-accent transition-colors duration-300">
                                            info@prismabuildcon.com
                                        </a>
                                    </div>
                                    <div className="group">
                                        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Call Us</p>
                                        <a href="tel:+918510893789" className="text-xl md:text-3xl font-display hover:text-accent transition-colors duration-300">
                                            +91 85108 93789
                                        </a>
                                    </div>
                                    <div className="group">
                                        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Visit Us</p>
                                        <address className="not-italic text-xl md:text-3xl font-display leading-relaxed">
                                            Noida / Ghaziabad<br />
                                            Uttar Pradesh, India
                                        </address>
                                    </div>
                                </div>

                                <div className="pt-8 md:pt-12 border-t border-white/10">
                                    <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">Socials</p>
                                    <div className="flex flex-wrap gap-6 md:gap-8">
                                        {[{ name: 'Instagram', href: 'https://www.instagram.com/primabuildcon?igsh=YmdueW5pODRmZjky' }, { name: 'LinkedIn', href: '#' }, { name: 'Behance', href: '#' }].map((social) => (
                                            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors">
                                                {social.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-white/5 border border-white/10 p-6 md:p-12 rounded-sm backdrop-blur-sm"
                            >
                                {wasSuccessful && (
                                    <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm font-medium">
                                        Your message has been sent! We'll get back to you shortly.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Name</label>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 focus:border-white transition-colors outline-none font-display text-lg md:text-xl"
                                                placeholder="Enter your name"
                                            />
                                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Email</label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 focus:border-white transition-colors outline-none font-display text-lg md:text-xl"
                                                placeholder="Enter your email"
                                            />
                                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Service Inquiry</label>
                                        <select
                                            value={data.service}
                                            onChange={(e) => setData('service', e.target.value)}
                                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 focus:border-white transition-colors outline-none font-display text-lg md:text-xl appearance-none"
                                        >
                                            <option className="bg-black text-white">Architecture</option>
                                            <option className="bg-black text-white">Real Estate Development</option>
                                            <option className="bg-black text-white">Investment</option>
                                            <option className="bg-black text-white">Interior Design</option>
                                        </select>
                                        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Message</label>
                                        <textarea
                                            rows="4"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 focus:border-white transition-colors outline-none font-display text-lg md:text-xl resize-none"
                                            placeholder="Tell us about your project"
                                        ></textarea>
                                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group relative w-full h-14 md:h-16 bg-white text-black font-display font-medium uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
