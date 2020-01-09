import React, { Component } from "react";
import  '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar ,faShoppingCart,faSearch} from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header>
        <FontAwesomeIcon icon= {faStar} size="lg" />
        <div className="rightIcons">
        <FontAwesomeIcon icon= {faSearch} size="lg"/>
        <FontAwesomeIcon icon= {faShoppingCart} size="lg"/>
        </div>
      </header>
    );
  }
}

export default Header;