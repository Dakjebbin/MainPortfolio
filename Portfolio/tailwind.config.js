
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, serif",
        anton: "Anton",
        zillaSlab: "Zilla Slab"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.avif')",
        "main-background": "url('/src/assets/jeremy-perkins-FsK54FVNRfM-unsplash.jpg')"
      },
      animation:{
        'fade-in': 'fadeIn 3s' 
      },

      keyframes:{
            fadeIn: {
              '0%': {opacity:0},
              '100%': {opacity:1}
            }
      }
      
    },
  },
  plugins: [],
}