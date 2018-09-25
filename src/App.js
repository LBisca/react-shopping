import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/layout/Header";
import Products from "./components/home/Products";
import Item from "./components/item/Item";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import NotFound from "./components/pages/NotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Products} />

              <Route exact path="/item/:id" component={Item} />

              <Route exact path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
