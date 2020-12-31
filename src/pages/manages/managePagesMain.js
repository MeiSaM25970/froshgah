import React, { Component, Fragment } from "react";
import { MainNavbar } from "../../component/dashboard";
import { ManageMain } from "../../component/manages/main";
export class ManagePagesMain extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <ManageMain {...this.props} />
        </div>
      </Fragment>
    );
  }
}
