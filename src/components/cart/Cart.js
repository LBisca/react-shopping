import React from "react";
import { Consumer } from "../../context";
import Product from "../home/Product";
import "./cart.css";

const Cart = () => {
  return (
    <Consumer>
      {value => {
        return (
          <div className="cart">
            <div className="cart--contents">
              {value.shoppingList.map(item => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Cart;
