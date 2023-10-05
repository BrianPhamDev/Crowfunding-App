import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    type = "button",
    children,
    className = "",
    isLoading = false,
    kind = "primary",
    ...rest
  } = props;

  const child = !!isLoading ? <div className="spinner"></div> : children;

  let defaultClassName =
    "flex items-center justify-center px-10 py-4 text-base font-semibold rounded-xl";

  switch (kind) {
    case "primary":
      defaultClassName = defaultClassName + " text-white bg-primary-color";

      break;
    case "secondary":
      defaultClassName =
        defaultClassName + " text-secondary-color bg-secondary-80";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName +
        " text-secondary-color bg-secondary-color/10" +
        " w-full px-7 py-[14px]";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={classNames(
        defaultClassName,
        className,
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      )}
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
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
