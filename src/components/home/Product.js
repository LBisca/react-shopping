import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../scss/components/product.css";

class Product extends Component {
  render = props => {
    const { item } = this.props;

    let promotion = "";
    if (item.promotion) {
      promotion = "product--promotion--on";
    }

    let data = { pathname: `/item/${item.id}`, item: item };

    return (
      <Link to={data} className="product">
        <div className={`product--promotion ${promotion}`}>-50%</div>
        <img
          className="product--image"
          src={require(`../../media/img/${item.url}`)}
        />
        <div className="product--name">{item.name}</div>
        <div className="product--price">R$ {item.price}</div>
      </Link>
    );
  };
}

export default Product;
