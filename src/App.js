import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import CartModal from "./components/Modal";
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

  removeProduct = index => {
    const { shoppingList } = this.state;

    this.setState({
      shoppingList: shoppingList.filter((item, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="shadow" id="shadow" />
        <Banner />
        <Products
          products={this.state.products}
          handleSubmit={this.handleSubmit}
        />
        <CartModal
          shoppingList={this.state.shoppingList}
          removeProduct={this.removeProduct}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
