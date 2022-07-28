import React from "react";
import {
  signInWithPopupFunc,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPopupFunc();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="flex w-full mt-20 flex-col gap-10 md:flex-row ">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
