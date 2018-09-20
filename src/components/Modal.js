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

    return (
      <div className="modal" id="modal">
        <table className="modal--contents">
          <tr>
            <th>item</th>
            <th>name</th>
            <th>price</th>
          </tr>
          {items}
        </table>
      </div>
    );
  };
}

export default Modal;
