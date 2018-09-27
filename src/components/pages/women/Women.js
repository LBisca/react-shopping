import React from "react";
import Products from "../home/Products";
import "../style.css";

import { Consumer } from "../../../context";

const Women = props => {
  return (
    <Consumer>
      {value => {
        return (
          <div className="container">
            <div className="container--men">
              <Products category="Women" />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Women;
