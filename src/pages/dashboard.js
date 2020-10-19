import React, { Component } from "react";
import { MainDashboard, SideBar, MainNavbar } from "../component/dashboard";

export class DashboardPage extends Component {
  state = { userInfo: {} };
  componentDidMount() {
    this.userIsLogin();
  }
  userInfo =
    localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");
  userIsLogin() {
    if (!this.userInfo) {
      window.location.replace("/login");
    } else {
      this.setState({ userInfo: JSON.parse(this.userInfo) });
    }
  }
  render() {
    return (
      <div className="main-panel ps ps--active-y">
        <SideBar />
        <MainNavbar />
        <MainDashboard userInfo={this.state.userInfo} />
      </div>
    );
  }
}
