import React from "react";
import "../style.css";
import Products from "../home/Products";

import { Consumer } from "../../../context";

const Men = props => {
  return (
    <Consumer>
      {value => {
        return (
          <div className="container">
            <div className="container--men">
              <Products category="Men" />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Men;
