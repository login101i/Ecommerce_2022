import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../asssets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

export const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIconHOC = connect(null, mapDispatchToProps)(CartIcon);
