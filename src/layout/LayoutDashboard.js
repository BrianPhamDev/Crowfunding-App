import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = (props) => {
  const { children } = props;
  return (
    <div className="p-10 bg-whitsh-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="">
        <DashboardSidebar></DashboardSidebar>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
