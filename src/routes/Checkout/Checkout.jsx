import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/CheckoutItem";
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <section className="flex flex-col gap-5 w-full">
      <header className="grid grid-cols-5 w-full">
        <div className="flex justify-center">Product</div>
        <div className="flex justify-center">Description</div>
        <div className="flex justify-center">Quantity</div>
        <div className="flex justify-center">Price</div>
        <div className="flex justify-center">Remove</div>
      </header>
      <div className="w-full bg-black h-[0.3px]"></div>
      <div className="flex flex-col gap-5 w-full flex-1">
        {cartItems.map((item) => {
          return <CheckoutItem product={item} />;
        })}
      </div>
      <div className="w-full bg-black h-[0.3px]"></div>
      <h2 className="text-3xl mx-auto mt-4">TOTAL PRICE: {totalPrice}$</h2>
    </section>
  );
};

export default Checkout;
