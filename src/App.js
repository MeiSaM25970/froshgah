import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Page from "./component/pageTitle/pageTitle";
import { HomePage } from "./pages/";
import { Login } from "./component/Login";
import { Register } from "./component/register";
import { DashboardPage } from "./pages/dashboard";
import { ProductPage } from "./pages/productPage";
import { ProductRegisterPage } from "./pages/productRegister";
import { SuccessDone } from "./component/product/success";

function App() {
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
            path="/product"
            exact
            render={(props) => (
              <Page title="محصولات">
                <ProductPage {...props} />
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
                <DashboardPage {...props} />
              </Page>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
