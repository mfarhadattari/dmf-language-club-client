/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        "popular-bg" : `url('./src/assets/images/home/popular.jpg')`
      }
    },
  },
  plugins: [require("daisyui")],
};
