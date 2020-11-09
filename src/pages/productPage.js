import React, { Component, Fragment, useState } from "react";
import { ProductList } from "../component/product";
import { SideBar, MainNavbar } from "../component/dashboard";

export class ProductPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <SideBar />
        <div className="main-panel ps ps--active-y">
          <MainNavbar />

          <div className="content">
            <div className="content">
              <div className="container-fluid">
                <h3 className="text-right">لیست محصولات</h3>
                <br />
                <div className="row mt-5">
                  {" "}
                  <ProductList data={this.props.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
