import React from "react";

const LayoutCampaignGrid = (props) => {
  const { children } = props;
  return <div className="grid w-full grid-cols-4 gap-8">{children}</div>;
};

export default LayoutCampaignGrid;
