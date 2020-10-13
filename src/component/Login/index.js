import React, { Fragment } from "react";
import { Navbar } from "./navbar";

export const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="wrapper wrapper-full-page">
        <div
          className="page-header login-page header-filter"
          filter-color="black"
          style={{
            backgroundImage: " url('/img/01.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 mx-auto my-auto">
                <form className="form " method="" action="">
                  <div className="card card-login">
                    <div className="card-header card-header-rose text-center">
                      <h4 className="card-title">ورود</h4>
                    </div>
                    <div className="card-body pr-2 pl-4">
                      {/* <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">face</i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                        />
                      </div>
                    </span>
                     */}
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">email</i>
                            </span>
                          </div>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="ایمیل"
                          />
                        </div>
                      </span>
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="رمز عبور"
                          />
                        </div>
                      </span>
                    </div>
                    <div className="card-footer justify-content-center">
                      <a href="#pablo" className="btn btn-rose btn-link btn-lg">
                        ورود
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <nav className="float-left">
                <ul></ul>
              </nav>
              <div className="copyright float-right">
                <a
                  href="http://tad-group.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" طراحی وب سایت"}{" "}
                </a>
                {" توسط گروه"}{" "}
                <a
                  href="http://tad-group.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"تاد  "}{" "}
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};
