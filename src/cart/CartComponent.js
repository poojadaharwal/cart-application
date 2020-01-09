import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CartComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default class CartComponent extends Component {

handleRemove=()=>{
    console.log("remove clicked")
}

  render() {
    const { myCartList } = this.props;
    if (myCartList.length == 0) {
      return (
        <div>
          <p>
            <Link to="/">return to Home</Link>
          </p>
          <p>No items in your Cart</p>
        </div>
      );
    } else {
      return (
        <div className="mycart">
          <p>
            <Link to="/">return to Home</Link>
          </p>
          <div className="mycart-container">
            <div className="box1">
              {myCartList.length > 0 &&
                myCartList.map(item => {
                  return (
                    <div className="cartBox">
                      <div className="cart-content">
                        <img
                          src={item.img_url}
                          alt="item-image"
                          width="150"
                          height="150"
                        />
                        <div className="item-details">
                        <p>{item.name}</p>
                        <div className="details">
                        <span>
                          <FontAwesomeIcon icon={faRupeeSign} size="md" />
                          &nbsp;
                          {item.price}{" "}
                          <span className="discount">
                            {" "}
                            {item.discount}% off
                          </span>
                        </span>
                        <span>
                            <button onClick={this.handleRemove}>REMOVE</button>
                        </span>

                        </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="box2">
              <div className="price-container">
                <p>PRICE DETAILS</p>
                <hr />
                <p>
                  Price({} item):{}
                </p>
                <p>Discount:{}</p>
                <p>Total Payable {}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
