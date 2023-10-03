import { IconClose, IconSearch } from "components/icons";
import { defaultImage } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = (props) => {
  const { className } = props;
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50 w-full">
      <div
        className={`flex-row items-center h-full bg-white rounded-full search pl-6 pr-2 py-[10px] shadow-nav  ${className}`}
      >
        <input
          className="flex-1 text-sm outline-none span placeholder:text-4 text-1"
          placeholder="Do fundrise now"
          type="text"
        ></input>
        <button
          className="w-full max-w-[72px] h-[40px] bg-primary-color items-center flex justify-center rounded-full flex-shrink-0 ml-5"
          type="button"
        >
          <IconSearch></IconSearch>
        </button>
      </div>

      {showSearch && (
        <div className="search-result w-full lg:w-[843px] absolute top-full left-0 bg-white z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 pl-6 mb-5 search-top bg-whitsh-gray_soft rounded-xl">
            <h4 className="text-sm font-medium underline">
              See all 10,124 fundraisier
            </h4>
            <button className="w-[72px] h-[50px] flex justify-center items-center bg-error/20 rounded-xl text-error">
              <IconClose></IconClose>
            </button>
          </div>
          <div className="flex flex-col gap-5 pl-6 mb-6 search-middle">
            {SearchItem()}
            {SearchItem()}
            {SearchItem()}
            {SearchItem()}
            {SearchItem()}
          </div>
          <div className="flex flex-col gap-4 pl-6 text-sm">
            <h3 className="font-semibold ">Related searchs</h3>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-medium">education</span> fund
              </p>
              <p>
                <span className="font-medium">education</span> fund
              </p>
              <p>
                <span className="font-medium">education</span> fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-5">
      <img
        src={defaultImage}
        alt=""
        className="w-[50px] rounded-lg h-[50px] object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="flex-1 text-sm">
          <span className="font-semibold">Education</span> fund for Durgham
          Family
        </h3>
        <p className="text-sm text-3">By Durgham Family</p>
      </div>
    </div>
  );
}
export default DashboardSearch;
