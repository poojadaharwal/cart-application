import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import { Card,Button } from 'react-bootstrap';
import FilterComponent from "./FilterComponent";
import "../styles/ShoppingList.scss";
import SortComponent from "./SortComponent";

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div className="shopping-container">
        <FilterComponent />
        <div className="right-container">
          <SortComponent />
          <div className="itemsContainer">
            {cartItems.map(item => {
              return (
                <div className="itemBox">
                  <div className="item-content">
                    <img
                      src={item.img_url}
                      alt="item-image"
                      width="150"
                      height="150"
                    />
                    <p>{item.name}</p>
                    <p>
                      <FontAwesomeIcon icon={faRupeeSign} size="md" />
                      &nbsp;
                      {item.price}{" "}
                      <span className="discount"> {item.discount}% off</span>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <button style={{ backgroundColor: "yellow" }}>
                        Add to cart
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
