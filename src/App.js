import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Page from "./component/pageTitle/pageTitle";
import { HomePage, ManageProductAPage } from "./pages/";
import { Login } from "./component/Login";
import { Register } from "./component/register";
import { DashboardPage } from "./pages/dashboard";
import { ProductPage } from "./pages/productPage";
import { ProductRegisterPage } from "./pages/productRegister";
import { SuccessDone } from "./component/product/success";
import { ErrorPage } from "./pages/ErrorPage2";
import * as userService from "./service";

class App extends Component {
  state = { userInfo: {}, data: [] };

  userInfo =
    localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");
  userIsLogin() {
    if (this.userInfo) {
      this.setState({ userInfo: JSON.parse(this.userInfo) });
    }
  }
  fetchData() {
    userService.fetchProduct().then((res) => this.setState({ data: res.data }));
  }
  componentDidMount() {
    this.userIsLogin();
    this.fetchData();
  }

  render() {
    return this.userInfo ? (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route
              path="/login"
              exact
              render={(props) => (
                <Page title="ورود">
                  <Login {...props} />
                </Page>
              )}
            />
            <Route
              path="/product"
              exact
              render={(props) => (
                <Page title="محصولات">
                  <ProductPage {...props} data={this.state.data} />
                </Page>
              )}
            />
            <Route
              path="/productregister"
              exact
              render={(props) => (
                <Page title="ثبت محصول">
                  <ProductRegisterPage {...props} />
                </Page>
              )}
            />
            <Route
              path="/register"
              exact
              render={(props) => (
                <Page title="عضویت">
                  <Register {...props} />
                </Page>
              )}
            />
            <Route
              path="/successproduct"
              exact
              render={(props) => (
                <Page title="ثبت موفق">
                  <SuccessDone {...props} />
                </Page>
              )}
            />
            <Route
              path="/dashboard"
              exact
              render={(props) => (
                <Page title="داشبورد">
                  <DashboardPage {...props} userInfo={this.state.userInfo} />
                </Page>
              )}
            />
            <Route
              path="/error"
              exact
              render={(props) => (
                <Page title="خطای اتصال به سرور">
                  <ErrorPage {...props} />
                </Page>
              )}
            />
            <Route
              path="/manage-product-a-page"
              exact
              render={(props) => (
                <Page title="مدیریت صحفه محصول 1">
                  <ManageProductAPage {...props} data={this.state.data} />
                </Page>
              )}
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    ) : (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route
              path="/login"
              exact
              render={(props) => (
                <Page title="ورود">
                  <Login {...props} />
                </Page>
              )}
            />
            <Route
              path="/error"
              exact
              render={(props) => (
                <Page title="خطای اتصال به سرور">
                  <ErrorPage {...props} />
                </Page>
              )}
            />

            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
