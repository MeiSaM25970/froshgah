import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { MainNavbar, SideBar } from "../component/dashboard";
import { ProductRegistration } from "../component/product";

export const ProductRegisterPage = (props) => {
  const history = useHistory();
  return (
    <Fragment>
      <SideBar {...props} />
      <div className="main-panel ps ps--active-y">
        <MainNavbar {...props} />

        <ProductRegistration {...props} history={history} />
      </div>
    </Fragment>
  );
};
