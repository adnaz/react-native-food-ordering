/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNav from "./src/Navigation/App";
import AddToCart from "./src/component/ViewToCart";
import { DataContext } from "./src/Context/DataContext";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.testClick = () => {
      this.setState(state => ({ ordersCount: state.ordersCount + 1 }));
    };
    this.state = {
      test: "HELLO WORLD",
      testClick: this.testClick,
      total: 0,
      currencyCode: "MAD",
      ordersCount: 0
    };
  }
  render() {
    return (
      <DataContext.Provider value={this.state}>
        <AppNav />
      </DataContext.Provider>
    );
  }
}
