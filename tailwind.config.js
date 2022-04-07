module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: true, // or 'media' or 'class'
  colors: {
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
