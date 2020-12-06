import React, { Component, Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { EditWeblog } from "../component/weblog/editWeblog";
export class EditBlogPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <EditWeblog {...this.props} />
        </div>
      </Fragment>
    );
  }
}
