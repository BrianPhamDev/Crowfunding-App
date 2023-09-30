import { IconSearch } from "components/icons";
import React from "react";

const DashboardSearch = (props) => {
  const { className } = props;
  return (
    <div
      className={`flex-row items-center h-full bg-white rounded-full search pl-6 pr-2 py-[10px] shadow-nav ${className}`}
    >
      <input
        className="flex-1 outline-none span placeholder:text-4 text-1"
        placeholder="Do fundrise now"
      ></input>
      <div className="w-full max-w-[72px] h-[40px] bg-primary-color items-center flex justify-center rounded-full flex-shrink-0 ml-5">
        <IconSearch></IconSearch>
      </div>
    </div>
  );
};

export default DashboardSearch;
