import React from "react";
import CampaignImage from "./molecules/CampaignImage";
import { Button } from "components/atoms/button";
import CampaignMeta from "./molecules/CampaignMeta";
import CampaignTitle from "./molecules/CampaignTitle";
import CampaignCategory from "./molecules/CampaignCategory";
import CampaignDesc from "./molecules/CampaignDesc";
import CampaignViewAuthor from "./molecules/CampaignViewAuthor";
import CampaignSupport from "./molecules/CampaignSupport";
import CampaignPerk from "./molecules/CampaignPerk";
import CampaignItem from "./CampaignItem";
import LayoutCampaignGrid from "layout/LayoutCampaignGrid";

const CampaignView = () => {
  //   const { control } = useForm({ mode: "onSubmit", defaultValues: {} });
  return (
    <>
      <div className="h-[140px] relative w-full rounded-3xl overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1606636660488-16a8646f012c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 overlay-banner "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-bold text-[40px] text-white">Education</h1>
        </div>
      </div>

      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage className="h-[398px] mb-8"></CampaignImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory
            text="Architecture"
            className="text-sm"
          ></CampaignCategory>
          <CampaignTitle type="">
            Remake - We Make architecture exhibition
          </CampaignTitle>
          <CampaignDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDesc>
          <CampaignViewAuthor></CampaignViewAuthor>
          <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
            <div className="w-2/4 h-full rounded-full bg-primary-color"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampaignMeta type=""></CampaignMeta>
            <CampaignMeta type=""></CampaignMeta>
            <CampaignMeta type=""></CampaignMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button className="text-white bg-primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          {/* <CampaignSupport></CampaignSupport> */}
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <LayoutCampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </LayoutCampaignGrid>
    </>
  );
};

export default CampaignView;
