import React, { Component, Fragment } from "react";
import { MainDashboard, MainNavbar } from "../component/dashboard";
import { SideBar } from "../component/dashboard/sidebar";

export class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <SideBar />
        <div className="main-panel ps ps--active-y">
          <MainNavbar />
          <MainDashboard userInfo={this.props.userInfo} />
        </div>
      </Fragment>
    );
  }
}
