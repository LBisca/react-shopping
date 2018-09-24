import { Consumer } from "../../context";
import Product from "../home/Product";
import Description from "./Description";

import "../../scss/components/item.css";
import React, { Component } from "react";

class Item extends Component {
  state = {
    shoppingList: []
  };

  render = props => {
    return (
      <Consumer>
        {value => {
          const { id } = this.props.match.params;

          return (
            <div className="item">
              <div className="item--container">
                <Description />
                <Product item={value.products[id]} />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  };
}

export default Item;
