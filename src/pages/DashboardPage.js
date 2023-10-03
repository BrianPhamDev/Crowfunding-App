import Heading from "components/molecules/Heading";
import LayoutCampaignGrid from "layout/LayoutCampaignGrid";
import LayoutDashboard from "layout/LayoutDashboard";
import React from "react";
import { v4 } from "uuid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignFeatured from "modules/campaign/CampaignFeatured";

const DashboardPage = () => {
  return (
    <div>
      <LayoutDashboard>
        <Heading number={4}>Your campaign</Heading>
        <CampaignFeatured></CampaignFeatured>
        <Heading>Popular campaign</Heading>
        <LayoutCampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </LayoutCampaignGrid>
      </LayoutDashboard>
    </div>
  );
};

export default DashboardPage;
