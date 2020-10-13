import React, { Component } from "react";
import { API_ADDRESS_SERVICE } from "../../env";

export class Product extends Component {
  state = {};
  render() {
    console.log(this.props.item);
    return (
      <div className="col-md-4 ">
        <div className="card card-product">
          <div
            className="card-header card-header-image"
            data-header-animation="true"
          >
            <a href="#pablo">
              <img
                className="img"
                src={API_ADDRESS_SERVICE + this.props.item.img}
                alt="..."
              />
            </a>
          </div>
          <div className="card-body">
            <div className="card-actions text-center">
              <button
                type="button"
                className="btn btn-danger btn-link fix-broken-card"
              >
                <i className="material-icons">build</i> Fix Header!
              </button>
              <button
                type="button"
                className="btn btn-default btn-link"
                rel="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="View"
              >
                <i className="material-icons">art_track</i>
              </button>
              <button
                type="button"
                className="btn btn-success btn-link"
                rel="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Edit"
              >
                <i className="material-icons">edit</i>
              </button>
              <button
                type="button"
                className="btn btn-danger btn-link"
                rel="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Remove"
              >
                <i className="material-icons">close</i>
              </button>
            </div>
            <h4 className="card-title">
              <a href="#pablo">{this.props.item.title}</a>
            </h4>
            <div className="card-description">
              {this.props.item.description}
            </div>
          </div>
          <div className="card-footer">
            <div className="price mx-auto">
              <h4>{this.props.item.price}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
