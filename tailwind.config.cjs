/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",

    // Components folder
    "./src/components/CategoryItem/CategoryItem.jsx",
    "./src/components/Directory/Directory.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant SC", "serif"],
      },
    },
  },
  plugins: [],
};
