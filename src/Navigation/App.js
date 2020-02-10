import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// import the different screens
import Loading from "../Screens/Loading";
import Auth from "./Auth";
import Main from "./Main";

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Main,
    Loading,
    Auth
  },
  {
    initialRouteName: "Loading"
  }
);

export default createAppContainer(App);
