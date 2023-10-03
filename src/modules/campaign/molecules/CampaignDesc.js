import React from "react";
import classNames from "utils/classNames";

const CampaignDesc = ({
  children = "Fun, durable and reusable boxes with eco-friendly options.",
  className = "mb-3 text-xs",
}) => {
  return (
    <p className={classNames("font-normal text-3", className)}>{children}</p>
  );
};

export default CampaignDesc;
