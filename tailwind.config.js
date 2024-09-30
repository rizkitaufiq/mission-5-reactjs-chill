/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#E7E3FC3B",
        primary: "#3D4142",
        gray: "#C1C2C4",
        btnHover: "#E0E0E0",
        mainBG: "#22282A",
        textPrimary: "#3254FF",
      },
    },
  },
  plugins: [],
};
