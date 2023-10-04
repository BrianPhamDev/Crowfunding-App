import React from "react";
import { useDropdown } from "./dropdown-context";

const Select = ({ placeholder = "", className }) => {
  const { handleToggleDropdown, show } = useDropdown();
  return (
    <>
      <div
        className={`flex items-center justify-between p-5 cursor-pointer text-sm rounded-lg h-[54px] font-medium border text-4 placeholder:text-4 dark:border-dark-stroke dark:bg-dark-bg dark:text-white dark:placeholder:text-2 ${className}`}
        onClick={handleToggleDropdown}
      >
        <span>{placeholder}</span>

        <span>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </div>
    </>
  );
};

export default Select;
