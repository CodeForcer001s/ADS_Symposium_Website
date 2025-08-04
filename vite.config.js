// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // ... your existing colors, fontFamily, etc.

      // Add this new animation and keyframes block
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        // New animations from FuturisticHero
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'fade-in-down': 'fadeInDown 0.8s ease-out both',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 4.5s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'connection-pulse': 'connectionPulse 2s ease-in-out infinite',
        'hologram-shimmer': 'hologramShimmer 3s infinite',
      },
      keyframes: {
        // ... your existing text-gradient keyframe ...

        // New keyframes
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 20px #00f5ff80, 0 0 40px #00f5ff40, 0 0 60px #00f5ff20' },
          '50%': { textShadow: '0 0 30px #00f5ff, 0 0 60px #00f5ff80, 0 0 90px #00f5ff40' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        connectionPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        hologramShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}