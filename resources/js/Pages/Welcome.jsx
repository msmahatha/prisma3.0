import React, { useEffect, lazy, Suspense } from 'react';
import { Head } from '@inertiajs/react';
import Lenis from 'lenis';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';

// Lazy-loaded components — Hero loads eagerly, everything else deferred
const Marquee = lazy(() => import('@/Components/Common/Marquee'));
const About = lazy(() => import('@/Components/Landing/About'));
const FeaturedProjects = lazy(() => import('@/Components/Landing/FeaturedProjects'));
const Services = lazy(() => import('@/Components/Landing/Services'));
const WhyChooseUs = lazy(() => import('@/Components/Landing/WhyChooseUs'));
const Testimonials = lazy(() => import('@/Components/Landing/Testimonials'));
const CallToAction = lazy(() => import('@/Components/Landing/CallToAction'));
const Footer = lazy(() => import('@/Components/Landing/Footer'));
const CustomCursor = lazy(() => import('@/Components/Common/CustomCursor'));

export default function Welcome() {
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
            <Head title="Prisma Buildcon | Architecture & Construction" />

            <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/20 text-slate-800 min-h-screen font-sans selection:bg-amber-400 selection:text-slate-900 cursor-auto md:cursor-none overflow-x-hidden">
                <Suspense fallback={null}>
                    <div className="hidden md:block">
                        <CustomCursor />
                    </div>
                </Suspense>

                {/* Noise Overlay */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100] bg-noise mix-blend-soft-light"></div>

                <Navbar />

                <main className="relative z-10 w-full overflow-hidden">
                    {/* Hero loads eagerly — first paint */}
                    <Hero />

                    {/* Everything below is lazy-loaded */}
                    <Suspense fallback={
                        <div className="flex items-center justify-center py-32">
                            <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                        </div>
                    }>
                        <Marquee />
                        <About />
                        <FeaturedProjects />
                        <Services />
                        <WhyChooseUs />
                        <Testimonials />
                        <CallToAction />
                    </Suspense>
                </main>

                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}
