import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CartComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default class CartComponent extends Component {
  handleRemove = (id,e) => {
   
    this.props.removeItem(id);
  };
 
  handlechangeAdd=(id, e)=>{
    console.log(e);
    console.log(id);
    this.props.modifyItem(id,"add")
  }
  handlechangeSub=(id,count, e)=>{
    console.log(e);
    console.log(id);
    console.log(count);
    if(count>1){
        this.props.modifyItem(id,"substract")
    }
   
  }

  render() {
    const { myCartList } = this.props;
    if (myCartList.length == 0) {
      return (
        <div className="mycart">
          <p>
            <Link to="/">return to Home</Link>
          </p>
          <p>No items in your Cart</p>
        </div>
      );
    } else {
      let totalPrice = 0;
      let totalDiscount = 0;
      let totalItems = 0;
      return (
        <div className="mycart">
          <p>
            <Link to="/">return to Home</Link>
          </p>
          <div className="mycart-container">
            <div className="box1">
              {myCartList.length > 0 &&
                myCartList.map(item => {
                  let mrp = parseInt(
                    item.price / ((100 - item.discount) * 0.01)
                  );
                  totalPrice += (mrp * item.count);
                  totalDiscount += (mrp  - item.price) * item.count;
                  totalItems=totalItems+item.count;
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
                              {item.price}{" "}
                              <span className="mrp">{parseInt(mrp)} </span>
                              <span className="discount">
                                {" "}
                                {item.discount}% off
                              </span>
                            </span>
                            <span>
                              <button onClick={e => this.handlechangeSub(item.id,item.count,e)} className="count-button">-</button>&nbsp;
                              <span id="count">{item.count}</span>&nbsp;
                              <button onClick={e => this.handlechangeAdd(item.id,e)} className="count-button">+</button>
                            </span>
                            <span>
                              <button onClick={e=>this.handleRemove(item.id,e)}>
                                REMOVE
                              </button>
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
                  Price({totalItems} item):
                  <span className="numerics">
                    <FontAwesomeIcon icon={faRupeeSign} size="md" />
                    {totalPrice}
                  </span>
                </p>
                <p>
                  Discount:
                  <span className="numerics">
                    <FontAwesomeIcon icon={faRupeeSign} size="md" />
                    {totalDiscount}
                  </span>
                </p>
                <hr />
                <p>
                  <b>
                    {" "}
                    Total Payable :
                    <span className="numerics">
                    <FontAwesomeIcon icon={faRupeeSign} size="md" />
                     {totalPrice - totalDiscount}
                    </span>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
