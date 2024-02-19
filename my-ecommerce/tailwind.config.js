const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      extends: {},
    },
  },
  plugins: [],
});
