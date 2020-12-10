import React, { Component, Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { Users } from "../component/users";
import * as userService from "../service";

export class UsersPage extends Component {
  state = { comments: [] };
  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <Users {...this.props} />
        </div>
      </Fragment>
    );
  }
}
