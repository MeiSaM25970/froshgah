import React, { Component } from "react";
import validator from "validator";
import * as userService from "../../service";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Loading from "../loading";
import { Link } from "react-router-dom";
export class Categories extends Component {
  state = {
    isValid: false,
    titleError: false,
    count: 1,
    addCategory: false,
    title: "",
    feature: [],
    editTitle: "",
    newCategoryErr: false,
    edit: null,
  };
  dangerClassName = "form-group bmd-form-group has-danger is-focused";
  normalClassName = "form-group bmd-form-group";
  featureClass = "col-sm-12 col-md-6 col-lg-4 ";
  history = this.props.history;
  fetchCategories() {
    userService
      .fetchCategories()
      .then(async (res) => {
        if (res.data[0]) {
          await this.setState({
            feature: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  addCategory() {
    const category = { title: this.state.title };
    this.validation();
    if (this.state.isValid) {
      userService
        .createCategories(category)
        .then(() => {
          this.fetchCategories();
          this.setState({ addCategory: false });
        })
        .catch((err) => console.log(err));
    }
  }
  componentDidMount() {
    this.fetchCategories();
  }
  validation() {
    const titleIsEmpty = validator.isEmpty(this.state.title);
    if (titleIsEmpty) {
      this.setState({ titleError: true, isValid: false });
    } else this.setState({ titleError: false, isValid: true });
  }
  async updateCategory(category) {
    const newCategoryIsEmpty = validator.isEmpty(this.state.editTitle);
    if (newCategoryIsEmpty) {
      await this.setState({ newCategoryErr: true });
    } else {
      await this.setState({ newCategoryErr: false });
      const newCategory = { title: this.state.editTitle };
      userService.updateCategory(category._id, newCategory).then(async () => {
        await this.fetchCategories();
        await this.setState({ edit: null });
      });
    }
  }

  changeHandler = (e) => {
    const category = {};
    const name = e.target.name;
    const value = e.target.value;
    category[name] = value;
    this.setState({ ...this.state, ...category });
  };
  deleteCategory(category) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui text-right ">
            <i className="material-icons-outlined">info</i>

            <h1 className="ir-r">مطمئنید؟</h1>

            <p className="ir-r">آیا شما میخواهید این موضوع را پاک کنید؟</p>
            <button className="btn btn-danger" onClick={onClose}>
              خیر
            </button>
            <button
              className="btn btn-success"
              onClick={async () => {
                await userService
                  .deleteCategory(category._id)
                  .then(() => {
                    this.setState({ feature: [] });
                    this.fetchCategories();
                  })
                  .catch((err) => console.log(err))
                  .finally(() => console.log(this.state));
                onClose();
              }}
            >
              بله ، پاک کن!
            </button>
          </div>
        );
      },
    });
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  submitHandler(e) {
    e.preventDefault();
    this.addCategory();
  }
  render() {
    return this.state.feature ? (
      <div className="col-md-12 " style={{ marginTop: 100 }}>
        <div className="card ">
          <div className="card-header card-header-rose card-header-text text-right">
            <div className="card-text">
              <h4 className="card-title ir-r">مدیریت موضوعات</h4>
            </div>
          </div>
          <div className="card-body ">
            <form
              method="get"
              action="/"
              className="form-horizontal text-right"
              autoComplete="off"
              onSubmit={this.submitHandler.bind(this)}
            >
              <div className="row ">
                <label className="col-sm-2 col-form-label t-r"> موضوعات:</label>
                <div className="col-sm-10 mt-5">
                  <div className="row mb-5">
                    <div
                      className={this.normalClassName + " mt-4 mx-auto "}
                      style={{ overflowX: "auto" }}
                    >
                      <div className="card-body ">
                        <div className="table-responsive ">
                          <table className="table text-center ">
                            <thead className="">
                              <tr>
                                <th>ردیف</th>
                                <th className="c-w-200">موضوع</th>
                                <th>جزئیات</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.feature.length > 0 ? (
                                this.state.feature.map((feature, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                      {this.state.edit === index ? (
                                        <div>
                                          <input
                                            type="text"
                                            className="form-control "
                                            name="editTitle"
                                            onChange={this.changeHandler.bind(
                                              this
                                            )}
                                            defaultValue={feature.title}
                                          />
                                          {this.state.newCategoryErr && (
                                            <small className="text-danger mr-2">
                                              فیلد را نمیتوان خالی گذاشت.
                                            </small>
                                          )}
                                        </div>
                                      ) : (
                                        feature.title
                                      )}
                                    </td>
                                    <td>
                                      {this.state.edit === index ? (
                                        <Link
                                          to="#"
                                          onClick={() =>
                                            this.setState({ edit: null })
                                          }
                                        >
                                          <i className="material-icons ">
                                            close
                                          </i>
                                        </Link>
                                      ) : (
                                        <Link
                                          className="text-info"
                                          onClick={() =>
                                            this.setState({ edit: index })
                                          }
                                          to="#"
                                        >
                                          <i className="material-icons ">
                                            {" "}
                                            edit
                                          </i>
                                        </Link>
                                      )}
                                    </td>
                                    <td>
                                      {this.state.edit === index ? (
                                        <Link
                                          className="text-success"
                                          onClick={() =>
                                            this.updateCategory(feature)
                                          }
                                          to="#"
                                        >
                                          <span className="material-icons ">
                                            save
                                          </span>
                                        </Link>
                                      ) : (
                                        <Link
                                          className="text-danger"
                                          to="#"
                                          onClick={() =>
                                            this.deleteCategory(feature)
                                          }
                                        >
                                          <span className="material-icons ">
                                            delete
                                          </span>
                                        </Link>
                                      )}
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td>موضوعی وجود ندارد.</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {this.state.addCategory && (
                        <div>
                          <input
                            type="text"
                            className="form-control input-feature pr-2"
                            name="title"
                            onChange={this.changeHandler.bind(this)}
                          />
                          <div className="mx-auto d-block">
                            <button
                              className="btn btn-success mr-5"
                              // onClick={() => this.addCategory()}
                              type="submit"
                            >
                              ذخیره
                            </button>
                            <button
                              className="btn btn-danger "
                              type="button"
                              onClick={() =>
                                this.setState({ addCategory: false })
                              }
                            >
                              لغو
                            </button>
                          </div>
                          {this.state.titleError && (
                            <small className="text-danger d-block mt-2">
                              نمیتوان موضوع جدید را خالی گذاشت.
                            </small>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      disabled={this.state.addCategory}
                      className="btn btn-primary mx-auto"
                      onClick={() => this.setState({ addCategory: true })}
                    >
                      موضوع جدید
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}
