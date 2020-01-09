import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './cart/Header';
import ShoppingList from './cart/ShoppingList';
import Footer from './cart/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {   
      cartItems:[]
    };
  }

  componentDidMount(){
  fetch('https://api.myjson.com/bins/qzuzi')
  .then(response => response.json())
  .then(data=>{
    this.setState({
      cartItems:data
    })
  })
}

  render() {
    console.log(this.state.cartItems);
    return (
      <div>
       
        <Header/>
        <ShoppingList cartItems={this.state.cartItems}/>
        <Footer/>
      </div>
    );
  }
}
export default App;