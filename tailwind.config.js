/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        light: '#ffffff',
        accent1: '#00ffe7',
        accent2: '#ff75b5',
        accent3: '#9945FF', // New accent color for gradients
        'accent1-light': '#0066cc', // Better visibility in light mode
        'accent2-light': '#cc0066', // Better visibility in light mode
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      // Animation delay utility classes
      extend: {
        animation: {
          'delay-2000': 'animation-delay-2000',
          'delay-4000': 'animation-delay-4000',
        },
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}