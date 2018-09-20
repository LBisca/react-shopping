import React, { Component } from "react";
import "../scss/components/product.css";

class Product extends Component {
  state = {
    count: 0
  };

  render = props => {
    const items = this.props.productData.map((item, index) => {
      let p = "";

      if (item.promotion) {
        p = "product--promotion--on";
      }

      return (
        <div className="product" onClick={() => this.props.handleSubmit(item)}>
          <div className={`product--promotion ${p}`}>-50%</div>
          <img
            className="product--image"
            src={require(`../media/img/${item.url}`)}
          />
          <div className="product--name">{item.name}</div>
          <div className="product--price">R$ {item.price}</div>
        </div>
      );
    });

    return <React.Fragment>{items}</React.Fragment>;
  };
}

export default Product;
