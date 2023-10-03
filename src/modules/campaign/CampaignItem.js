import React from "react";
import CampaignCategory from "./molecules/CampaignCategory";
import CampaignMeta from "./molecules/CampaignMeta";
import CampaignDesc from "./molecules/CampaignDesc";
import CampaignTitle from "./molecules/CampaignTitle";
import CampaignAuthor from "./molecules/CampaignAuthor";
import CampaignImage from "./molecules/CampaignImage";

const CampaignItem = () => {
  //   const {} = props;
  return (
    <div className="w-[256px] flex flex-col bg-white rounded-2xl">
      <CampaignImage></CampaignImage>
      <div className="flex flex-col w-full px-5 py-4">
        <CampaignCategory></CampaignCategory>
        <CampaignTitle></CampaignTitle>
        <CampaignDesc></CampaignDesc>
        <div className="flex flex-row justify-between mb-4 gap-x-3">
          <CampaignMeta></CampaignMeta>
          <CampaignMeta></CampaignMeta>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
