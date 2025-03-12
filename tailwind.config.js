/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 15s infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow: '0 0 10px rgba(255, 107, 107, 0.8), 0 0 20px rgba(255, 107, 107, 0.8), 0 0 30px rgba(255, 107, 107, 0.8)',
          },
          '100%': {
            textShadow: '0 0 20px rgba(78, 205, 196, 0.8), 0 0 30px rgba(78, 205, 196, 0.8), 0 0 40px rgba(78, 205, 196, 0.8)',
          },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}