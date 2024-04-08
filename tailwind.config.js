// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['"Gilroy"', "sans-serif"],
      },
    },
    screens: {
      nm: { min: "980px", max: "1200px" },
      md: { min: "750px", max: "980px" },
      lg: { min: "300px", max: "750px" },
      cm: { min: "300px", max: "540px" },
      xsd: { min: "100px", max: "299px" },
    },
  },
  plugins: [],
};
