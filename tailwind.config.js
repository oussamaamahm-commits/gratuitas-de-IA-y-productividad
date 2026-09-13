/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#0A0A0A',
          deep: '#050505',
          gray: '#1A1A1A',
        },
        matrix: {
          DEFAULT: '#00FF41',
          dim: 'rgba(0,255,65,0.6)',
          faint: 'rgba(0,255,65,0.15)',
          ghost: 'rgba(0,255,65,0.05)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        code: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}
