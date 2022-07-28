import React from "react";
import {
  signInWithPopupFunc,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/SignUp";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPopupFunc();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="flex w-full justify-evenly mt-20">
      <div>
        <h1>Sing In with Google</h1>
        <button onClick={logGoogleUser}>Sign In</button>
      </div>
      <SignUp />
    </div>
  );
};

export default SingIn;
