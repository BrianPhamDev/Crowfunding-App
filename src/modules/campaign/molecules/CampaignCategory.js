import React from "react";
import { IconFolder } from "components/icons";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampaignCategory = ({
  text = "Education",
  className = "items-end text-xs",
}) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex text-3 flex-row gap-x-[10px] mb-4",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span className="font-medium">{text}</span>
    </Link>
  );
};

export default CampaignCategory;
