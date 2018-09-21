import { Consumer } from "../../context";
import Product from "../home/Product";
import React from "react";

export default props => {
  return (
    <Consumer>
      {value => {
        console.log(value.products[props.match.params.id]);
        return <div />;
      }}
    </Consumer>
  );
};
