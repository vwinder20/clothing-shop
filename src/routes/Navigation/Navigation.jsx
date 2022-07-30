import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    console.log(currentUser);
    // TODO fix bug with fetching user-context, navigation context doesn't see currentUser data
  }, []);
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
            <span onClick={signOutUser}>SIGN OUT</span>
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
