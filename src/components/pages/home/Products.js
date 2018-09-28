import Product from "./Product";
import { Consumer } from "../../../context";
import Banner from "./Banner";
import "./scss/products.css";
import React from "react";

const Products = props => {
  const products = props.value.products.map((item, index) => {
    if (!props.category) {
      return <Product key={index} item={item} />;
    }
    if (props.category === "Men") {
      if (item.category === "Men" || item.category === "Diverse") {
        return <Product key={index} item={item} />;
      }
    }
    if (props.category === "Women") {
      if (item.category === "Women" || item.category === "Diverse") {
        return <Product key={index} item={item} />;
      }
    }
    return null;
  });

  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            <Banner />
            <div className="products">
              <h1 className="products--title">Latest Products</h1>
              <div className="products--container">{products}</div>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default props => (
  <Consumer>
    {value => {
      return <Products {...props} value={value} />;
    }}
  </Consumer>
);
