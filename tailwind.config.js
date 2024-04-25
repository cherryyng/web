/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#c5e4d7",
        secondary: "#435846",
        tertiary: "#74b094",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      // https://coolors.co/152a25-1d5c5d-408c69-6a866e-dce1def 
      // colourpalette green
      boxShadow: {
        card: "0px 35px 120px -15px #608576",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};