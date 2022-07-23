/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/App.jsx", "./src/main.jsx"],
  theme: {
    extend: {
      minWidth: {
        30: "30%",
      },
    },
  },
  plugins: [],
};
