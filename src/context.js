import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/15310c")
      .then(result => result.json())
      .then(result => {
        this.setState({ products: result });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state} handleSubmit={this.handleSubmit}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
