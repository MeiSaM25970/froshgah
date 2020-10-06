import React, { Component, Fragment } from "react";
import { Login } from "../component/Login";
import { Navbar } from "../component/Navbar/navbar";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Login />
      </Fragment>
    );
  }
}
