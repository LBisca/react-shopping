import Product from "./Product";
import { Consumer } from "../../context";
import Banner from "./Banner";
import "../../scss/components/products.css";
import React from "react";

const Products = () => {
  return (
    <Consumer>
      {value => {
        return (
          <div>
            <Banner />
            <div className="products">
              <h1 className="products--title">Latest Products</h1>
              <div className="products--container">
                {value.products.map(item => (
                  <Product key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Products;
