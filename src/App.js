import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/layout/Header";
import Banner from "./components/home/Banner";
import Products from "./components/home/Products";
import Item from "./components/item/Item";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";

import "./App.css";

class App extends Component {
  // handleSubmit = product => {
  //   this.setState({ shoppingList: [...this.state.shoppingList, product] });
  // };

  // removeProduct = index => {
  //   const { shoppingList } = this.state;

  //   this.setState({
  //     shoppingList: shoppingList.filter((item, i) => {
  //       return i !== index;
  //     })
  //   });
  // };

  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Router>
            <Switch>
              <Route exact path="/">
                <React.Fragment>
                  <Banner />
                  <Products />
                </React.Fragment>
              </Route>

              <Route exact path="/item/:id" component={Item} />

              <Route exact path="/cart" component={Cart} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
