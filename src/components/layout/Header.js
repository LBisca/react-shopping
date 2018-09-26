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
              <Link to="/" className="navigation-bar--text">
                Shopping
              </Link>
              <div className="navigation-bar--menu">
                <ul>
                  <Link className={"link"} to={"/women"}>
                    Women
                  </Link>
                  <Link className={"link"} to={"/men"}>
                    Men
                  </Link>
                  <Link className={"link"} to={"/about"}>
                    About
                  </Link>
                </ul>
              </div>
              <Link to={"/cart"} className="navigation-bar--cart" />
            </div>
          </header>
        );
      }}
    </Consumer>
  );
};
