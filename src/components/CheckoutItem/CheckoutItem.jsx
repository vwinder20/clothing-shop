import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const CheckoutItem = ({ product }) => {
  const { decreaseCountFromItem, addItemToCart, removeItem } =
    useContext(CartContext);
  const { id, name, imageUrl, quantity, price } = product;
  return (
    <div key={id} className="grid grid-cols-5 w-full">
      <img className="flex " src={imageUrl} alt="" />
      <div className="flex items-center justify-center text-xl">{name}</div>
      <div className="flex items-center justify-center gap-5 text-lg">
        <img
          className="w-[10%] cursor-pointer transtition-all ease-in-out duration-300 hover:w-[12%]"
          src="./images/etc/arrow.png "
          onClick={() => decreaseCountFromItem(product)}
          style={{ transform: "rotate(180deg)" }}
        />
        {quantity}
        <img
          className="w-[10%] cursor-pointer transtition-all ease-in-out duration-300 hover:w-[12%]"
          src="./images/etc/arrow.png"
          onClick={() => addItemToCart(product)}
        />
      </div>
      <div className="flex items-center justify-center text-xl">
        {price * quantity}$
      </div>
      <div
        className="flex items-center justify-center"
        onClick={() => removeItem(product)}
      >
        <img
          className="w-[20%] cursor-pointer  "
          src="./images/etc/remove.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CheckoutItem;
