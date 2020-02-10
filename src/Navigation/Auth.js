import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// import the different screens
import SignIn from "../Screens/Auth/SignIn";
import SignUp from "../Screens/Auth/SignUp";
import PhoneAuth from "../Screens/Auth/PhoneAuth";
import PasswordReset from "../Screens/Auth/PasswordReset";

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    SignIn,
    SignUp,
    PhoneAuth,
    PasswordReset
  },
  {
    initialRouteName: "SignIn"
  }
);

export default createAppContainer(App);
