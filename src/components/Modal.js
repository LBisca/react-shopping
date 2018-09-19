import React, { Component } from "react";
import "../scss/components/modal.css";

class Modal extends Component {
  render = props => {
    const items = this.props.shoppingList.map((item, index) => {
      return <h4>{item.name}</h4>;
    });

    return (
      <div className="modal" id="modal">
        {items}
      </div>
    );
  };
}

export default Modal;
