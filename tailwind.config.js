import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0F172A',
                    light: '#1E293B',
                    dark: '#020617',
                },
                accent: {
                    DEFAULT: '#F59E0B',
                    light: '#FCD34D',
                    dark: '#D97706',
                    dim: '#A1A1AA',
                },
                primary: {
                    DEFAULT: '#3B82F6',
                    light: '#60A5FA',
                    dark: '#2563EB',
                },
                warm: {
                    DEFAULT: '#FEF3C7',
                    light: '#FFFBEB',
                    dark: '#FDE68A',
                },
                slate: {
                    dim: '#52525B',
                    light: '#D4D4D8',
                }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Syne', ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                tightest: '-.075em',
                tighter: '-.05em',
            },
            backgroundImage: {
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
            },
            animation: {
                'scan': 'scan 4s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                scan: {
                    '0%, 100%': { top: '0%' },
                    '50%': { top: '100%' },
                }
            }
        },
    },

    plugins: [forms],
};
