import { createContext, useState, useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signOutUser,
} from "../utils/firebase/firebase";

import { onAuthStateChangedListener } from "../utils/firebase/firebase";
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => setCurrentUser(user));
    return unsub;
  }, []);
  console.log(currentUser);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
