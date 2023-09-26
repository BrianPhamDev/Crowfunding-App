import React from "react";

const FormField = (props) => {
  const { children } = props;
  return <div className="w-full flex flex-col gap-[10px]">{children}</div>;
};

export default FormField;
