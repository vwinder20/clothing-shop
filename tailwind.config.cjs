/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",

    // Components folder
    "./src/components/CategoryItem/CategoryItem.jsx",
    "./src/components/Directory/Directory.jsx",
    "./src/routes/Navigation/Navigation.jsx",
    "./src/components/SignUp/SignUp.jsx",
    "./src/routes/SingIn/SingIn.jsx",
    "./src/components/FormInput/FormInput.jsx",
    "./src/components/Button/Button.jsx",
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
