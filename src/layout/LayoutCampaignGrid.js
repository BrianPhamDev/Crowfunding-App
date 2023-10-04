import React from "react";

const LayoutCampaignGrid = (props) => {
  const { children, type = "default" } = props;
  if (type !== "default")
    return <div className="grid grid-cols-1 gap-10">{children}</div>;
  return <div className="grid w-full grid-cols-4 gap-8">{children}</div>;
};

export default LayoutCampaignGrid;
