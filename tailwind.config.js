/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        larabie: ["Larabie", "cursive"],
        larabieBold: ["Larabie-Bold", "cursive"],
        baron: ["Baron", "cursive"],
      },
      colors: {
        accent: "#00ffff",
        primary: "rgb(138, 66, 255)",
      },
    },
  },
  plugins: [ require('flowbite/plugin'),],
};
