import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", mouseMove);

        // Add listeners to interactive elements
        document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            opacity: 1,
            backgroundColor: "white",
            mixBlendMode: "difference"
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            opacity: 1,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:block"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{ type: "smooth", ease: "backOut", duration: 0.1 }}
        />
    );
}
