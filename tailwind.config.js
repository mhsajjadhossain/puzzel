/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        verticalSlide: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-33%)" },
          "100%": { transform: "translateY(-66%)" },
        },
      },
      animation: {
        verticalSlide: "verticalSlide 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
