import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asssets/crown.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { CartIconHOC } from "../cart-icon/cart-icon";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";

export const Header = ({ currentUser, hidden }) => {


  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {" "}
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Shop
        </Link>
        {currentUser ? (
          <Link to="/" className="option">
            <div className="option" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          </Link>
        ) : (
          <Link to="/signin" className="option">
            <div className="option">Sign In</div>
          </Link>
        )}
        <div className="option">
          <CartIconHOC />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

export const HeaderHOC = connect(mapStateToProps)(Header);
