import { Consumer } from "../../context";
import Product from "../home/Product";
import Description from "./Description";
import React from "react";

import "../../scss/components/item.css";

export default props => {
  return (
    <Consumer>
      {value => {
        const { id } = props.match.params;
        const { products } = value;

        return (
          <div className="item">
            <div className="item--container">
              <Description />
              <Product item={products[id]} />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
