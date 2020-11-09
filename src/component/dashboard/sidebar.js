import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div
      className="sidebar ps"
      data-color="rose"
      data-background-color="black"
      data-image="../assets/img/sidebar-1.jpg"
    >
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
          CT
        </a>
        <a
          href="http://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper ps ps--active-y">
        <div className="user">
          <div className="photo">
            <img src="../assets/img/faces/avatar.jpg" alt="..." />
          </div>
          <div className="user-info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              className="username"
            >
              <span>
                Tania Andrew
                <b className="caret"></b>
              </span>
            </a>
            <div className="collapse" id="collapseExample">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> MP </span>
                    <span className="sidebar-normal"> پروفایل من </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> EP </span>
                    <span className="sidebar-normal"> ویرایش پروفایل </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> S </span>
                    <span className="sidebar-normal"> تنظیمات </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item active ">
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
          <li className="nav-item ">
            <a
              className="nav-link collapsed"
              data-toggle="collapse"
              href="#pagesExamples"
              aria-expanded="false"
            >
              <i className="material-icons">shopping_cart </i>
              <p>
                {" "}
                محصولات
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="pagesExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/product">
                    <span className="sidebar-normal"> لیست محصولات </span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/productregister">
                    <span className="sidebar-normal">ثبت محصول جدید </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link collapsed"
              data-toggle="collapse"
              href="#componentsExamples"
              aria-expanded="false"
            >
              <i className="material-icons">list </i>
              <p>
                {" "}
                مدیریت سفارشات
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="componentsExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="../examples/components/buttons.html"
                  >
                    <span className="sidebar-mini"> B </span>
                    <span className="sidebar-normal"> سفارشات </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="../examples/components/grid.html"
                  >
                    <span className="sidebar-mini"> GS </span>
                    <span className="sidebar-normal"> پیگیری سفارشات </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link collapsed"
              data-toggle="collapse"
              href="#formsExamples"
              aria-expanded="false"
            >
              <i className="material-icons">message</i>
              <p>
                {" "}
                پیام ها
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="formsExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/forms/regular.html">
                    <span className="sidebar-normal"> تیکت ها </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="../examples/forms/extended.html"
                  >
                    <span className="sidebar-normal"> تماس با ما</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#tablesExamples"
            >
              <i className="material-icons">account_box</i>
              <p>
                {" "}
                مدیریت کاربران
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="tablesExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="../examples/tables/regular.html"
                  >
                    <span className="sidebar-normal"> لیست کاربران </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="../examples/tables/regular.html"
                  >
                    <span className="sidebar-normal"> ثبت کاربر جدید </span>
                  </a>
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
  );
};
