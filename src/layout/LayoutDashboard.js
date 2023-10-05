import Overlay from "components/atoms/Overlay";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import { Outlet } from "react-router-dom";

const LayoutDashboard = (props) => {
  const { children } = props;
  return (
    <div className="w-full p-10 bg-whitsh-lite">
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex-row items-start gap-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
