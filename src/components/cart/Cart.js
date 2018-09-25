import { Consumer } from "../../context";
import React, { Component } from "react";
import Product from "../home/Product";
import "./cart.css";

class Cart extends Component {
  onDeleteClick(index, dispatch) {
    dispatch({ type: "CLEAR_CART" });
  }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="container">
              <div className="total">{`Total: R$ ${value.total}`}</div>
              <div className="cart">
                <div className="cart--contents">
                  {value.shoppingList.map((item, index) => (
                    <div key={index}>
                      <Product item={item} />
                      <div
                        className="delete"
                        onClick={this.onDeleteClick.bind(
                          this,
                          index,
                          value.dispatch
                        )}
                      >
                        CLEAR CART
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
