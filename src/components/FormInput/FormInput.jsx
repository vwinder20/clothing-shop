import React from "react";

const FormInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col ">
      <label className="text-xl">{label}</label>
      <input
        className="mt-3 outline-none bg-inherit	"
        placeholder={label.toLowerCase()}
        {...props}
      />
    </div>
  );
};

export default FormInput;
