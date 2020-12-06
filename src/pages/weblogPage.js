import React, { Component, Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { Weblog } from "../component/weblog";
export class WeblogPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <Weblog {...this.props} />
        </div>
      </Fragment>
    );
  }
}
