import React, { Component } from "react";
import  '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar ,faShoppingCart,faSearch} from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className="header">
          <span>
          <FontAwesomeIcon icon= {faStar} size="lg" />
          </span>
       
        <span className="rightIcons">
        <FontAwesomeIcon icon= {faSearch} size="lg"/>
        <FontAwesomeIcon icon= {faShoppingCart} size="lg"/>
        </span>
      </header>
    );
  }
}

export default Header;
