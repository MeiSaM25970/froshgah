import React, { Component } from "react";
import validator from "validator";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";

export class ManageProductAInputForm extends Component {
  state = {
    isValid: false,
    isDone: false,
    titleError: false,
    count: 1,
    deleteErr: false,
    descriptionError: false,
  };
  dangerClassName = "form-group bmd-form-group has-danger is-focused";
  normalClassName = "form-group bmd-form-group";
  featureClass = "col-sm-12 col-md-6 col-lg-4 ";
  inputCount = [{ title: "", description: `` }];
  countPlus() {
    this.inputCount.push({ title: "", description: `` });
    this.setState({ count: +this.state.count + 1 });
  }
  deleteCount() {
    if (this.state.count > 1) {
      let lastArrayNum = this.inputCount.length - 1;
      let count = this.inputCount.splice(lastArrayNum);
      this.setState({ count: this.state.count - 1 });
      console.log(count);
    } else {
      alert("حداقا باید یک ویژگی وجود داشته باشد.");
    }
  }
  submitHandler = async (e) => {
    await e.preventDefault();
    console.log(this.state, this.inputCount);
    await this.inputValidation();
    // userService
    //   .managePageAFeature(this.inputCount)
    //   .then((res) => this.setState({ isDone: true }));
    // if (
    //   !this.state.productError &&
    //   !this.state.priceError &&
    //   !this.state.imgError &&
    //   !this.state.descriptionError &&
    //   !this.state.des1Err &&
    //   !this.state.des2Err &&
    //   !this.state.des3Err &&
    //   !this.state.des4Err &&
    //   !this.state.des5Err
    // ) {
    //   await this.setState({ isValid: true });
    //   await this.uploadFile();
    //   const product = {
    //     title: this.state.newProduct,
    //     price: this.state.price,
    //     description: this.state.description,
    //     img: this.state.imgPath,
    //     feature1: this.state.des1,
    //     feature2: this.state.des2,
    //     feature3: this.state.des3,
    //     feature4: this.state.des4,
    //     feature5: this.state.des5,
    //   };
    //   userService
    //     .createProduct(product)
    //     .then((res) => {
    //       if (res.status == 200) {
    //         window.location.replace("/successproduct");
    //       } else {
    //         console.log("fail");
    //       }
    //     })
    //     .catch(this.setState({ isDone: false }));
    // } else await this.setState({ isValid: false });
    // if (!this.state.isValid) {
    //   this.scrollTop();
    // }
  };
  changeHandler(e) {
    const product = {};
    const name = e.target.name;
    const value = e.target.value;
    product[name] = value;
    this.setState({ input: { ...this.state.input, ...product } });
  }
  inputValidation = async () => {
    for (var i = 0; i < this.inputCount.length; i++) {
      const title = await validator.isEmpty(this.inputCount[i].title);
      const description = await validator.isEmpty(
        this.inputCount[i].description
      );
      if (title) {
        await this.setState({ titleError: true });
      } else await this.setState({ titleError: false });
      if (description) {
        await await this.setState({ descriptionError: true });
      } else await this.setState({ descriptionError: false });
    }
  };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return this.props.data ? (
      <div className="col-md-12 " style={{ marginTop: 100 }}>
        <div className="card ">
          <div className="card-header card-header-rose card-header-text text-right">
            <div className="card-text">
              <h4 className="card-title"> مدیریت صفحه محصول </h4>
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
              <img
                src={API_ADDRESS_SERVICE + this.props.data.img}
                alt="محصول یک"
                width="50%"
                className="mx-auto d-block"
              />
              <div className="row mt-5">
                <label className="col-sm-2 col-form-label t-r">
                  نام محصول:
                </label>
                <div className="col-sm-10">
                  <div
                    className={
                      this.state.productError
                        ? this.dangerClassName
                        : this.normalClassName
                    }
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="newProduct"
                      disabled={true}
                      value={this.props.data.title}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </div>
                </div>
              </div>
              <div className="row ">
                <label className="col-sm-2 col-form-label t-r">
                  {" "}
                  ویژگی محصول:
                </label>
                <div className="col-sm-10 mt-5">
                  <div className="row mb-5">
                    {this.inputCount.map((item, index) => (
                      <div className={this.featureClass + " mt-4"} key={index}>
                        <label
                          className={
                            this.state.titleError
                              ? this.dangerClassName + " title-feature"
                              : this.normalClassName + " title-feature"
                          }
                        >
                          {` عنوان ${index + 1}:`}
                        </label>
                        <input
                          type="text"
                          className={"form-control input-feature"}
                          placeholder=""
                          name={"title" + (index + 1)}
                          onChange={(e) => {
                            let change = e.target.value;
                            item.title = change;
                          }}
                        />
                        <label className="des-feature1">شرح: </label>
                        <textarea
                          rows="2"
                          type="text"
                          className="form-control input-feature"
                          placeholder=""
                          name={"des" + (index + 1)}
                          onChange={(e) => {
                            let change = e.target.value;
                            item.description = change;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <span
                    className="btn btn-primary"
                    onClick={() => this.countPlus()}
                  >
                    ویژگی جدید
                  </span>
                  <span
                    className="btn btn-danger"
                    onClick={() => this.deleteCount()}
                  >
                    حذف{" "}
                  </span>
                </div>
                {this.state.titleError && this.state.descriptionError ? (
                  <small className="d-block text-danger ">
                    فیلدها را نمی توان خالی گذاشت.
                  </small>
                ) : this.state.titleError ? (
                  <small className="d-block text-danger ">
                    عنوان ویژگی اجباریست.
                  </small>
                ) : this.state.descriptionError ? (
                  <small className="d-block text-danger ">
                    شرح ویژگی اجباریست.
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="row">
                <button type="submit" className="btn btn-success mx-auto">
                  <span className="btn-label">
                    <i className="material-icons">check</i>
                  </span>
                  ذخیره
                  <div className="ripple-container"></div>
                </button>
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
