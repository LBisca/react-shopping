import Product from "./Product";
import { Consumer } from "../../context";
import "../../scss/components/products.css";

import React, { Component } from "react";

export default class Products extends Component {
  render = props => {
    return (
      <Consumer>
        {value => {
          return (
            <div className="products">
              <h1 className="products--title">Latest Products</h1>
              <div className="products--container">
                {value.products.map(item => (
                  <Product key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  };
}
