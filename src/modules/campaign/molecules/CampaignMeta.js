import React from "react";
import classNames from "utils/classNames";

const CampaignMeta = ({
  number = "$2000",
  text = "Raised of $1,900",
  type = "small",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h4
        className={classNames(
          "font-semibold text-2",
          type === "small" ? "text-xs" : "text-base"
        )}
      >
        {number}
      </h4>
      <div
        className={classNames(
          "font-normal text-4",
          type === "small" ? "text-xs" : "text-base"
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default CampaignMeta;
