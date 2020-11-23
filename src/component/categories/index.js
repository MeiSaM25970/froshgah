import React, { Component } from "react";
import validator from "validator";
import * as userService from "../../service";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
export class Categories extends Component {
  state = {
    isValid: false,
    titleError: false,
    count: 1,
    feature: [{ title: "" }],
  };
  dangerClassName = "form-group bmd-form-group has-danger is-focused";
  normalClassName = "form-group bmd-form-group";
  featureClass = "col-sm-12 col-md-6 col-lg-4 ";
  history = this.props.history;
  componentDidMount() {
    userService.fetchCategories().then((res) => {
      if (res.data[0]) {
        this.setState({ feature: res.data });
      } else this.setState({ feature: [{ title: "" }] });
    });
  }
  submitHandler = async (e) => {
    await e.preventDefault();
    await this.featureValidation();
    if (!this.state.titleError) {
      await this.setState({ isValid: true });
      // const category = {
      //   feature: this.state.feature,
      // };
      userService
        .createProduct()
        .then((res) => {
          if (res.status === 200) {
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="custom-ui text-right ">
                    <i className="material-icons-outlined">done</i>

                    <p className="ir-r">اطلاعات شما با موفقیت ذخیره شد.</p>

                    <button
                      className="btn btn-success"
                      onClick={() => {
                        onClose();
                        window.location.replace(`/product`);
                      }}
                    >
                      باشه
                    </button>
                  </div>
                );
              },
            });
          } else {
            console.log("fail");
          }
        })
        .catch(this.setState({ isDone: false }));
    } else await this.setState({ isValid: false });
    if (!this.state.isValid) {
      this.scrollTop();
    }
  };
  async countPlus() {
    await this.featureValidation();
    if (!this.state.titleError) {
      const array = this.state.count - 1;
      await userService
        .createCategories(this.state.feature[array])
        .then(() => {
          userService
            .fetchCategories()
            .then(async (res) => {
              await this.setState({ feature: res.data });
              await this.state.feature.push({ title: "" });
              await this.setState({ count: +this.state.count + 1 });
            })
            .catch((err) => console.log(err))
            .finally(() => console.log(this.state));
        })
        .catch((err) => console.log(err));
    }
  }
  deleteCount() {
    if (this.state.count > 1) {
      let lastArrayNum = this.state.feature.length - 1;
      this.state.feature.splice(lastArrayNum);
      this.setState({ count: this.state.count - 1 });
    } else {
      alert("حداقا باید یک موضوع وجود داشته باشد.");
    }
  }
  changeHandler = (e) => {
    const product = {};
    const name = e.target.name;
    const value = e.target.value;
    product[name] = value;
    this.setState({ ...this.state, ...product });
  };
  featureValidation = async () => {
    for (var i = 0; i < this.state.feature.length; i++) {
      const title = await validator.isEmpty(this.state.feature[i].title);
      if (title) {
        await this.setState({ titleError: true });
      } else await this.setState({ titleError: false });
    }
  };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
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
                    {this.state.feature.map((item, index) => (
                      <div className={this.featureClass + " mt-4"} key={index}>
                        <label
                          className={
                            this.state.titleError
                              ? this.dangerClassName + " title-feature"
                              : this.normalClassName + " title-feature"
                          }
                        >
                          {` موضوع ${index + 1}:`}
                        </label>
                        <input
                          type="text"
                          className="form-control input-feature pr-2"
                          placeholder=""
                          name={"title" + (index + 1)}
                          onChange={(e) => {
                            let change = e.target.value;
                            item.title = change;
                          }}
                        />
                        <span className="btn btn-info">ویرایش</span>
                        <span
                          className="btn btn-danger"
                          onClick={() => this.deleteCount()}
                        >
                          حذف{" "}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span
                    className="btn btn-primary"
                    onClick={() => this.countPlus()}
                  >
                    ایجاد دسته
                  </span>

                  {this.state.titleError ? (
                    <small className="d-block text-danger ">
                      فیلد را نمی توان خالی گذاشت..
                    </small>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
