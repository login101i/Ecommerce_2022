import React, { useEffect } from "react";
import { HomePage } from "./pages/home/homepage.component";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import { ShopHOC } from "./pages/shop/shop.component.jsx";
import { HeaderHOC } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-upp/sign-in-sign-upp.component";

import { CheckoutHOC } from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderHOC />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopHOC} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />

          <Route exact path="/checkout" component={CheckoutHOC} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export const AppHOC = connect(mapStateToProps, mapDispatchToProps)(App);
