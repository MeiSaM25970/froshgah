import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_ADDRESS_SERVICE } from "../../env";
import * as userService from "../../service";
import Loading from "../loading";

export class SideBar extends Component {
  state = {
    activeSidebar: {
      dashboard: false,
      myprofile: false,
      product: false,
      productId: false,
      productRegister: false,
      newUser: false,
      changePassword: false,
      categories: false,
      order: false,
      orderId: false,
      message: false,
      about: false,
      newBlog: false,
      comments: false,
      commentDetail: false,
      contactDetail: false,
      weblogs: false,
      editWeblog: false,
    },
  };
  userInfo =
    JSON.parse(localStorage.getItem("userInfo")) ||
    JSON.parse(sessionStorage.getItem("userInfo"));
  componentDidMount() {
    this.activeSidebar();
    userService
      .fetchUserInfo(this.userInfo.username)
      .then((res) => this.setState({ userInfo: res.data }))
      .catch((err) => console.log(err));
  }
  async logout() {
    this.userInfo = localStorage.clear() || sessionStorage.clear();
    this.props.history.push("/login");
  }
  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({ newProps: "Received" });
      this.activeSidebar();
    }
  }
  activeSidebar() {
    switch (this.props.match.path) {
      case "/dashboard":
        return this.setState({ activeSidebar: { dashboard: true } });
      case "/myprofile":
        return this.setState({ activeSidebar: { myprofile: true } });
      case "/product":
        return this.setState({ activeSidebar: { product: true } });
      case "/product/:id":
        return this.setState({ activeSidebar: { productId: true } });
      case "/productregister":
        return this.setState({ activeSidebar: { productRegister: true } });
      case "/newUser":
        return this.setState({ activeSidebar: { newUser: true } });
      case "/changePassword":
        return this.setState({ activeSidebar: { changePassword: true } });
      case "/categories":
        return this.setState({ activeSidebar: { categories: true } });
      case "/order":
        return this.setState({ activeSidebar: { order: true } });
      case "/order/:id":
        return this.setState({ activeSidebar: { orderId: true } });
      case "/about":
        return this.setState({ activeSidebar: { about: true } });
      case "/contact":
        return this.setState({ activeSidebar: { message: true } });
      case "/contact/:id":
        return this.setState({ activeSidebar: { contactDetail: true } });
      case "/newblog":
        return this.setState({ activeSidebar: { newBlog: true } });
      case "/comments":
        return this.setState({ activeSidebar: { comments: true } });
      case "/comment/:id":
        return this.setState({ activeSidebar: { commentDetail: true } });
      case "/weblogs":
        return this.setState({ activeSidebar: { weblogs: true } });
      case "/weblogs/:id":
        return this.setState({ activeSidebar: { editWeblog: true } });
      default:
        return this.state.activeSidebar;
    }
  }
  render() {
    return this.state.userInfo ? (
      <div
        className="sidebar ps"
        data-color="rose"
        data-background-color="black"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <div className="logo">
          <a href="http://tad-group.ir" className="simple-text logo-mini">
            TAD{" "}
          </a>
          <a href="http://tad-group.ir" className="simple-text logo-normal">
            تاد گروپ{" "}
          </a>
        </div>
        <div className="sidebar-wrapper ps ps--active-y">
          <div className="user">
            <div className="photo">
              <img
                src={
                  this.state.userInfo.imgPath
                    ? API_ADDRESS_SERVICE + this.state.userInfo.imgPath
                    : "/assets/img/User-Icon.png"
                }
                alt="/assets/img/User-Icon.png"
              />
            </div>
            <div className="user-info">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                className="username"
              >
                <span>
                  {this.state.userInfo.firstName && this.state.userInfo.lastName
                    ? this.state.userInfo.firstName +
                      " " +
                      this.state.userInfo.lastName
                    : this.state.userInfo.username}
                  <b className="caret"></b>
                </span>
              </a>
              <div className="collapse " id="collapseExample">
                <ul className="nav ">
                  <Link to="/myprofile">
                    <li className="nav-item ">
                      <span className="nav-link" style={{ fontSize: 13 }}>
                        <span className="sidebar-normal"> پروفایل من </span>
                      </span>
                    </li>
                  </Link>
                  <Link to="/newUser">
                    <li className="nav-item">
                      <span className="nav-link" style={{ fontSize: 13 }}>
                        <span className="sidebar-normal">
                          {" "}
                          افزودن کاربر جدید{" "}
                        </span>
                      </span>
                    </li>
                  </Link>
                  <Link to="/changePassword">
                    <li className="nav-item">
                      <span className="nav-link" style={{ fontSize: 13 }}>
                        <span className="sidebar-normal"> تغییر رمز عبور </span>
                      </span>
                    </li>
                  </Link>
                  <Link onClick={() => this.logout()} to="#">
                    <li className="nav-item">
                      <span className="nav-link" style={{ fontSize: 13 }}>
                        <span className="sidebar-normal">
                          {" "}
                          خروج از حساب کاربری{" "}
                        </span>
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav">
            <li
              className={
                this.state.activeSidebar.dashboard
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/dashboard">
                <i className="material-icons">dashboard</i>
                <p> داشبورد </p>
              </Link>
            </li>
            {/* <li className="nav-item ">
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#mapsExamples"
                aria-expanded="false"
              >
                <i className="material-icons">image</i>
                <p>
                  {" "}
                  مدیریت صفحات
                  <b className="caret"></b>
                </p>
              </a>
              <div className="collapse" id="mapsExamples">
                <ul className="nav">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/manage-product-a-page">
                      <span className="sidebar-normal"> محصول یک </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../examples/maps/fullscreen.html"
                    >
                      <span className="sidebar-mini"> FSM </span>
                      <span className="sidebar-normal"> Full Screen Map </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/maps/vector.html">
                      <span className="sidebar-mini"> VM </span>
                      <span className="sidebar-normal"> Vector Map </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
            <li
              className={
                this.state.activeSidebar.product ||
                this.state.activeSidebar.productId ||
                this.state.activeSidebar.productRegister
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#pagesExamples"
                aria-expanded={
                  this.state.activeSidebar.product ||
                  this.state.activeSidebar.productId ||
                  this.state.activeSidebar.productRegister
                }
              >
                <i className="material-icons">shopping_cart </i>
                <p>
                  {" "}
                  محصولات
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={
                  this.state.activeSidebar.product ||
                  this.state.activeSidebar.productId ||
                  this.state.activeSidebar.productRegister
                    ? "collapse show"
                    : "collapse"
                }
                id="pagesExamples"
              >
                <ul className="nav">
                  <li
                    className={
                      this.state.activeSidebar.product
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/product">
                      <span className="sidebar-normal"> لیست محصولات </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.activeSidebar.productRegister
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/productregister">
                      <span className="sidebar-normal">ثبت محصول جدید </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={
                this.state.activeSidebar.order ||
                this.state.activeSidebar.orderId
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#componentsExamples"
                aria-expanded={
                  this.state.activeSidebar.order ||
                  this.state.activeSidebar.orderId
                }
              >
                <i className="material-icons">list </i>
                <p>
                  {" "}
                  مدیریت سفارشات
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={
                  this.state.activeSidebar.order ||
                  this.state.activeSidebar.orderId
                    ? "collapse show"
                    : "collapse"
                }
                id="componentsExamples"
              >
                <ul className="nav">
                  <li
                    className={
                      this.state.activeSidebar.order ||
                      this.state.activeSidebar.orderId
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/order">
                      <span className="sidebar-normal"> سفارشات </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={
                this.state.activeSidebar.categories ||
                this.state.activeSidebar.newBlog ||
                this.state.activeSidebar.weblogs ||
                this.state.activeSidebar.editWeblog
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              {" "}
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#des-sidebar"
                aria-expanded={
                  this.state.activeSidebar.categories ||
                  this.state.activeSidebar.newBlog ||
                  this.state.activeSidebar.weblogs ||
                  this.state.activeSidebar.editWeblog
                }
              >
                <i className="material-icons">description </i>
                <p>
                  {" "}
                  مدیریت مقالات
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={
                  this.state.activeSidebar.categories ||
                  this.state.activeSidebar.newBlog ||
                  this.state.activeSidebar.weblogs ||
                  this.state.activeSidebar.editWeblog
                    ? "collapse show"
                    : "collapse"
                }
                id="des-sidebar"
              >
                <ul className="nav">
                  <li
                    className={
                      this.state.activeSidebar.newBlog
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/newblog">
                      <span className="sidebar-normal"> مقاله جدید </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.activeSidebar.categories
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link to="/categories" className="nav-link">
                      <span className="sidebar-normal"> موضوعات </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.activeSidebar.weblogs ||
                      this.state.activeSidebar.editWeblog
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link to="/weblogs" className="nav-link">
                      <span className="sidebar-normal"> مقالات </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className={
                this.state.activeSidebar.message ||
                this.state.activeSidebar.contactDetail
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#formsExamples"
                aria-expanded={
                  this.state.activeSidebar.message ||
                  this.state.activeSidebar.contactDetail
                }
              >
                <i className="material-icons">message</i>
                <p>
                  پیام ها
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={
                  this.state.activeSidebar.message ||
                  this.state.activeSidebar.contactDetail
                    ? "collapse show"
                    : "collapse"
                }
                id="formsExamples"
              >
                <ul className="nav">
                  <li
                    className={
                      this.state.activeSidebar.message ||
                      this.state.activeSidebar.contactDetail
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/contact">
                      <span className="sidebar-normal"> تماس با ما</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={
                this.state.activeSidebar.about ? "nav-item active" : "nav-item"
              }
            >
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#aboutUs"
                aria-expanded={this.state.activeSidebar.about}
              >
                <i className="material-icons">info </i>
                <p>
                  {" "}
                  درباره ما
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={
                  this.state.activeSidebar.about ? "collapse show" : "collapse"
                }
                id="aboutUs"
              >
                <ul className="nav">
                  <li
                    className={
                      this.state.activeSidebar.about
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/about">
                      <span className="sidebar-normal"> تنظیمات </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={
                this.state.activeSidebar.comments ||
                this.state.activeSidebar.commentDetail
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                href="#comments"
                aria-expanded={
                  this.state.activeSidebar.comments ||
                  this.state.activeSidebar.commentDetail
                }
              >
                <i className="material-icons">comment </i>
                <p>
                  {" "}
                  نظرات
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={
                  this.state.activeSidebar.comments ||
                  this.state.activeSidebar.commentDetail
                    ? "collapse show"
                    : "collapse"
                }
                id="comments"
              >
                <ul className="nav">
                  <li
                    className={
                      this.state.activeSidebar.comments ||
                      this.state.activeSidebar.commentDetail
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link className="nav-link" to="/comments">
                      <span className="sidebar-normal"> مدیریت نظرات </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div
            className="ps__rail-x"
            // style={{ left: "0px", top: "0px" }}
          >
            <div
              className="ps__thumb-x"
              tabIndex="0"
              // style={{ left: "0px", width: "0px" }}
            ></div>
          </div>
          <div
            className="ps__rail-y"
            // style={{ top: "0px", height: "103px", left: "0px" }}
          >
            <div
              className="ps__thumb-y"
              tabIndex="0"
              // style={{ top: "0px", height: "17px" }}
            ></div>
          </div>
        </div>
        <div
          className="ps__rail-x"
          // style={{ left: "0px", top: "0px" }}
        >
          <div
            className="ps__thumb-x"
            tabIndex="0"
            // style={{ left: "0px", width: "0px" }}
          ></div>
        </div>
        <div
          className="ps__rail-y"
          // style={{ top: "0px", left: "0px" }}
        >
          <div
            className="ps__thumb-y"
            tabIndex="0"
            // style={{ top: "0px", height: "0px" }}
          ></div>
        </div>
        <div
          className="sidebar-background"
          // style={{
          //   backgroundImage: "url(&quot;../assets/img/sidebar-1.jpg&quot)",
          // }}
        ></div>
      </div>
    ) : (
      <Loading />
    );
  }
}
