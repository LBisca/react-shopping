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

    case "UPDATE_TOTAL":
      return {
        total: state.shoppingList
          .map(item => item.price)
          .reduce((prev, next) => prev + next, 0)
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
    total: 0,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const result = await axios.get("https://api.myjson.com/bins/wys94");
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
