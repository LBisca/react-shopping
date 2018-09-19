import React, { Component } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    shoppingList: []
  };

  handleSubmit = product => {
    this.setState({ shoppingList: [...this.state.shoppingList, product] });
  };

  render() {
    const products = [
      {
        name: "grey t-shirt",
        type: "t-shirt",
        url: "mtsh0007s-gyaa.jpg",
        price: 25.31
      },
      {
        name: "grey t-shirt",
        type: "t-shirt",
        url: "mtsh0007s-gyaa.jpg",
        price: 25.31
      },
      {
        name: "grey t-shirt",
        type: "t-shirt",
        url: "mtsh0007s-gyaa.jpg",
        price: 25.31
      },
      {
        name: "hair ointment",
        type: "cosmetic",
        url: "hair-oil.png",
        price: 89.42
      },
      {
        name: "blue t-shirt",
        type: "t-shirt",
        url: "TM71B00PBLE_F_1.jpg",
        price: 19.99
      },
      {
        name: "blue t-shirt",
        type: "t-shirt",
        url: "TM71B00PBLE_F_1.jpg",
        price: 19.99
      },
      {
        name: "dark jeans",
        type: "pants",
        url: "1488961149.8659.jpg",
        price: 116.72
      },
      {
        name: "dark jeans",
        type: "pants",
        url: "1488961149.8659.jpg",
        price: 116.72
      }
    ];

    return (
      <div className="App">
        <Header />
        <Products products={products} handleSubmit={this.handleSubmit} />
        <Modal shoppingList={this.state.shoppingList} />
        <Footer />
      </div>
    );
  }
}

export default App;