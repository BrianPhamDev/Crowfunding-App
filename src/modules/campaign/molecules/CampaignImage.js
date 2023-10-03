import React from "react";
import classNames from "utils/classNames";

const CampaignImage = ({
  image = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
  className = "h-[158px]",
}) => {
  return (
    <div className={classNames("w-full", className)}>
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampaignImage;
