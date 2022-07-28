import React from "react";

const FormInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full ">
      <label className="text-xl">{label}</label>
      <input
        className="mt-3 outline-none bg-inherit focus:bg-slate-400/30 transition-all duration-200 ease-in-out"
        placeholder={label.toLowerCase()}
        {...props}
      />
    </div>
  );
};

export default FormInput;
