import React from "react";
import Button from "../Button";
const CartDropdown = () => {
  return (
    <div className="left-[40%] top-[120%] absolute w-[240px] h-[340px] flex p-5 border flex-col border-black bg-white  z-10">
      <div className="h-[240px] flex flex-col overflow-hidden" />
      <Button buttonType="default">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
