import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder, children, ...rest } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium border rounded-lg resize-none text-1 placeholder:text-4 dark:border-dark-stroke dark:bg-dark-bg dark:text-white dark:placeholder:text-2 min-h-[140px] outline-none"
      placeholder={placeholder}
      {...rest}
      {...field}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
