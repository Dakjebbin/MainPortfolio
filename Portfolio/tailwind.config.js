
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
      },
      
    },
  },
  plugins: [],
}