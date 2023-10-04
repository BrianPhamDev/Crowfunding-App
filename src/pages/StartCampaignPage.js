import LayoutDashboard from "layout/LayoutDashboard";
import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React from "react";

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="px-16 py-10 bg-white rounded-xl">
        <CampaignAddNew></CampaignAddNew>
      </div>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
