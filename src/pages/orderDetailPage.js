import React, { Component, Fragment } from "react";
import { MainNavbar, SideBar } from "../component/dashboard";
import { OrderDetail } from "../component/orderDetail";
import * as userService from "../service";

export class OrderDetailPage extends Component {
  state = { order: {} };
  componentDidMount() {
    const id = this.props.match.params.id;
    userService.orderById(id).then((res) => this.setState({ order: res.data }));
  }

  render() {
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <OrderDetail order={this.state.order} />
        </div>
      </Fragment>
    );
  }
}
