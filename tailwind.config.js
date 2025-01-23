/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de7119",
        secondary: "#116979",
        light: "#dee3e2",
        accent: "#18b0b0",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        oswald: ["Oswald", "serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
