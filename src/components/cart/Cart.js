import { Consumer } from "../../context";
import React, { Component } from "react";
import Product from "../home/Product";

import "./cart.css";
import Description from "../item/Description";

class Cart extends Component {
  onDeleteClick(item, dispatch) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const products = value.shoppingList.map((item, index) => {
            return (
              <div className="grid-container" key={index}>
                <div className="grid-container--first">
                  <Product item={item} />
                  <div
                    className="delete"
                    onClick={this.onDeleteClick.bind(
                      this,
                      item,
                      value.dispatch
                    )}
                  >
                    REMOVE
                  </div>
                </div>
                <div className="grid-container--last">
                  <Description />
                </div>
              </div>
            );
          });

          return (
            <div className="container">
              <div className="total">{`Total: R$ ${value.total}`}</div>
              <div className="cart">
                <div className="cart--contents">{products}</div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
