import React, { Component } from "react";
import "../scss/components/header.css";

export default class Header extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <header className="navigation-bar">
        <div className="navigation-bar--contents">
          <div className="navigation-bar--menu" />
          <h1 className="navigation-bar--text">Shopping Cart</h1>
          <div className="navigation-bar--search" />
          <input
            className="navigation-bar--input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="navigation-bar--cart" />
        </div>
      </header>
    );
  }
}
