import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, name, type = "text" } = props;
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <div className="relative">
      <input
        type={type}
        className="w-full px-6 py-4 text-sm font-medium border border-whitsh-strock text-1 placeholder:text-4"
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  type: PropTypes.string,
};

export default Input;
