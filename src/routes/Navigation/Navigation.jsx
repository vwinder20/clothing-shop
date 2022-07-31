import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="max-w-6xl w-full items-center justify-center flex flex-col mx-5 sm:mx-10 lg:mx-20 ">
      <div className="flex justify-between w-full items-center mt-10 mb-10">
        <div>
          <Link to="/">
            <img src="/src/assets/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex gap-20">
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
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
