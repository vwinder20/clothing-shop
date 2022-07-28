import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await createAuthUserWithEmailAndPassword(email, password);
      console.log("User has been created");
    } else {
      console.log("Password does not match!");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sing up with email and password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>DisplayName</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sing Up</button>
      </form>
    </div>
  );
};

export default SignUp;
