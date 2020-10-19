import React, { Component, Fragment } from "react";
import { Login } from "../component/Login";

export class HomePage extends Component {
  state = {
    loginMode: true,
  };
  componentDidMount() {
    this.userIsLogin();
  }
  userInfo =
    localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");
  userIsLogin() {
    if (!this.userInfo) {
      window.location.replace("/login");
    } else {
      const userInfo = JSON.parse(this.userInfo);
      window.location.replace("/dashboard");
    }
  }

  render() {
    return (
      <Fragment>
        <Login />
      </Fragment>
    );
  }
}
