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
        "popular-class-bg": `url('./src/assets/images/home/popular-class.jpg')`,
        "popular-instructor-bg": `url('./src/assets/images/home/popular-instructor.jpg')`,
      },
    },
  },
  plugins: [require("daisyui")],
};
