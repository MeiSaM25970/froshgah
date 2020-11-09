import React, { Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { ProductRegistration } from "../component/product";

export const ProductRegisterPage = () => {
  return (
    <Fragment>
      <SideBar />
      <div className="main-panel ps ps--active-y">
        <MainNavbar />

        <ProductRegistration />
      </div>
    </Fragment>
  );
};
