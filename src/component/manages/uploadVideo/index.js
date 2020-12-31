import React, { Component } from "react";
import * as userService from "../../../service";
import { Link } from "react-router-dom";
import Loading from "../../loading";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import VideosTable from "./table";
import { deleteVideoStore } from "./redux/store";

export class UploadVideo extends Component {
  constructor(props) {
    super(props);
    this.uploadedImage = React.createRef(null);
    this.imageUploader = React.createRef(null);
  }
  state = {
    video: {},
    loading: false,
    disableButton: true,
  };

  componentDidMount() {
    this.fetchData();
    this.unsubscribe = deleteVideoStore.subscribe(() => this.fetchData());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  fetchData() {
    userService
      .fetchVideos()
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!e.target.files.length) {
      this.setState({ videoError: true });
    } else {
      this.setState({
        disableButton: false,
        video: file,
        videoError: false,
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

    uploadData.append("myFile", this.state.video, this.state.video.name);

    await userService
      .uploadVideo(uploadData)
      .then(async (res) => {
        if (res.status === 200) {
          await this.successAlert();
          await this.fetchData();
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      })
      .finally(() => this.setState({ loading: false }));
  }

  async submitHandler(event) {
    await event.preventDefault();
    await this.setState({
      loading: true,
    });
    await this.uploadFile();
    await event.target.reset();
  }
  successAlert() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui text-right ">
            <i className="material-icons-outlined">done</i>

            <p className="ir-r">ویدئو با موفقیت ذخیره شد .</p>

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
                    <i className="material-icons">play_circle</i>
                  </div>
                  <h4 className="card-title ir-r">آپلود ویدئو</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler.bind(this)}>
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
                          accept="video/*"
                          onChange={this.handleImageUpload.bind(this)}
                          ref={this.imageUploader}
                          style={{
                            display: "none",
                          }}
                        />
                        <div onClick={() => this.imageUploader.current.click()}>
                          <video
                            src={"/assets/video/placeholder.mp4"}
                            ref={this.uploadedImage}
                            className="mx-auto d-block"
                            alt="ویدئو"
                            style={{
                              width: "300px",
                              position: "relative",
                            }}
                          />
                        </div>
                        {this.state.videoError ? (
                          <div className="mt-3 text-danger text-center">
                            {"انتخاب ویدئو اجباری است."}
                          </div>
                        ) : !this.state.imageUpload ? (
                          <div className="mt-3 text-warning text-center">
                            {" ویدئو خود را انتخاب کنید."}
                          </div>
                        ) : (
                          <div className="text-success mt-3 text-center">
                            ویدئو با موفقیت انتخاب شد.
                          </div>
                        )}
                      </div>
                    </div>
                    <VideosTable data={this.state.data} />
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
                            " آپلود ویدئو"
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
