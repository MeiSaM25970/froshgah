import React, { Component, Fragment } from "react";
import { Comments } from "../component/comments";
import { MainNavbar, SideBar } from "../component/dashboard";
import * as userService from "../service";

export class CommentsPage extends Component {
  state = { comments: [] };
  componentDidMount() {
    userService
      .fetchComments()
      .then((res) => {
        this.setState({ comments: res.data });
      })
      .catch(() => this.props.history.push("/error"));
  }
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <SideBar {...this.props} />
        <div className="main-panel ps ps--active-y">
          <MainNavbar {...this.props} />
          <Comments comments={this.state.comments} {...this.props} />
        </div>
      </Fragment>
    );
  }
}
