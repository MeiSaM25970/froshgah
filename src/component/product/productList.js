import React, { Component } from "react";
import { Product } from "./product";
import Loading from "../loading";

export class ProductList extends Component {
  render() {
    // return <div>{console.log(this.props)}</div>;
    return this.props.data.length === 0 ? (
      <div className="container text-right">
        <Loading />
        <h3 className="text-warning">موارد زیر را بررسی کنید.</h3>
        <ul>
          <li>1-حداقل باید یک محصول تعریف نمایید.</li>
          <li>2-از ارتباط با سرور اطمینان حاصل نمایید.</li>
        </ul>
      </div>
    ) : (
      this.props.data.map((item, index) => <Product item={item} key={index} />)
    );
  }
}
