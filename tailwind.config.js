/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        myShadowL: "4.1px -5px 0 0 white",
        myShadowR: "-4.1px -5px 0 0 white",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
})
