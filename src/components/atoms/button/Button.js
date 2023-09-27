import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    type = "button",
    children,
    className = "",
    isLoading = false,
    ...rest
  } = props;

  const child = !!isLoading ? <div className="spinner"></div> : children;

  return (
    <button
      type={type}
      className={`flex items-center justify-center p-3 text-base font-semibold text-white rounded-xl bg-primary-color min-h-[56px] ${className} ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Button;
