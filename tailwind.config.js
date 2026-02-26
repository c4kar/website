/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        terminal: {
          green: '#4ade80',
          'bright-green': '#86efac',
          'dim-green': '#22c55e',
          amber: '#facc15',
          cyan: '#a78bfa',
          red: '#f87171',
        },
        brand: {
          DEFAULT: '#22c55e',
          hover: '#4ade80',
          light: '#86efac',
          subtle: 'rgba(34, 197, 94, 0.12)',
        },
        neutral: {
          bg1: '#080808',
          bg2: '#0e0e0e',
          bg3: '#151515',
          bg4: '#1c1c1c',
          bg5: '#252525',
          bg6: '#303030',
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#909090',
          muted: '#555555',
        },
        border: {
          subtle: 'hsla(0, 0%, 100%, 0.06)',
          DEFAULT: 'hsla(0, 0%, 100%, 0.10)',
          strong: 'hsla(0, 0%, 100%, 0.20)',
        },
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      boxShadow: {
        glow: '0 0 14px rgba(74, 222, 128, 0.10)',
        'glow-amber': '0 0 14px rgba(250, 204, 21, 0.10)',
        'glow-purple': '0 0 14px rgba(167, 139, 250, 0.10)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'dither-breathe': 'ditherBreathe 8s ease-in-out infinite',
        'dot-pulse': 'dotPulse 2.5s ease-in-out infinite',
        'rule-sweep': 'ruleSweep 0.6s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ditherBreathe: {
          '0%, 100%': { opacity: '0.025' },
          '50%': { opacity: '0.05' },
        },
        dotPulse: {
          '0%, 100%': { boxShadow: '0 0 0px currentColor', opacity: '1' },
          '50%': { boxShadow: '0 0 6px currentColor', opacity: '0.7' },
        },
        ruleSweep: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
};
