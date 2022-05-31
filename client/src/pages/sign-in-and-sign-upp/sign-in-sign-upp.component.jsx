import React from "react";

import { SignInHOC } from "../../components/sign-in/sign-in.component";
import { SignUpHOC } from "../../components/sign-up.jsx/sign-up.component";

import "./sign-in-and-sign-upp.styles.scss";

 const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignInHOC />
    <SignUpHOC />
  </div>
);

export default SignInAndSignUpPage
