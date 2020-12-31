import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_ADDRESS_SERVICE } from "../../../env";
import * as userService from "../../../service";
import { deleteVideoAction } from "./redux/actions";
import { deleteVideoStore } from "./redux/store";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class VideosTable extends Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  componentWillReceiveProps(newProps) {
    this.setState({ data: newProps.data });
  }
  deleteVideo(videoPath, id) {
    const videoName = videoPath.substr(14);
    userService
      .deleteVideo(videoName, id)
      .then((res) => {
        if (res.status === 200) {
          deleteVideoStore.dispatch(deleteVideoAction(res.data));
        }
      })
      .catch((err) => console.log(err));
  }
  deleteAlert(videoPath, id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui text-right ">
            <i className="material-icons-outlined">info</i>

            <h1 className="ir-r">مطمئنید؟</h1>

            <p className="ir-r">آیا شما میخواهید این ویدئو را پاک کنید؟</p>
            <button className="btn btn-danger" onClick={onClose}>
              خیر
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                this.deleteVideo(videoPath, id);
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
  render() {
    return this.state.data && this.state.data.length > 0 ? (
      <table className="table table-striped mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">ردیف</th>
            <th scope="col">نام</th>
            <th>ویدئو</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((video, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{video.videoPath.substr(39)}</td>
              <td>
                <video
                  src={API_ADDRESS_SERVICE + video.videoPath}
                  width="200px"
                  controls={true}
                />
              </td>
              <td>
                <Link
                  to="#"
                  onClick={() => this.deleteAlert(video.videoPath, video._id)}
                >
                  <i className="material-icons">delete </i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      ""
    );
  }
}

export default VideosTable;
