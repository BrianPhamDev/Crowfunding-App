import React from "react";

const Checkbox = (props) => {
  const {
    name,
    checked,
    onClick = () => {},
    children,
    className,
    ...rest
  } = props;
  return (
    <div className={`flex justify-center item-center gap-x-5 ${className}`}>
      <div
        className={`inline-flex items-center justify-center w-5 h-5 hover:cursor-pointer border rounded text-white  ${
          !!checked ? "bg-primary-color border-primary-color" : "border-1"
        }`}
        onClick={onClick}
        {...rest}
      >
        <input
          type="checkbox"
          className="hidden"
          name={name}
          onChange={() => {}}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      <label className="cursor-pointer" onClick={onClick}>
        {children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {};
export default Checkbox;
