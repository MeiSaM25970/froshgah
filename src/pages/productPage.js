import React, { Component, Fragment, useState } from "react";
import { ProductList } from "../component/product";
import { SideBar, MainNavbar } from "../component/dashboard";
import * as userService from "../service";

export class ProductPage extends Component {
  state = { data: [] };
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    userService.fetchProduct().then((res) => this.setState({ data: res.data }));
  }

  render() {
    return (
      <Fragment>
        <div className="main-panel ps ps--active-y">
          <SideBar />
          <MainNavbar />

          <div className="content">
            <div className="content">
              <div className="container-fluid">
                <h3 className="text-right">لیست محصولات</h3>
                <br />
                <div className="row mt-5">
                  {" "}
                  <ProductList data={this.state.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
