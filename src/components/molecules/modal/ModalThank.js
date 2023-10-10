import { Button } from "components/atoms/button";
import { IconClose } from "components/icons";
import React from "react";
import ReactModal from "react-modal";

const ModalThank = () => {
  return (
    <ReactModal
      isOpen
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none px-10 pt-3 pb-12 relative max-h-[90vh] overflow-auto scroll-hidden"
    >
      <div className="flex justify-end w-full">
        <button className="flex items-center justify-center w-11 h-11">
          <IconClose></IconClose>
        </button>
      </div>

      <div className="max-w-[434px] mx-auto flex flex-col items-center justify-center text-center">
        <img src="/icon-check.svg" alt="check" />
        <h2 className="my-5 text-[22px] font-semibold">
          Thank’s for backing campaign!
        </h2>
        <p className="mb-6 text-sm text-3">
          Thank you so much for your support. We are so grateful to have the
          best backers on the planet.
        </p>
        <Button className="w-full" kind="secondary">
          Share this campaign
        </Button>
      </div>
    </ReactModal>
  );
};

export default ModalThank;
