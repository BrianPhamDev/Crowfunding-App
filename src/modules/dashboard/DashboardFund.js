import { IconArrowDown, IconUp } from "components/icons";
import React from "react";

const DashboardFund = () => {
  return (
    <div className="flex-row items-center gap-2 cursor-pointer">
      <IconUp></IconUp>
      <span className="font-semibold text-2">Fundraising for</span>
      <IconArrowDown></IconArrowDown>
    </div>
  );
};

export default DashboardFund;
