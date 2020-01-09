import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default class CartComponent extends Component {
  render() {
    const { myCartList } = this.props;
    if (myCartList.length==0) {
        return(
            <p>No items in your Cart</p>
        )
    }else{
        return (
            <div>
              {myCartList.length>0 && myCartList.map(item => {
                return (
                  <div className="cartBox">
                  <div className="cart-content">
                    <img
                      src={item.img_url}
                      alt="item-image"
                      width="150"
                      height="150"
                    />
                    <span>{item.name}</span>
                    <span>
                      <FontAwesomeIcon icon={faRupeeSign} size="md" />
                      &nbsp;
                      {item.price}{" "}
                      <span className="discount"> {item.discount}% off</span>
                    </span>
                    
                  </div>
                </div>
                )
              })}
            </div>
          );
    }
    
  }
}
