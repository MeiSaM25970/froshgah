import React, { Component } from "react";
import moment from "moment-jalaali";
import * as userService from "../../service";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { AlertButton } from "../button/button";

export class Order extends Component {
  state = { page: 1, dataLength: 10, orders: [], current: [], loading: true };
  changeHandler = async (event, value) => {
    await this.setState({ page: value });
    await this.fetchData();
  };
  async componentDidMount() {
    await this.fetchData();
  }

  fetchData() {
    userService
      .fetchOrder()
      .then(async (res) => {
        await this.setState({ orders: res.data, loading: false });
        await this.filterOrders(this.state.page);
      })
      .catch(() => window.location.replace("/error"));
  }
  async filterOrders(pageNumber) {
    const data = [...this.state.orders];
    const beginIndex = (+pageNumber - 1) * this.state.dataLength;
    const endIndex = beginIndex + this.state.dataLength;
    let dataLength = this.state.dataLength;
    let orderLength = this.state.orders.length;
    let pageLength = orderLength / dataLength;
    const countNumber = Math.ceil(pageLength);
    this.setState({ countNumber, loading: false });
    if (dataLength === "-1") {
      this.setState({ current: data });
    } else {
      if (this.state.orders[beginIndex]) {
        await this.setState({
          current: data.slice(beginIndex, endIndex),
        });
      } else {
        await this.fetchData();
        if (this.state.orders.length && this.state.orders[beginIndex]) {
          await this.setState({
            current: this.state.orders.slice(beginIndex, endIndex),
          });
        }
      }
    }
  }
  changeSelectDataCount(e) {
    this.setState({ dataLength: e.target.value });
    this.fetchData();
  }
  render() {
    return (
      <div className="content text-right">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">assignment</i>
                  </div>
                  <h4 className="card-title">DataTables.net</h4>
                </div>
                <div className="card-body">
                  <div className="toolbar">
                    {/* <!--        Here you can write extra buttons/actions for the toolbar              --> */}
                  </div>
                  <div className="material-datatables">
                    <div
                      id="datatables_wrapper"
                      className="dataTables_wrapper dt-bootstrap4"
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div
                            className="dataTables_length"
                            id="datatables_length"
                          >
                            <label>
                              نمایش{" "}
                              <select
                                name="datatables_length"
                                aria-controls="datatables"
                                className="custom-select custom-select-sm form-control form-control-sm"
                                onChange={this.changeSelectDataCount.bind(this)}
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="-1">همه</option>
                              </select>{" "}
                              سفارش
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div
                            id="datatables_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              <span className="bmd-form-group bmd-form-group-sm">
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder="Search records"
                                  aria-controls="datatables"
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="col-sm-12">
                          <table
                            id="datatables"
                            className="table table-striped table-no-bordered table-hover dataTable dtr-inline"
                            cellSpacing="0"
                            width="100%"
                            style={{ width: "100%" }}
                            role="grid"
                            aria-describedby="datatables_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_asc"
                                  tabIndex="0"
                                  aria-controls="datatables"
                                  rowSpan="1"
                                  colSpan="1"
                                  //   style={{ width: "126px" }}
                                  aria-sort="ascending"
                                  aria-label="Name: activate to sort column descending"
                                >
                                  ردیف
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="datatables"
                                  rowSpan="1"
                                  colSpan="1"
                                  //   style={{ width: "186px" }}
                                  aria-label="Position: activate to sort column ascending"
                                >
                                  نام و نام خانوادگی
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="datatables"
                                  rowSpan="1"
                                  colSpan="1"
                                  //   style={{ width: "93px" }}
                                  aria-label="Office: activate to sort column ascending"
                                >
                                  تلفن
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="datatables"
                                  rowSpan="1"
                                  colSpan="1"
                                  //   style={{ width: "31px" }}
                                  aria-label="Age: activate to sort column ascending"
                                >
                                  تاریخ ثبت
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="datatables"
                                  rowSpan="1"
                                  colSpan="1"
                                  //   style={{ width: "80px" }}
                                  aria-label={{
                                    Date: "activate to sort column ascending",
                                  }}
                                >
                                  کد رهگیری
                                </th>
                                <th
                                  className="disabled-sorting text-right sorting"
                                  tabIndex="0"
                                  aria-controls="datatables"
                                  rowSpan="1"
                                  colSpan="1"
                                  //   style={{ width: "148px" }}
                                  aria-label="Actions: activate to sort column ascending"
                                >
                                  جزئیات
                                </th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th rowSpan="1" colSpan="1">
                                  ردیف
                                </th>
                                <th rowSpan="1" colSpan="1">
                                  نام و نام خانوادگی
                                </th>
                                <th rowSpan="1" colSpan="1">
                                  تلفن
                                </th>
                                <th rowSpan="1" colSpan="1">
                                  تاریخ ثبت
                                </th>
                                <th rowSpan="1" colSpan="1">
                                  کد رهگیری
                                </th>
                                <th
                                  className="text-right"
                                  rowSpan="1"
                                  colSpan="1"
                                >
                                  جزئیات
                                </th>
                              </tr>
                            </tfoot>
                            <tbody>
                              {this.props.orders &&
                              this.props.orders.length > 0 ? (
                                this.state.current.map((order, index) => (
                                  <tr role="row" className="odd" key={index}>
                                    <td tabIndex="0" className="sorting_1">
                                      {index + 1}
                                    </td>
                                    <td>{order.fullName}</td>
                                    <td>{order.mobile}</td>
                                    <td>
                                      {moment(
                                        order.date,
                                        "YYYY/MM/DD HH:mm:ss"
                                      ).format("jYYYY/jM/jD ساعت: HH:mm:ss")}
                                    </td>
                                    <td>{order.trackingCode}</td>
                                    <td className="text-right">
                                      <Link
                                        to={"/order/" + order._id}
                                        className="btn btn-link btn-warning btn-just-icon edit"
                                        title="نمایش سفارش"
                                      >
                                        <i className="material-icons">dvr</i>
                                      </Link>
                                      <AlertButton
                                        class="btn btn-link btn-danger btn-just-icon remove"
                                        type="button"
                                        des=" حذف سفارش"
                                        orderId={order._id}
                                        {...this.props}
                                        icon={
                                          <i className="material-icons">
                                            close
                                          </i>
                                        }
                                      ></AlertButton>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr role="row" className="odd">
                                  <td>{"سفارشی وجود ندارد"}</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="datatables_info"
                            role="status"
                            aria-live="polite"
                          >
                            {`نمایش   ${
                              this.state.dataLength === "-1"
                                ? "همه"
                                : this.state.dataLength
                            }  سفارش از  ${this.state.orders.length}   سفارش`}
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div className="row container" dir="ltr">
                            <Pagination
                              count={this.state.countNumber}
                              color="secondary"
                              showFirstButton
                              showLastButton
                              onChange={this.changeHandler}
                              size="small"
                              className="ir-r"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end content--> */}
              </div>
              {/* <!--  end card  --> */}
            </div>
            {/* <!-- end col-md-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
    );
  }
}
