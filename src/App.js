import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import Header from "./cart/Header";
import ShoppingList from "./cart/ShoppingList";
import Footer from "./cart/Footer";
import CartComponent from "./cart/CartComponent";

toast.configure()
class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      myCartList: [],
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
    let find=false;
    if (this.state.myCartList.length>0) {
      let updateItems=this.state.myCartList.map(existingItem=>{
        if (item.id===existingItem.id) {
          find=true;
          existingItem.count++;
        }
        return existingItem
      })
      if (find) {
        this.setState({
          myCartList:updateItems
        })
      }else{
        this.setState({
          myCartList: [...this.state.myCartList, item]
        });
      }
      
    }else{
      this.setState({
        myCartList: [...this.state.myCartList, item]
      });
    }
    
  };
  modifyItem = (id,operation) => {
    console.log(id);
   let modifiedCart= this.state.myCartList.map(item => {
      if (item.id==id && operation==="add") {
        item.count=item.count+1;
      }else if(item.id==id && operation==="substract"){
        item.count=item.count-1;
      }
      return item;
    })
    this.setState({
      myCartList: modifiedCart
    });
  }
 
  removeItem=(id)=>{
    let modifiedCart= this.state.myCartList.filter(item=>item.id!=id)
    this.setState({
      myCartList:modifiedCart
    })
    toast.success("item removed from cart !!",{ autoClose: 2000 })
  }
  sortItems=(criteria)=>{
    if (criteria!=="d") {
      let sortedItems=this.state.cartItems.sort((a,b)=>{
        let price1=a.price;
        let price2=b.price;
        let comparison=0;
     if (price1>price2) {
          comparison=1;
        }else if(price1<price2){
          comparison=-1;
        }
        if (criteria=="lh") {
          return comparison;
        }else{
          return comparison * -1;
        }
       
      })
      toast.success("sorted items on Price !!",{ autoClose: 4000 })
      this.setState({
        myCartList:sortedItems
      })
    }else{
      let sortedItems=this.state.cartItems.sort((a,b)=>{
        let d1=a.discount;
        let d2=b.discount;
        let comparison1=0;
  
        if (d1>d2) {
          comparison1=1;
        }else if(d1<d2){
          comparison1=-1;
        }
        return comparison1 * -1 ;
      })
     
      toast.success("sorted items on Discount !!",{ autoClose: 4000 })
    this.setState({
      myCartList:sortedItems
    })
  }
  }
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
                sortItems={this.sortItems}
              />
            )}
          />
          <Route
           exact path="/my-cart"
            component={() => (
             <CartComponent myCartList={myCartList} 
             modifyItem={this.modifyItem} 
             removeItem={this.removeItem}
              />
            )}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default App;
