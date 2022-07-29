import React from "react";
import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithPopupFunc,
  singInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../FormInput";
import Button from "../Button/Button";
import { UserContext } from "../../contexts/UserContext";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await singInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(await user);
      console.log(currentUser);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/worng-password":
          alert("Incorrect email or passowrd!");
          break;
        case "auth/user-not-fount":
          alert("No user with this email!");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithPopupFunc();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl mb-1 ">I already have an account</h1>
      <p className="mb-10">Sing in with your email and password</p>
      <form className="flex flex-col gap-10 bg-white " onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="flex gap-7 w-full">
          <Button buttonType="inverted" type="submit" onClick={handleSubmit}>
            SING IN
          </Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">
            GOOGLE SING IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
