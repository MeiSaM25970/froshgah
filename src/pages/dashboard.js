import React, { Component, Fragment } from "react";
import { MainDashboard, MainNavbar } from "../component/dashboard";
import { SideBar } from "../component/dashboard/sidebar";

export class DashboardPage extends Component {
  state = {};
  componentDidMount() {
    const userInfo =
      localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");
    if (!userInfo) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <MainDashboard userInfo={this.props.userInfo} />
        </div>
      </Fragment>
    );
  }
}
