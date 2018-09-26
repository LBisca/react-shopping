import { Consumer } from "../../context";
import React, { Component } from "react";
import Product from "../home/Product";
import "./cart.css";

class Cart extends Component {
  onDeleteClick(item, dispatch) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
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
                          item,
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
