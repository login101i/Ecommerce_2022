import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CheckoutItemHOC } from "../../components/checkout-item/checkout-item.component";
import { StripeCheckoutButton } from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

export const CheckoutPage = ({ cartItems, total }) => {
  console.log(
    "🚀 ~ file: checkout.component.jsx ~ line 15 ~ CheckoutPage ~ total",
    total
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItemHOC key={cartItem.id} cartItem={cartItem} />
      ))}
      <StripeCheckoutButton price={total} />
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export const CheckoutHOC = connect(mapStateToProps)(CheckoutPage);
