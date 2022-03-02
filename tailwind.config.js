module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary_light: "var(--primary-light)",
      },
    },
    fontFamily: {
      display: ["MuseoSans", "Helvetica"],
    },
  },
  plugins: [],
};
