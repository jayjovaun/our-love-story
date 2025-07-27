/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Theme background classes
    'bg-gradient-to-br',
    'from-pink-200',
    'to-purple-200',
    'from-pink-50',
    'via-purple-50',
    'to-pink-100',
    'from-slate-800',
    'to-purple-900',
    'from-slate-900',
    'via-purple-900',
    'to-slate-800',
    'from-red-200',
    'to-pink-200',
    'from-red-50',
    'via-pink-50',
    'to-red-100',
    // Theme card and background classes
    'bg-white/80',
    'backdrop-blur-sm',
    'border-pink-200',
    'bg-slate-800/80',
    'border-purple-500/30',
    'border-red-200',
    'bg-pink-100',
    'bg-pink-500',
    'bg-slate-700',
    'bg-purple-500',
    'bg-red-100',
    'bg-red-500',
    // Text colors
    'text-pink-900',
    'text-slate-100',
    'text-red-900',
    // Hover states
    'hover:bg-pink-100',
    'bg-pink-50'
  ],
  theme: {
    extend: {
      colors: {
        // Pastel Pink Theme
        pastel: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Starry Night Theme
        starry: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Cherry Blossom Theme
        cherry: {
          50: '#fef7f7',
          100: '#fdedef',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        romantic: ['Dancing Script', 'cursive'],
        elegant: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 