import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./cart/Header";
import ShoppingList from "./cart/ShoppingList";
import Footer from "./cart/Footer";
import CartComponent from "./cart/CartComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      myCartList: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cartItems: data
        });
      });
  }
  addToCart = item => {
    this.setState({
      myCartList: [...this.state.myCartList, item]
    });
  };
  render() {
    console.log(this.state.cartItems);
    let {myCartList}=this.state;
    return (
      <div>
        <Header />
        <Switch>
          <Route
           exact path="/"
            component={() => (
              <ShoppingList
                cartItems={this.state.cartItems}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route
           exact path="/my-cart"
            component={() => (
             <CartComponent myCartList={myCartList}/>
            )}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default App;
