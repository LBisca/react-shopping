import { Consumer } from "../../context";
import Product from "../home/Product";
import React from "react";

export default props => {
  return (
    <Consumer>
      {value => {
        console.log(value.products[1 - 1]);
        return <div />;
      }}
    </Consumer>
  );
};
