import React from "react";

const BUTTON_TYPE_CLASSES = {
  default:
    "max-w-[50%] bg-black text-white hover:bg-white hover:text-black border-black",
  google: "bg-blue-500 text-white hover:bg-blue-400 border-blue-500",
  inverted: "bg-white text-black hover:bg-black hover:text-white border-black",
};
const Button = ({ children, buttonType, ...props }) => {
  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[buttonType]} text-xl w-full h-[60px]  transition duration-300 ease-in-out border font-light `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
