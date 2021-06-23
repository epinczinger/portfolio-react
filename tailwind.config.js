module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        "flor-gray": "#363A40",
        "flor-green": "#5FC7BA",
        "flor-gray2": "#4C525B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
