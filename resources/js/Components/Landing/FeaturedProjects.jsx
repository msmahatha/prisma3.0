import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    { title: 'Skyline One', location: 'Noida, UP', year: '2025', color: 'amber', image: '/images/project-1.jpg' },
    { title: 'The Vertex', location: 'Ghaziabad, UP', year: '2024', color: 'blue', image: '/images/project-2.jpg' },
    { title: 'Estate 88', location: 'Noida, UP', year: '2026', color: 'emerald', image: '/images/project-3.jpg' },
    { title: 'Tech Hub', location: 'Ghaziabad, UP', year: '2023', color: 'purple', image: '/images/project-1.jpg' },
];

const colorMap = {
    amber: { badge: 'bg-amber-500 text-white', arrow: 'text-amber-500', line: 'from-amber-400 to-orange-500' },
    blue: { badge: 'bg-blue-500 text-white', arrow: 'text-blue-500', line: 'from-blue-400 to-violet-500' },
    emerald: { badge: 'bg-emerald-500 text-white', arrow: 'text-emerald-500', line: 'from-emerald-400 to-teal-500' },
    purple: { badge: 'bg-purple-500 text-white', arrow: 'text-purple-500', line: 'from-purple-400 to-pink-500' },
};

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const colors = colorMap[project.color];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative cursor-pointer"
        >
            <div className="overflow-hidden aspect-[4/3] mb-6 relative rounded-3xl shadow-xl border border-white/50 bg-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-700">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[110%] -top-[5%]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                </motion.div>

                <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${colors.badge} shadow-lg`}>
                    {project.year}
                </div>

                {/* Glass hover info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/50 backdrop-blur-xl border-t border-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <p className="text-sm text-slate-700 font-medium">View Project Details</p>
                </div>
            </div>

            <div className="flex justify-between items-end pb-4 relative">
                <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r ${colors.line} group-hover:w-full transition-all duration-700 rounded-full`} />
                <div>
                    <h3 className="text-3xl font-display font-medium tracking-tight mb-1 text-slate-800 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                    <p className="text-sm text-slate-500 font-mono uppercase tracking-wider">{project.location}</p>
                </div>
                <div className={`opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ${colors.arrow}`}>
                    <ArrowUpRight size={24} />
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-gradient-to-br from-amber-50/40 via-white to-violet-50/30 text-slate-800 px-6 md:px-12 lg:px-24 relative">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1800px] mx-auto mb-16 md:mb-20 flex justify-between items-end relative z-10">
                <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl px-6 py-3 shadow-lg shadow-slate-200/20">
                    <h2 className="text-lg md:text-xl font-display font-medium tracking-tight text-slate-500">Selected Works (04)</h2>
                </div>
                <a href="#" className="hidden md:block text-xs uppercase tracking-widest bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all font-medium">View All Archive</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-24 md:gap-y-32 relative z-10">
                {projects.map((project, index) => (
                    <div key={index} className={index % 2 === 1 ? "md:mt-32" : ""}>
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>
        </section>
    );
}
