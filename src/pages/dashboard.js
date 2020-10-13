import React from "react";
import { MainDashboard, SideBar, MainNavbar } from "../component/dashboard";

export const DashboardPage = () => {
  return (
    <div className="main-panel ps ps--active-y">
      <SideBar />
      <MainNavbar />
      <MainDashboard />
    </div>
  );
};
