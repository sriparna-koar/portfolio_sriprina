/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
 
        primary: colors.purple,
        secondary: colors.pink,
        sky: colors.lightBlue, // Update `lightBlue` to `sky`
        stone: colors.warmGray, // Update `warmGray` to `stone`
        neutral: colors.trueGray, // Update `trueGray` to `neutral`
        gray: colors.coolGray, // Update `coolGray` to `gray`
        slate: colors.blueGray, // Update `blueGray` to `slate`
      },
    },
  },
  plugins: [],
};
