import React from "react";
import { connect } from "react-redux";

import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

export const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user))
// });

export const CartDropdownHOC = connect(mapStateToProps)(CartDropdown);
