import React from "react";

const Button = (props) => {
  const { type = "button", children, className = "" } = props;
  return (
    <button
      type={type}
      className={`flex items-center justify-center p-3 text-base font-semibold text-white rounded-xl bg-primary-color ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
