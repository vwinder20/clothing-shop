import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping_bag.svg";
import { CartContext } from "../../contexts/CartContext";
const CartIcon = () => {
  const { open, setOpen, cartCount } = useContext(CartContext);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer"
    >
      <img src={ShoppingIcon} alt="#" className="w-[70%] h-[70%]" />
      <span className="absolute text-[10px]  bottom-[8px]">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
