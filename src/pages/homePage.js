import React, { Component } from "react";

const data = require("../material-dashboard-pro-html-v2.1.2/examples/pages/rtl.html");
export class HomePage extends Component {
  render() {
    return <div className="abs" dangerouslySetInnerHTML={{ __html: data }} />;
  }
}
