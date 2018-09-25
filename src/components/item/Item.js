import { Consumer } from "../../context";
import Product from "../home/Product";
import { Link } from "react-router-dom";
import Description from "./Description";
import axios from "axios";

import "../../scss/components/item.css";
import React, { Component } from "react";

class Item extends Component {
  onUpdateClick = (product, dispatch) => {
    dispatch({ type: "UPDATE_ITEM", payload: product });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { id } = this.props.match.params;

          return (
            <div className="item">
              <div className="item--container">
                <Description />
                <Product
                  key={value.products[id].id}
                  item={value.products[id]}
                />
              </div>
              <Link
                to={"/cart"}
                className="button"
                onClick={this.onUpdateClick.bind(
                  this,
                  value.products[id],
                  dispatch
                )}
              >
                Add to Cart
              </Link>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Item;
