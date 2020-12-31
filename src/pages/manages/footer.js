import React, { Component, Fragment } from "react";
import { MainNavbar } from "../../component/dashboard";
import { ManageFooter } from "../../component/manages/footer";
export class ManageFooterPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <ManageFooter {...this.props} />
        </div>
      </Fragment>
    );
  }
}
