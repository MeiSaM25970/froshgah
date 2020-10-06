import React, { Component } from "react";

const data = require("../material-dashboard-pro-html-v2.1.2/examples/pages/rtl.html");
export class HomePage extends Component {
  render() {
    return(
     <div class="off-canvas-sidebar">
    
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
      <div class="container">
        <div class="navbar-wrapper">
          <a class="navbar-brand" href="javascript:;">Login Page</a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="../dashboard.html" class="nav-link">
                <i class="material-icons">dashboard</i>
                Dashboard
              </a>
            </li>
            <li class="nav-item ">
              <a href="../pages/register.html" class="nav-link">
                <i class="material-icons">person_add</i>
                Register
              </a>
            </li>
            <li class="nav-item  active ">
              <a href="../pages/login.html" class="nav-link">
                <i class="material-icons">fingerprint</i>
                Login
              </a>
            </li>
            <li class="nav-item ">
              <a href="../pages/lock.html" class="nav-link">
                <i class="material-icons">lock_open</i>
                Lock
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="wrapper wrapper-full-page">
      <div class="page-header login-page header-filter" filter-color="black" style={{backgroundImage: "url('../../assets/img/login.jpg')", backgroundSize: 'cover', backgroundPosition: 'top center'>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <form class="form" method="" action="">
                <div class="card card-login card-hidden">
                  <div class="card-header card-header-rose text-center">
                    <h4 class="card-title">Login</h4>
                    <div class="social-line">
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                        <i class="fa fa-facebook-square"></i>
                      </a>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div class="card-body ">
                    <p class="card-description text-center">Or Be Classical</p>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">face</i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="First Name..."/>
                      </div>
                    </span>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">email</i>
                          </span>
                        </div>
                        <input type="email" class="form-control" placeholder="Email..."/>
                      </div>
                    </span>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <input type="password" class="form-control" placeholder="Password..."/>
                      </div>
                    </span>
                  </div>
                  <div class="card-footer justify-content-center">
                    <a href="#pablo" class="btn btn-rose btn-link btn-lg">Lets Go</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <nav class="float-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com/">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/presentation">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright float-right">
              &copy;
              <script>
                document.write(new Date().getFullYear())
              </script>, made with <i class="material-icons">favorite</i> by
              <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a> for a better web.
            </div>
          </div>
        </footer>
      </div>
    </div>
   
  </div>)
}
