import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import { Card,Button } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilterComponent from "./FilterComponent";
import "../styles/ShoppingList.scss";
import SortComponent from "./SortComponent";

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleAddtoCart = (item, e) => {
    item.count=1;
    toast.success("Added to cart !!",{ autoClose: 2000 })
    this.props.addToCart(item);
    
  };
  sortItems=(criteria,e)=>{
    this.props.sortItems(criteria);
  }
  render() {
    const { cartItems } = this.props;

    return (
      <div className="shopping-container">
       
        <FilterComponent />
        <div className="right-container">
          <SortComponent sortItems={this.sortItems}/>
          <div className="itemsContainer">
          
            {this.props.cartItems.map(item => {
              let mrp = item.price/((100 - item.discount) * 0.01) ;
              return (
                <div className="itemBox">
                  <div className="item-content">
                    <img
                      src={item.img_url}
                      alt="item-image"
                      width="200"
                      height="200"
                    />
                    <p>{item.name}</p>
                    <p>
                      <FontAwesomeIcon icon={faRupeeSign} size="md" />
                     
                      <b>{item.price} </b>
                      <span className="mrp">{parseInt(mrp) } </span>
                      <span className="discount" > {item.discount}% off</span>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <button
                        id="addToCart"
                        onClick={e => this.handleAddtoCart(item, e)}
                      >
                        Add to Cart
                      </button>
                      
                    </p>
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ShoppingList;
