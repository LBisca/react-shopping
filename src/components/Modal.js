import React, { Component } from "react";
import "../scss/components/modal.css";

class Modal extends Component {
  render = props => {
    const items = this.props.shoppingList.map((item, index) => {
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
        </tr>
      );
    });

    // const total = this.props.shoppingList.map((item, index) => {
    //   item.price
    // })

    return (
      <div className="modal" id="modal">
        <table className="modal--contents">
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {items}
          <tr>Total:</tr>
        </table>
      </div>
    );
  };
}

export default Modal;
