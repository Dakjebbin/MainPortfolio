
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
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.avif')",
      },
      
    },
  },
  plugins: [],
}