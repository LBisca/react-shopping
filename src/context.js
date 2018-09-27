import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ITEM":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          product => product.orderId !== action.payload.orderId
        )
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

  async componentDidMount() {
    const result = await axios.get("https://api.myjson.com/bins/1ca2pc");
    this.setState({ products: result.data });
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
