import React from "react";
import "../scss/components/product.css";

const Product = props => {
  const items = props.productData.map((item, index) => {
    return (
      <div className="product">
        <img
          className="product--image"
          src={require(`../media/img/${item.url}`)}
        />
        <div className="product--name">{item.name}</div>
        <div className="product--price">{item.price}</div>
        <div className="product--button">
          <div className="product--button--minus product--btn" />
          <div className="product--button--counter product--btn" />
          <div className="product--button--plus product--btn" />
        </div>
      </div>
    );
  });

  return <React.Fragment>{items}</React.Fragment>;
};

export default Product;
