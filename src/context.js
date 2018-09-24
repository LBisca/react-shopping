import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    products: [],
    shoppingList: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/qwwt8")
      .then(result => result.json())
      .then(result => {
        this.setState({ products: result });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
