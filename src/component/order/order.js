import React, { Component } from "react";
import moment from "moment-jalaali";
import * as userService from "../../service";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import MaterialTable from "material-table";

export class Order extends Component {
  state = { orders: [], loading: true };
  async componentDidMount() {
    await this.fetchData();
  }
  deleteOrder(id) {
    userService
      .deleteOrder(id)
      .then(() => this.fetchData())
      .catch((err) => console.log(err));
  }
  fetchData() {
    userService
      .fetchOrder()
      .then(async (res) => {
        await this.setState({ orders: res.data, loading: false });
      })
      .catch(() => window.location.replace("/error"));
  }

  render() {
    return (
      <div className="content text-right">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">shopping_basket</i>
                  </div>
                </div>
                <div className="card-body">
                  <div className="toolbar">
                    {/* <!--        Here you can write extra buttons/actions for the toolbar              --> */}
                  </div>
                  <div className="material-datatables">
                    <div className="card-body ir-r">
                      <MaterialTable
                        title="سفارشات"
                        columns={[
                          {
                            title: "نام و نام خانوادگی",
                            field: "fullName",
                            cellStyle: {
                              width: "20%",
                              textAlign: "center",
                            },
                          },
                          {
                            title: "نام محصول",
                            field: "productName",
                            cellStyle: {
                              width: "20%",
                              textAlign: "center",
                            },
                          },
                          {
                            title: "تلفن",
                            field: "mobile",
                            cellStyle: {
                              textAlign: "center",
                            },
                          },
                          {
                            title: "تاریخ",
                            field: "date",
                            render: (contact) => (
                              <div>
                                {moment(
                                  contact.date,
                                  "YYYY/MM/DD HH:mm:ss"
                                ).format("jYYYY/jM/jD ساعت HH:mm")}
                              </div>
                            ),
                          },
                          {
                            title: "کد رهگیری",
                            field: "trackingCode",
                            cellStyle: {
                              maxWidth: 200, // percentage also works
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            },
                          },
                        ]}
                        data={this.state.orders}
                        actions={[
                          {
                            icon: () => (
                              <span className="material-icons">article</span>
                            ),
                            tooltip: "جزئیات سفارش",
                            onClick: (event, rowData) =>
                              this.props.history.push("/order/" + rowData._id),
                          },
                          {
                            icon: "delete",
                            tooltip: "حذف سفارش",
                            onClick: (event, order) => {
                              confirmAlert({
                                customUI: ({ onClose }) => {
                                  return (
                                    <div className="custom-ui text-right ">
                                      <i className="material-icons-outlined">
                                        info
                                      </i>

                                      <h1 className="ir-r">مطمئنید؟</h1>

                                      <p className="ir-r">
                                        آیا شما میخواهید این پیام را پاک کنید؟
                                      </p>
                                      <button
                                        className="btn btn-danger"
                                        onClick={onClose}
                                      >
                                        خیر
                                      </button>
                                      <button
                                        className="btn btn-success"
                                        onClick={() => {
                                          this.deleteOrder(order._id);
                                          onClose();
                                        }}
                                      >
                                        بله ، پاک کن!
                                      </button>
                                    </div>
                                  );
                                },
                              });
                            },
                          },
                        ]}
                        // style={{ textAlign: "center" }}
                        options={{
                          cellStyle: {
                            textAlign: "center",
                          },
                          rowStyle: {
                            textAlign: "center",
                          },
                          paginationPosition: "bottom",
                          paginationType: "stepped",
                        }}
                      />
                      <div className="row d-block text-left">
                        <Link
                          className="btn btn-muted mr-3  mt-4 ir-r "
                          to="/contact"
                        >
                          بازگشت
                        </Link>
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
