import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="flex justify-between">
      <img className="w-[30%]" src={imageUrl} alt={`${name}`} />
      <div className="flex flex-col items-center justify-center text-sm ml-3">
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
