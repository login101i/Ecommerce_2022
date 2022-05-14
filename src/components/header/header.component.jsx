import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asssets/crown.svg";
import "./header.styles.scss";
export const Header = () => {
  return (
    <div className="header">
      <Link classNam="logo-container" to="/">
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
      </div>
    </div>
  );
};
