import React from "react";

import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up.jsx/sign-up.component";

import "./sign-in-and-sign-upp.styles.scss";

export const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp/>
  </div>
);
