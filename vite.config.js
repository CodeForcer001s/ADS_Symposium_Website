import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
/** @type {import('tailwindcss').Config} */
export default {
  // The paths here are crucial. This configuration tells Tailwind
  // to look in the root index.html file and any .js, .ts, .jsx, or .tsx
  // file inside the src folder and its subfolders.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#facc15',
        'background': '#111111',
        'surface': '#18181b',
        'copy': '#f5f5f5',
        'copy-light': '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }
    },
  },
  plugins: [],
}