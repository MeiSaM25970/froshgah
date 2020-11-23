import React, { Component, Fragment } from "react";
import { ChangePassword } from "../component/changePassword";
import { MainNavbar, SideBar } from "../component/dashboard";
export class ChangePasswordPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <ChangePassword {...this.props} />
        </div>
      </Fragment>
    );
  }
}
