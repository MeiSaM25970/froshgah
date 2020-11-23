import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Page from "./component/pageTitle/pageTitle";
import {
  HomePage,
  DashboardPage,
  ProductPage,
  ProductRegisterPage,
  ErrorPage,
  OrderPage,
  OrderDetailPage,
  ProductEditPage,
  CategoriesPage,
  EditProfilePage,
  NewUserPage,
  ChangePasswordPage,
} from "./pages/";
import { Login } from "./component/Login";
import { SuccessDone } from "./component/product/success";
import * as userService from "./service";
import { loginUserStore } from "./component/Login/redux";
import { switchSidebarStore } from "./component/dashboard/redux/";

class App extends Component {
  state = { data: [], miniSidebar: false };

  userIsLogin() {
    if (this.userInfo) {
      this.setState({ userInfo: JSON.parse(this.userInfo) });
    }
  }
  fetchData() {
    userService
      .fetchProduct(this.state.userInfo)
      .then((res) => this.setState({ data: res.data }));
  }
  componentDidMount() {
    this.userInfo =
      localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");
    this.userIsLogin();
    this.fetchData();

    this.unsubscribe = loginUserStore.subscribe(() => {
      const arrayNumber = loginUserStore.getState().length;
      this.setState({ userInfo: loginUserStore.getState()[arrayNumber - 1] });
    });
    switchSidebarStore.subscribe(() => {
      const arrayNumber = switchSidebarStore.getState().length;
      this.setState({
        miniSidebar: switchSidebarStore.getState()[arrayNumber - 1],
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.userInfo || this.state.userInfo !== undefined) {
      return (
        <div
          className={
            this.state.miniSidebar.miniSidebar ? "App sidebar-mini" : "App"
          }
        >
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route
                path="/myprofile"
                exact
                render={(props) => (
                  <Page title="محصولات">
                    <EditProfilePage {...props} />
                  </Page>
                )}
              />
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
                path="/product/:id"
                exact
                render={(props) => (
                  <Page title="ویرایش محصول">
                    <ProductEditPage {...props} />
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
                path="/successproduct"
                exact
                render={(props) => (
                  <Page title="ثبت موفق">
                    <SuccessDone {...props} />
                  </Page>
                )}
              />
              <Route
                path="/newUser"
                exact
                render={(props) => (
                  <Page title="ورود">
                    <NewUserPage {...props} />
                  </Page>
                )}
              />
              <Route
                path="/changePassword"
                exact
                render={(props) => (
                  <Page title="ورود">
                    <ChangePasswordPage {...props} />
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
                path="/categories"
                exact
                render={(props) => (
                  <Page title="موضوعات وبلاگ">
                    <CategoriesPage {...props} />
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
                path="/order"
                exact
                render={(props) => (
                  <Page title="سفارشات">
                    <OrderPage {...props} data={this.state.data} />
                  </Page>
                )}
              />
              <Route
                path="/order/:id"
                exact
                render={(props) => (
                  <Page title=" بررسی سفارش">
                    <OrderDetailPage {...props} data={this.state.data} />
                  </Page>
                )}
              />
              <Redirect to="/login" />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else
      return (
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
