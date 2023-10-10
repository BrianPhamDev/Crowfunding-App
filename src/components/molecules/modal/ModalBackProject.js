import { Button } from "components/atoms/button";
import { IconClose } from "components/icons";
import CampaignPerk from "modules/campaign/molecules/CampaignPerk";
import React from "react";
import ReactModal from "react-modal";

const ModalBackProject = () => {
  return (
    <ReactModal
      isOpen={false}
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none px-10 pt-3 pb-12 relative max-h-[90vh] overflow-auto scroll-hidden"
    >
      <div className="flex justify-end w-full">
        <button className="flex items-center justify-center w-11 h-11">
          <IconClose></IconClose>
        </button>
      </div>
      <div className="">
        <h2 className="mb-10 text-2xl font-bold text-center">
          Back this project
        </h2>
        <p className="mb-2 text-sm font-medium text-2">
          Enter the contribute amount
        </p>
        <input
          placeholder="$10"
          name="amount"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-whitsh-strock"
        ></input>
        <p className="mb-5 text-sm text-3">
          Contribution are not associatied with perks
        </p>
        <Button>Continue</Button>
      </div>

      <div className="flex flex-col gap-10 mt-16">
        <CampaignPerk></CampaignPerk>
        <CampaignPerk></CampaignPerk>
        <CampaignPerk></CampaignPerk>
      </div>
    </ReactModal>
  );
};

export default ModalBackProject;
