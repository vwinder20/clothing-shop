import { createContext, useState, useEffect } from "react";

import React from "react";

export const CartContext = createContext({
  open: false,
  setOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
