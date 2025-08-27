/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dmens-orange': '#FE4C02',
        'dmens-black': '#000000',
        'dmens-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Oswald', 'Arial Narrow', 'Arial', 'sans-serif'],
        'sans': ['Roboto Slab', 'serif'],
        'title': ['Oswald', 'Arial Narrow', 'Arial', 'sans-serif'],
        'body': ['Roboto Slab', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end)',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-orange': 'pulse-orange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 2px #FE4C02, 0 0 4px #FE4C02, 0 0 6px #FE4C02' },
          '100%': { 'text-shadow': '0 0 3px #FE4C02, 0 0 6px #FE4C02, 0 0 8px #FE4C02' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'pulse-orange': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(254, 76, 2, 0.7)' },
          '70%': { 'box-shadow': '0 0 0 10px rgba(254, 76, 2, 0)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};