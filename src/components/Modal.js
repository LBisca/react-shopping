import React, { Component } from "react";
import "../scss/components/modal.css";

class Modal extends Component {
  render = props => {
    const { shoppingList } = this.props;
    const items = shoppingList.map((item, index) => {
      return (
        <tr>
          <td className="modal--contents--unit">
            <img
              className="modal--contents--img"
              src={require(`../media/img/${item.url}`)}
              alt=""
            />
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td
            className="modal--remove"
            onClick={() => this.props.removeProduct(index)}
          />
        </tr>
      );
    });

    let total = 0;
    total = shoppingList
      .map(item => item.price)
      .reduce((prev, next) => prev + next, 0);

    return (
      <div className="modal" id="modal">
        <table className="modal--contents">
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {items}
          <tr>
            Total:
            {total.toFixed(2)}
          </tr>
        </table>
      </div>
    );
  };
}

export default Modal;
