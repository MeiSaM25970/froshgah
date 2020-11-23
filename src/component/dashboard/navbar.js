import React, { Component } from "react";
import { Link } from "react-router-dom";
import { switchSidebarStore, switchToMiniSidebar } from "./redux";
import * as userService from "../../service";
import Loading from "../loading";

export class MainNavbar extends Component {
  state = { miniSidebar: false, newOrder: 0 };
  async switchToSidebar() {
    await this.setState({ miniSidebar: !this.state.miniSidebar });
    await switchSidebarStore.dispatch(
      switchToMiniSidebar({ miniSidebar: this.state.miniSidebar })
    );
  }
  async logout() {
    this.userInfo = localStorage.clear() || sessionStorage.clear();
    this.props.history.push("/login");
  }
  componentDidMount() {
    userService
      .fetchOrder()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err))
      .finally(() => {
        for (var i = 0; i < this.state.data.length; i++) {
          if (this.state.data[i].status === "new") {
            this.setState({ newOrder: this.state.newOrder + 1 });
          }
        }
      });
  }
  render() {
    return this.state.data ? (
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid d-flex justify-content-start align-items-center ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>

          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <button
                id="minimizeSidebar"
                className="btn btn-just-icon btn-white btn-fab btn-round"
                onClick={() => this.switchToSidebar()}
              >
                <i className="material-icons text_align-center visible-on-sidebar-regular">
                  more_vert
                </i>
                <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">
                  view_list
                </i>
                <div className="ripple-container"></div>
              </button>
            </div>
            <Link className="navbar-brand pr-3" to="#">
              داشبورد
            </Link>
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            {/* <form className="navbar-form">
            <span className="bmd-form-group">
              <div className="input-group no-border">
                <input
                  type="text"
                  value=""
                  className="form-control"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="btn btn-white btn-round btn-just-icon"
                >
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div>
            </span>
          </form>
           */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">Stats</p>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">notifications</i>
                  {this.state.newOrder > 0 && (
                    <span className="notification">{this.state.newOrder}</span>
                  )}
                  <p className="d-lg-none d-md-block">Some Actions</p>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/order">
                    سفارشات
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdownProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">Account</p>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="navbarDropdownProfile"
                >
                  <Link className="dropdown-item" to="/myprofile">
                    پروفایل من
                  </Link>
                  <Link className="dropdown-item" to="/newUser">
                    افزودن کاربر جدید
                  </Link>
                  <Link className="dropdown-item" to="/changePassword">
                    تغییر رمز عبور
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    onClick={() => this.logout()}
                    to="#"
                  >
                    خروج از حساب کاربری{" "}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ) : (
      <Loading />
    );
  }
}
