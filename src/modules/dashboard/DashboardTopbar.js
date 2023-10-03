import { Button } from "components/atoms/button";
import React from "react";
import DashboardSearch from "./DashboardSearch";
import DashboardFund from "./DashboardFund";

const DashboardTopbar = () => {
  return (
    <div className="h-[52px] flex-row w-full items-center justify-between mb-8 md:pl-3">
      <div className="flex-row flex-1 content-left gap-x-[40px]">
        <img src="/logo.svg" alt="" className="" />
        <DashboardSearch className="max-w-[436px] w-full"></DashboardSearch>
      </div>

      <div className="flex-row justify-end flex-1 h-full gap-10 content-right">
        <DashboardFund></DashboardFund>
        <Button className="w-full max-w-[191px] rounded-lg font-semibold text-white p-3 bg-secondary-20">
          Start a campain
        </Button>
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="w-[52px] h-[52px] object-cover cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
