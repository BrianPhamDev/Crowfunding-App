import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/molecules/ErrorComponent";
import classNames from "utils/classNames";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder,
    children,
    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <div className="w-full">
      <input
        id={name}
        type={type}
        className={classNames(
          "w-full px-6 py-4 text-sm rounded-lg font-medium border text-1 placeholder:text-4 dark:border-dark-stroke dark:bg-dark-bg dark:text-white dark:placeholder:text-2",
          error.length > 0 ? `border-error text-error` : `border-whitsh-strock`,
          children ? "pr-16" : ""
        )}
        placeholder={error.length > 0 ? "" : placeholder}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span className="absolute right-0 text-sm font-medium -translate-y-1/2 pointer-events-none left-6 top-1/2 text-error error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute -translate-y-1/2 cursor-pointer select-none top-1/2 right-6">
          {children}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
