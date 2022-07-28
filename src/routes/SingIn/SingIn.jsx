import React from "react";
import {
  signInWithPopupFunc,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/SignUp";
import { useState } from "react";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPopupFunc();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUp />
    </div>
  );
};

export default SingIn;
