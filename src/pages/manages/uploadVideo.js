import React, { Component, Fragment } from "react";
import { MainNavbar } from "../../component/dashboard";
import { UploadVideo } from "../../component/manages/uploadVideo";
export class UploadVideoPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <UploadVideo {...this.props} />
        </div>
      </Fragment>
    );
  }
}
