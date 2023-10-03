import { defaultImage } from "constants/global";
import React from "react";

const CampaignAuthor = (props) => {
  const { image = defaultImage, author = "Mahfuzul Nabil" } = props;
  return (
    <div className="flex flex-row items-center text-xs">
      <div className="w-[30px] h-[30px]">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <p className="ml-2 text-3">
        by <span className="pl-[2px] font-semibold text-2">{author}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
