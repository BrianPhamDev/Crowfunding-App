import { Button } from "components/atoms/button";
import { IconPlus } from "components/icons";
import Heading from "components/molecules/Heading";
import LayoutCampaignGrid from "layout/LayoutCampaignGrid";
import CampaignFeatured from "modules/campaign/CampaignFeatured";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-10 bg-white rounded-3xl max-h-[154px] py-8 px-10">
        <div className="flex flex-row gap-6">
          <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]  bg-secondary-40 rounded-full flex items-center justify-center text-white">
            <IconPlus></IconPlus>
          </div>
          <div className="flex flex-col flex-1 text-1">
            <h1 className="mb-1 text-sm font-semibold md:text-xl md:pb-2">
              Create Your Campaign
            </h1>
            <p className="text-xs md:text-sm text-3 md:pb-1 mb-[10px]">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link
              to="/"
              className="text-xs font-normal md:text-sm text-primary-color"
            >
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Button className="" kind="ghost" href="/start-campaign">
            Create a campaign
          </Button>
        </div>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <LayoutCampaignGrid type="">
        <CampaignFeatured></CampaignFeatured>
        <CampaignFeatured></CampaignFeatured>
        <CampaignFeatured></CampaignFeatured>
        <CampaignFeatured></CampaignFeatured>
      </LayoutCampaignGrid>
      <Button kind="ghost" className="max-w-[200px] mx-auto">
        See more
      </Button>
    </>
  );
};

export default CampaignPage;
