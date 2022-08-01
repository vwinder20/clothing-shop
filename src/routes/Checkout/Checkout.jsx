import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const Checkout = () => {
  const {
    cartItems,
    decreaseCountFromItem,
    addItemToCart,
    totalPrice,
    removeItem,
  } = useContext(CartContext);
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
        {cartItems.map((product) => {
          const { id, name, imageUrl, quantity, price } = product;
          return (
            <div key={id} className="grid grid-cols-5 w-full">
              <img className="flex " src={imageUrl} alt="" />
              <div className="flex items-center justify-center">{name}</div>
              <div className="flex items-center justify-center gap-5">
                <button onClick={() => decreaseCountFromItem(product)}>
                  -
                </button>
                {quantity}
                <button onClick={() => addItemToCart(product)}>+</button>
              </div>
              <div className="flex items-center justify-center">
                {price * quantity}
              </div>
              <div
                className="flex items-center justify-center"
                onClick={() => removeItem(product)}
              >
                <img
                  className="w-[25%] "
                  src="./images/etc/remove.png"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-3xl mx-auto mt-4">TOTAL PRICE: ${totalPrice}</h2>
    </section>
  );
};

export default Checkout;
