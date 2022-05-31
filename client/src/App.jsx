import React, { useEffect, lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HeaderHOC } from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import { GlobalStyle } from "./global.styles";
import { Spinner } from "./components/spinner/spinner.component";
export const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const HomePage = lazy(() => import("./pages/home/homepage.component"));
  const ShopHOC = lazy(() => import("./pages/shop/shop.component"));
  const SignInAndSignUpPage = lazy(() =>
    import("./pages/sign-in-and-sign-upp/sign-in-sign-upp.component")
  );
  const CheckoutHOC = lazy(() => import("./pages/checkout/checkout.component"));

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <HeaderHOC />

        <Switch>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
