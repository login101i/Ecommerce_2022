import { takeLatest, put, all, call, select } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";
import { selectCurrentUser } from '../user/user.selectors';
import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCartItems } from "./cart.selectors";



export function* clearCartOnSignOut() {
  console.log("clear_cart ----------------------");
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  console.log("wykonuję updateCartInFirebase------")
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
