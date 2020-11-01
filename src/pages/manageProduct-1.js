import React, { Component } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { ManageProductAInputForm } from "../component/managePages";

export class ManageProductAPage extends Component {
  render() {
    return (
      <div className="main-panel ps ps--active-y">
        <SideBar />
        <MainNavbar />
        <ManageProductAInputForm data={this.props.data[0]} />
      </div>
    );
  }
}
