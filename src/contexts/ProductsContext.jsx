import { createContext, useState, useEffect } from "react";

import React from "react";

export const ProductsContext = createContext({
  products: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  useEffect(() => {
    const shopData = async () => {
      const response = await fetch("http://localhost:4001/shop")
        .then((respData) => respData.json())
        .then((data) => setProducts(data));
    };
    shopData();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
