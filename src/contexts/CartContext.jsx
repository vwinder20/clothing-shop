import { createContext, useState } from "react";

import React from "react";

const addCartItem = (cartItems, ProductToAdd) => {
  const quantity = 0;
  if (!cartItems.includes(ProductToAdd)) {
    quantity + 1;
    return [...cartItems, ProductToAdd];
  }
  return cartItems;
};

export const CartContext = createContext({
  open: false,
  setOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const quantity = cartItems.length;
  console.log(cartItems);
  const addItemToCart = (ProductToAdd) => {
    setCartItems(addCartItem(cartItems, ProductToAdd));
  };
  const value = { open, setOpen, addItemToCart, quantity, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
