import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/pages/layout/Header";
import Products from "./components/pages/home/Products";
import Item from "./components/pages/item/Item";
import Footer from "./components/pages/layout/Footer";
import Cart from "./components/pages/cart/Cart";
import NotFound from "./components/pages/NotFound";
import Men from "./components/pages/men/Men";
import Women from "./components/pages/women/Women";
import About from "./components/pages/about/About";

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

              <Route exact path="/men" component={Men} />

              <Route exact path="/women" component={Women} />

              <Route exact path="/about" component={About} />

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
