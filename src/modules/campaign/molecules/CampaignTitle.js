import React from "react";
import classNames from "utils/classNames";

const CampaignTitle = ({
  children = "  Powered Kits Learning Boxes",
  type = "small",
}) => {
  return (
    <h3
      className={classNames(
        "font-semibold text-1",
        type === "small" ? "mb-2 text-sm" : "text-xl mb-4 font-bold"
      )}
    >
      {children}
    </h3>
  );
};

export default CampaignTitle;
