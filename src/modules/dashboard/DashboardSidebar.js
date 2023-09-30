import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";

const sidebarLink = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    to: "/",
    onClick: () => {},
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    to: "/campaign",
    onClick: () => {},
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    to: "/payment",
    onClick: () => {},
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    to: "/withdraw",
    onClick: () => {},
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    to: "/profile",
    onClick: () => {},
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    to: "/logout",
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    to: "/light",
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] md:rounded-3xl md:py-10 bg-white shadow-nav flex-col gap-y-4 md:gap-y-8 md:items-center md:justify-center items-start flex-shrink-0 pb-8 text-3">
      {sidebarLink.map((item, index) => (
        <NavLink
          to={item.to}
          className={classNames(
            "flex-row items-center w-full gap-5 px-5 py-4 rounded-lg md:justify-center md:w-12 md:h-12 group hover:bg-primary-extra",
            index === sidebarLink.length - 1 && "md:mt-[135px]",
            ({ isActive }) => (isActive ? "active" : "inactive")
          )}
          key={item.to}
        >
          <span className="flex items-center justify-center group-hover:text-primary-color ">
            {item.icon}
          </span>
          <span className="text-sm font-semibold group-hover:text-primary-color md:hidden">
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
