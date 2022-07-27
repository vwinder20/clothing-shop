import { async } from "@firebase/util";
import React from "react";
import {
  signInWithPopupFunc,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPopupFunc();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sing In page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SingIn;
