import React, { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import ShoppingBag from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { open, setOpen } = useContext(CartContext);
  const HandleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="max-w-6xl w-full items-center justify-center flex flex-col mx-5 sm:mx-10 lg:mx-20 ">
      <div className="flex justify-between w-full items-center mt-10 mb-10">
        <div>
          <Link to="/">
            <img src="/src/assets/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex gap-14 items-center relative">
          <div>
            <Link to="/shop">SHOP</Link>
          </div>
          <div>
            <Link to="/contact">CONTACT</Link>
          </div>
          {currentUser ? (
            <span className="cursor-pointer" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <div>
              <Link to="/auth">SIGN IN</Link>
            </div>
          )}
          <ShoppingBag onClick={() => HandleClick} />
          {open && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
