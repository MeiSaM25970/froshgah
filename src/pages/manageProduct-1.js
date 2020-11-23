import React, { Component, Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { ManageProductAInputForm } from "../component/managePages";

export class ManageProductAPage extends Component {
  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <ManageProductAInputForm data={this.props.data[0]} />
        </div>
      </Fragment>
    );
  }
}
