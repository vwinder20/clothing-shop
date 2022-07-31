import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping_bag.svg";
import { CartContext } from "../../contexts/CartContext";
const CartIcon = () => {
  const { open, setOpen, quantity } = useContext(CartContext);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer"
    >
      <img src={ShoppingIcon} alt="#" className="w-[35px] h-[35px]" />
      <span className="absolute text-[10px] font-bold bottom-[10px]">
        {quantity}
      </span>
    </div>
  );
};

export default CartIcon;
