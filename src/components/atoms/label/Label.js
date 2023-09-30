import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Label = ({ children, className = "", htmlFor = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "inline-block text-sm font-medium cursor-pointer text-2 dark:text-3",
        className
      )}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
