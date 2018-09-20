import React, { Component } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    shoppingList: [],
    products: []
  };

  componentDidMount() {
    fetch("./json.json")
      .then(result => result.json())
      .then(result => {
        this.setState({ products: result });
      });
  }

  handleSubmit = product => {
    this.setState({ shoppingList: [...this.state.shoppingList, product] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="shadow" id="shadow" />
        <Products
          products={this.state.products}
          handleSubmit={this.handleSubmit}
        />
        <Modal shoppingList={this.state.shoppingList} />
        <Footer />
      </div>
    );
  }
}

export default App;
