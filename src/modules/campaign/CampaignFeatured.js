import React from "react";
import CampaignImage from "./molecules/CampaignImage";
import CampaignTitle from "./molecules/CampaignTitle";
import CampaignCategory from "./molecules/CampaignCategory";
import CampaignDesc from "./molecules/CampaignDesc";
import CampaignMeta from "./molecules/CampaignMeta";

const CampaignFeatured = () => {
  return (
    <div className="max-w-[1048px] w-full gap-x-8 flex items-center mb-10">
      <CampaignImage className="h-[266px] flex-1"></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory
          text="Architecture"
          className="text-sm mb-"
        ></CampaignCategory>
        <CampaignTitle type="">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="mb-5 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
          <div className="w-2/4 h-full rounded-full bg-primary-color"></div>
        </div>
        <div className="flex justify-between">
          <CampaignMeta type=""></CampaignMeta>
          <CampaignMeta
            number="173"
            text="Total backers"
            type=""
          ></CampaignMeta>
          <CampaignMeta number="30" text="Days left" type=""></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeatured;
