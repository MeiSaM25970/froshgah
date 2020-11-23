import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Categories } from "../component/categories";
import { MainNavbar, SideBar } from "../component/dashboard";

export const CategoriesPage = (props) => {
  const history = useHistory();
  return (
    <Fragment>
      <SideBar {...props} />
      <div className="main-panel ps ps--active-y">
        <MainNavbar {...props} />

        <Categories {...props} history={history} />
      </div>
    </Fragment>
  );
};
