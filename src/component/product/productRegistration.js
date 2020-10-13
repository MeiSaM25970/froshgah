import React, { Component } from "react";
import validator from "validator";
import * as userService from "../../service";
export class ProductRegistration extends Component {
  constructor(props) {
    super(props);
    this.uploadedImage = React.createRef(null);
    this.imageUploader = React.createRef(null);
  }

  state = {
    img: [],
    newProduct: "",
    price: "",
    description: ``,
    productError: false,
    priceError: false,
    imgError: false,
    descriptionError: false,
    isValid: false,
    imageUpload: false,
    imgPath: "",
    isDone: false,
  };
  dangerClassName = "form-group bmd-form-group has-danger is-focused";
  normalClassName = "form-group bmd-form-group";
  submitHandler = async (e) => {
    await e.preventDefault();
    await this.inputValidation();
    if (
      !this.state.productError &&
      !this.state.priceError &&
      !this.state.imgError &&
      !this.state.descriptionError
    ) {
      await this.setState({ isValid: true });
      await this.uploadFile();
      const product = {
        title: this.state.newProduct,
        price: this.state.price,
        description: this.state.description,
        img: this.state.imgPath,
      };
      userService
        .createProduct(product)
        .then(window.location.replace("/successproduct"))
        .catch(this.setState({ isDone: false }));
    } else await this.setState({ isValid: false });
    if (!this.state.isValid) {
      this.scrollTop();
    }
  };

  changeHandler = (e) => {
    const product = {};
    const name = e.target.name;
    const value = e.target.value;
    product[name] = value;
    this.setState({ ...this.state, ...product });
  };
  async uploadFile() {
    const uploadData = new FormData();

    uploadData.append("myFile", this.state.img, this.state.img.name);

    await userService
      .uploadImage(uploadData)
      .then((res) => this.setState({ imgPath: res.data.path }))
      .catch((e) => {
        console.log(e);
        this.setState({ load: false });
      });
  }
  handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!e.target.files.length) {
      this.setState({ imgError: true });
    } else {
      this.setState({ img: file, imgError: false, imageUpload: true });
    }

    if (file) {
      const reader = new FileReader();
      const { current } = this.uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  inputValidation = async () => {
    const product = await validator.isEmpty(this.state.newProduct);
    const price = await validator.isEmpty(this.state.price);
    const description = await validator.isEmpty(this.state.description);
    if (product) {
      await this.setState({ productError: true });
    } else await this.setState({ productError: false });
    if (price) {
      await await this.setState({ priceError: true });
    } else await this.setState({ priceError: false });
    if (description) {
      await await this.setState({ descriptionError: true });
    } else await this.setState({ descriptionError: false });
    if (this.state.img.length === 0) {
      await this.setState({ imgError: true });
    } else {
      await this.setState({ imgError: false });
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
              <h4 className="card-title">ثبت محصول</h4>
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
              <div className="row">
                <div
                  style={{
                    display: "block",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "auto",
                  }}
                  className="mx-auto"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.handleImageUpload.bind(this)}
                    ref={this.imageUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  <div onClick={() => this.imageUploader.current.click()}>
                    <img
                      src="/img/uploadImage.png"
                      ref={this.uploadedImage}
                      alt="تصویر"
                      style={{
                        width: "400pX",
                        maxHeight: 300,
                        position: "relative",
                      }}
                    />
                  </div>
                  {this.state.imgError ? (
                    <div className="mt-3 text-danger text-center">
                      {"انتخاب تصویر اجباری است."}
                    </div>
                  ) : !this.state.imageUpload ? (
                    <div className="mt-3 text-warning text-center">
                      {" تصویر خود را انتخاب کنید."}
                    </div>
                  ) : (
                    <div className="text-success mt-3 text-center">
                      تصویر با موفقیت انتخاب شد.
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <label className="col-sm-2 col-form-label">نام محصول</label>
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
                      onChange={this.changeHandler.bind(this)}
                    />
                    {this.state.productError ? (
                      <small className="d-block text-danger">
                        نام محصول اجباری است.
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <label className="col-sm-2 col-form-label">قیمت</label>
                <div className="col-sm-10">
                  <div
                    className={
                      this.state.priceError
                        ? this.dangerClassName
                        : this.normalClassName
                    }
                  >
                    <input
                      type="number"
                      className="form-control"
                      placeholder=""
                      name="price"
                      onChange={this.changeHandler.bind(this)}
                    />
                    {this.state.priceError ? (
                      <small className="d-block text-danger">
                        قیمت محصول اجباری است.
                      </small>
                    ) : (
                      <small className="d-block text-info">
                        قیمت محصول را به عدد وارد کنید.
                      </small>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <label className="col-sm-2 col-form-label">توضیحات</label>
                <div className="col-sm-10">
                  <div
                    className={
                      this.state.descriptionError
                        ? this.dangerClassName
                        : this.normalClassName
                    }
                  >
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="description"
                      onChange={this.changeHandler.bind(this)}
                    />
                    {this.state.descriptionError ? (
                      <small className="d-block text-danger">
                        توضیحات محصول اجباری است.
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-success mx-auto">
                  <span className="btn-label">
                    <i className="material-icons">check</i>
                  </span>
                  ثبت محصول
                  <div className="ripple-container"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}