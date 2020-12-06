import React, { Component, Fragment } from "react";
import { ContactDetail } from "../component/contactDetail";
import { MainNavbar, SideBar } from "../component/dashboard";

export class ContactDetailPage extends Component {
  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <ContactDetail {...this.props} />
        </div>
      </Fragment>
    );
  }
}
