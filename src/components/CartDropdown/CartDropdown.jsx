import React, { useContext } from "react";
import Button from "../Button";
import CartItem from "../CartItem";
import { CartContext } from "../../contexts/CartContext";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="left-[40%] top-[120%] absolute w-[240px] h-[340px] flex p-5 border flex-col border-black bg-white  z-10">
      <div className="h-[240px] flex flex-col overflow-scroll overflow-x-hidden gap-2">
        {cartItems
          ? cartItems.map((item) => {
              const { id, name, imageUrl, price } = item;
              return (
                <div key={id} className="flex justify-between">
                  <img src={imageUrl} alt="#" className=" w-[30%] h-[95%]" />
                  <div className="flex items-end flex-col mr-1 justify-between">
                    <h2 className="text-sm">{name}</h2>
                    <span>{price}$</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <Button buttonType="default">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
