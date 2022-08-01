import { createContext, useEffect, useState } from "react";

import React from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseCount = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeFromCart = (cartItems, product) => {
  return cartItems.filter((cartItem) => cartItem.id !== product.id);
};

export const CartContext = createContext({
  open: false,
  setOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseCountFromItem = (product) => {
    setCartItems(decreaseCount(cartItems, product));
  };
  const removeItem = (product) => {
    setCartItems(removeFromCart(cartItems, product));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const total = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(total);
    setCartCount(newCartCount);
  }, [cartItems]);
  const value = {
    open,
    setOpen,
    addItemToCart,
    cartItems,
    cartCount,
    decreaseCountFromItem,
    totalPrice,
    removeItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
