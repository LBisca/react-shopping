import React, { Component } from "react";
import "../scss/components/header.css";

export default class Header extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  showModal = () => {
    document.getElementById("modal").classList.toggle("modal--visible");
    document.getElementById("shadow").classList.toggle("on");
    document.getElementById("shadow").onclick = this.showModal;
  };

  render() {
    return (
      <header className="navigation-bar">
        <div className="navigation-bar--contents">
          <div className="navigation-bar--text">Shopping</div>
          <div className="navigation-bar--menu">
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
            </ul>
          </div>

          <div className="navigation-bar--cart" onClick={this.showModal} />
        </div>
      </header>
    );
  }
}
