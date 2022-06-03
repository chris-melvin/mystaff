module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "460px",
        tablet: "830px",
      },
      colors: {
        primary: "#E8743D",
        darkPrimary: "#1D3557",
        darkSecondary: "#14213D",
        light: {
          100: "#808080",
          200: "#4D4D4D",
        },
        darkMode: "#219ebc",
        lightMode: "#ffb703",
        blue: "#50B9F4",
      },
      boxShadow: {
        custom: "0px 3px 10px 1px rgba(0, 0, 0, 0.25);",
      },
    },
    plugins: [],
  },
};
