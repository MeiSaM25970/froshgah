import React from "react";

export const DetailWebsite = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div
            className="card-header card-header-warning card-header-icon "
            style={{ height: 100 }}
          >
            <div className="card-icon">
              <i className="material-icons">weekend</i>
            </div>
            <p className="card-category">کل سفارشات</p>
            <h3 className="card-title">184</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div
            className="card-header card-header-rose card-header-icon"
            style={{ height: 100 }}
          >
            <div className="card-icon">
              <i className="material-icons">equalizer</i>
            </div>
            <p className="card-category">بازدید از سایت</p>
            <h3 className="card-title">75.521</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div
            className="card-header card-header-success card-header-icon"
            style={{ height: 100 }}
          >
            <div className="card-icon">
              <i className="material-icons">store</i>
            </div>
            <p className="card-category">جمع کل پرداختی ها</p>
            <h3 className="card-title">$34,245</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
