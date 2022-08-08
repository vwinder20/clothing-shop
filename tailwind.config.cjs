/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",

    // Components folder
    "./src/components/DirectoryItem/DirectoryItem.jsx",
    "./src/components/Directory/Directory.jsx",
    "./src/routes/Navigation/Navigation.jsx",
    "./src/components/SignUp/SignUp.jsx",
    "./src/components/SignIn/SignIn.jsx",
    "./src/routes/Authentication/Authentication.jsx",
    "./src/components/FormInput/FormInput.jsx",
    "./src/components/Button/Button.jsx",
    "./src/components/ProductCard/ProductCard.jsx",
    "./src/routes/Shop/Shop.jsx",
    "./src/components/CartIcon",
    "./src/components/CartDropdown/CartDropdown.jsx",
    "./src/components/CartItem/CartItem.jsx",
    "./src/routes/Checkout/Checkout.jsx",
    "./src/components/CheckoutItem/CheckoutItem.jsx",
    "./src/components/CategoryPreview/CategoryPreview.jsx",
    "./src/routes/Category/Category.jsx",
  ],
  theme: {
    // screens: {
    //   mobile: "320px",
    //   tablet: "768",
    // },
    extend: {
      fontFamily: {
        montseerat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
