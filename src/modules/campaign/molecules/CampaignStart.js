import React from "react";

const CampaignStart = ({
  children,
  text = "Start a Campaign",
  image = "/rocket-up.png",
}) => {
  return (
    <div className="flex flex-row gap-[10px] text-2xl font-bold text-2 items-center justify-center px-[60px] py-4 bg-4/10 w-full max-w-[380px] rounded-xl">
      <h1>{text}</h1>
      <img src={image} alt="rocket" />
      {children}
    </div>
  );
};

export default CampaignStart;
