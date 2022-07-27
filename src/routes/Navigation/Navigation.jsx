import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="max-w-6xl w-full items-center justify-center flex flex-col ">
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
          <div>
            <Link to="/sign-in">SIGN IN</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
