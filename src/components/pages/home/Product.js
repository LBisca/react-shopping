import { Link } from "react-router-dom";

import "./scss/product.css";
import React from "react";

const Product = props => {
  const { item } = props;
  let promotion = "";
  if (item.promotion) {
    promotion = "product--promotion--on";
  }

  const data = { pathname: `/item/${item.id}` };

  return (
    <Link to={data} className="product">
      <div className={`product--promotion ${promotion}`}>-50%</div>
      <img
        className="product--image"
        src={require(`../../../media/img/${item.url}`)}
      />
      <div className="product--name">{item.name}</div>
      <div className="product--price">R$ {item.price}</div>
    </Link>
  );
};

export default Product;
