import React, { Component } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    const products = [
      {
        name: "grey t-shirt",
        type: "t-shirt",
        url: "mtsh0007s-gyaa.jpg",
        price: 25.3
      },

      {
        name: "hair ointment",
        type: "cosmetic",
        url: "mtsh0007s-gyaa.jpg",
        price: 89.3
      },
      {
        name: "grey t-shirt",
        type: "t-shirt",
        url: "mtsh0007s-gyaa.jpg",
        price: 89.3
      },
      {
        name: "grey t-shirt",
        type: "t-shirt",
        url: "mtsh0007s-gyaa.jpg",
        price: 89.3
      }
    ];

    return (
      <div className="App">
        <Header />
        <Products products={products} />
        <Footer />
      </div>
    );
  }
}

export default App;
