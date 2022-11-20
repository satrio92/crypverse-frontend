/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      }, 
      colors: {
        main: "#050915",
        clifford: "#da373d",
        bluefish: "#5CE1E6",
      }
    },
  },
  plugins: [],
}
