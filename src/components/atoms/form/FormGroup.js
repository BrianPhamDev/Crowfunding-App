import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 mb-4 md:mb-5 md:gap-3">{children}</div>
  );
};

export default FormGroup;
