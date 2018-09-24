import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import "../../scss/components/header.css";

import React from "react";

export default () => {
  return (
    <Consumer>
      {value => {
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
              <a
                href="/cart"
                className="navigation-bar--cart"
                onClick={value.handleSubmit}
              />
            </div>
          </header>
        );
      }}
    </Consumer>
  );
};
