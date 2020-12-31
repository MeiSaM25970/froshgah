import React, { Component } from "react";
import * as userService from "../../../service";
import { Link } from "react-router-dom";
import validator from "validator";
import Loading from "../../loading";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { API_ADDRESS_SERVICE } from "../../../env";

export class ManageFooter extends Component {
  constructor(props) {
    super(props);
    this.uploadedImage = React.createRef(null);
    this.imageUploader = React.createRef(null);
  }
  state = {
    loading: false,
    disableButton: true,
    data: [],
    imgPath: "",
    description: "",
    linkedIn: "",
    instagram: "",
    facebook: "",
    twitter: "",
    telegram: "",
    whatsApp: "",
    address: "",
    mobile1: "",
    mobile2: "",
    tel: "",
    email: "",
    id: "",
  };

  async componentDidMount() {
    await this.fetchData();
  }

  changeHandler(e) {
    const user = {};
    const name = e.target.name;
    const value = e.target.value;
    user[name] = value;
    this.setState({
      disableButton: false,
      ...user,
    });
  }
  handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!e.target.files.length) {
      this.setState({ imgError: true });
    } else {
      this.setState({
        disableButton: false,
        img: file,
        imgError: false,
        imageUpload: true,
      });
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
  async uploadFile() {
    const uploadData = new FormData();

    uploadData.append("myFile", this.state.img, this.state.img.name);

    await userService
      .uploadUserImg(uploadData)
      .then((res) =>
        this.setState({
          imgPath: res.data.path,
        })
      )
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  }
  fetchData() {
    userService
      .fetchFooterDetail()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err))
      .finally(() => this.checkData());
  }
  checkData() {
    if (this.state.data.length > 0) {
      this.setState({
        imgPath: this.state.data[0].imgPath,
        description: this.state.data[0].description,
        linkedIn: this.state.data[0].linkedIn,
        instagram: this.state.data[0].instagram,
        facebook: this.state.data[0].facebook,
        twitter: this.state.data[0].twitter,
        telegram: this.state.data[0].telegram,
        whatsApp: this.state.data[0].whatsApp,
        address: this.state.data[0].address,
        mobile1: this.state.data[0].mobile1,
        mobile2: this.state.data[0].mobile2,
        tel: this.state.data[0].tel,
        email: this.state.data[0].email,
        id: this.state.data[0]._id,
      });
    }
  }
  async submitHandler(event) {
    await event.preventDefault();
    await this.setState({
      loading: true,
    });
    if (this.state.img) {
      await this.uploadFile();
    }
    const info = {
      imgPath: this.state.imgPath,
      description: this.state.description,
      linkedIn: this.state.linkedIn,
      instagram: this.state.instagram,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      telegram: this.state.telegram,
      whatsApp: this.state.whatsApp,
      address: this.state.address,
      mobile1: this.state.mobile1,
      mobile2: this.state.mobile2,
      tel: this.state.tel,
      email: this.state.email,
    };
    if (this.state.data.length > 0) {
      userService
        .updateFooterDetail(this.state.data[0]._id, info)
        .then(() => {
          this.setState({ loading: false });
          this.okAlert();
        })
        .catch((err) => console.log(err));
    } else {
      userService
        .createFooterDetail(info)
        .then(() => {
          this.setState({ loading: false });
          this.okAlert();
        })
        .catch((err) => console.log(err));
    }
  }
  okAlert() {
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
              }}
            >
              باشه
            </button>
          </div>
        );
      },
    });
  }
  render() {
    return (
      <div className="content ir-r text-right">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-icon card-header-rose">
                  <div className="card-icon">
                    <i className="material-icons"> phone </i>
                  </div>
                  <h4 className="card-title ir-r">اطلاعات تماس و پاورقی</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler.bind(this)}>
                    <label className="row bmd-label-floating">
                      لوگوی سایت:
                    </label>

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
                            src={
                              !validator.isEmpty(this.state.imgPath)
                                ? API_ADDRESS_SERVICE + this.state.imgPath
                                : "/assets/img/placeholder.jpg"
                            }
                            ref={this.uploadedImage}
                            className="mx-auto d-block"
                            alt="تصویر"
                            style={{
                              width: "100px",
                              position: "relative",
                              borderRadius: "50%",
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
                      <div className="form-group bmd-form-group col-md-8">
                        <label className="ir-r">توضیحات پاورقی:</label>
                        <textarea
                          rows="5"
                          type="text"
                          className="form-control"
                          defaultValue={this.state.description}
                          name="description"
                          onChange={this.changeHandler.bind(this)}
                        />
                      </div>
                    </div>
                    <label className="ir-r mt-5">آدرس شبکه های مجازی:</label>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">لینکدین</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.linkedIn}
                            onChange={this.changeHandler.bind(this)}
                            name="linkedIn"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">
                            اینستاگرام
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.instagram}
                            onChange={this.changeHandler.bind(this)}
                            name="instagram"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">فیسبوک</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.facebook}
                            onChange={this.changeHandler.bind(this)}
                            name="facebook"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">توییتر</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.twitter}
                            onChange={this.changeHandler.bind(this)}
                            name="twitter"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">تلگرام</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.telegram}
                            onChange={this.changeHandler.bind(this)}
                            name="telegram"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">واتساپ</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.whatsApp}
                            onChange={this.changeHandler.bind(this)}
                            name="whatsApp"
                          />
                        </div>
                      </div>
                    </div>
                    <label className="ir-r mt-5">راه های ارتباطی:</label>
                    <div className="row">
                      <div className="form-group bmd-form-group col-md-8">
                        <label className="ir-r">آدرس:</label>
                        <textarea
                          rows="5"
                          type="text"
                          className="form-control"
                          defaultValue={this.state.address}
                          name="address"
                          onChange={this.changeHandler.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">
                            تلفن همراه
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.mobile1}
                            onChange={this.changeHandler.bind(this)}
                            name="mobile1"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">
                            تلفن همراه
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.mobile2}
                            onChange={this.changeHandler.bind(this)}
                            name="mobile2"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">
                            تلفن ثابت
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.tel}
                            onChange={this.changeHandler.bind(this)}
                            name="tel"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">ایمیل</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue={this.state.email}
                            onChange={this.changeHandler.bind(this)}
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row " style={{ marginTop: 100 }}>
                      <div className="mr-5">
                        <button
                          type="submit"
                          className="btn btn-rose pull-right"
                          disabled={this.state.disableButton}
                        >
                          {this.state.loading ? (
                            <Loading size={15} />
                          ) : (
                            " ذخیره"
                          )}
                        </button>
                        <Link to="/dashboard">
                          <button className=" btn btn-mute" type="button">
                            بازگشت
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
