import React, { Component, Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { NewUser } from "../component/newUser";
export class NewUserPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <NewUser />
        </div>
      </Fragment>
    );
  }
}
