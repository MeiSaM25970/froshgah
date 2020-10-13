import React from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { ProductRegistration } from "../component/product";

export const ProductRegisterPage = () => {
  return (
    <div className="main-panel ps ps--active-y">
      <MainNavbar />
      <SideBar />
      <ProductRegistration />
    </div>
  );
};
