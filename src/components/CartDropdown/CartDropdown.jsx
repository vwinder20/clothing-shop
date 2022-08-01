import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import CartItem from "../CartItem";
import { CartContext } from "../../contexts/CartContext";
const CartDropdown = () => {
  const { cartItems, setOpen } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="left-[40%] top-[120%] absolute w-[240px] h-[340px] flex p-5 border flex-col border-black bg-white  z-10">
      <div className="h-[240px] flex flex-col overflow-scroll overflow-x-hidden gap-2">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={() => setOpen(!open)} buttonType="default">
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
