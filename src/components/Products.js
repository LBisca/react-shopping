import Product from "./Product";
import "../scss/components/products.css";

import React, { Component } from "react";

export default class Products extends Component {
  render = props => {
    const { products, handleSubmit } = this.props;
    console.log(products);

    return (
      <div className="products-container">
        <Product productData={products} handleSubmit={handleSubmit} />
      </div>
    );
  };
}
