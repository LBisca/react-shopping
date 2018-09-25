import { Consumer } from "../../context";
import Product from "../home/Product";
import "./cart.css";

import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="cart">
              <div>{value.total}</div>
              <div className="cart--contents">
                {value.shoppingList.map(item => (
                  <Product item={item} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
