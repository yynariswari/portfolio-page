/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}", // scan semua file di src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // biru khas Tailwind (kamu bisa ganti)
        secondary: "#9333ea", // ungu
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
