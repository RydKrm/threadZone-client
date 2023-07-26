/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#363538",
      lightDark: "#8D8C8A",
      lightWhite: "#F6F6F6",
      darkBlue: "#408697",
      lightBlue: "#52D6F4",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

