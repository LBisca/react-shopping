import React, { Component } from "react";
import "../scss/components/product.css";

class Product extends Component {
  state = {
    count: 0
  };

  render = props => {
    const items = this.props.productData.map((item, index) => {
      return (
        <div className="product">
          <img
            className="product--image"
            src={require(`../media/img/${item.url}`)}
          />
          <div className="product--name">{item.name}</div>
          <div className="product--price">R$ {item.price}</div>
          <div
            className="product--button--plus product--btn"
            onClick={() => this.props.handleSubmit(item)}
          />
        </div>
      );
    });

    return <React.Fragment>{items}</React.Fragment>;
  };
}

export default Product;