import { defaultImage } from "constants/global";
import React from "react";
import CampaignTitle from "./CampaignTitle";
import { Button } from "components/atoms/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src={defaultImage}
          className="h-[232px] object-cover rounded-xl w-full"
          alt=""
        />
        <div className="p-5">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary-20">
            Featured
          </span>
          <CampaignTitle className="mb-1 text-xl font-semibold">
            Special One Camera
          </CampaignTitle>
          <div className="flex items-center mb-4 gap-x-3">
            <span className="text-xl font-bold text-1">$2,724 USD</span>{" "}
            <span className="text-sm font-medium line-through text-error">
              $1,504 USD
            </span>
            <span className="text-sm font-medium text-error">(12% OFF)</span>
          </div>
          <div className="flex flex-col mb-4 gap-y-1">
            <span className="font-medium ">Estimated Shipping</span>{" "}
            <span className="text-text2">October 2022</span>
          </div>
          <p className="mb-4 text-2">
            <strong className="text-1">05</strong> claimed
          </p>
          <p className="text-2">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full text-white bg-secondary-20">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
