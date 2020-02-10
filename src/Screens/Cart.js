import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Cart"
  };
  render() {
    return (
      <View style={{ flx: 1 }}>
        <Text> CART </Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text> 1234MAD </Text>
          </View>
          <View>
            <Text> Proceed to PAY </Text>
          </View>
        </View>
      </View>
    );
  }
}
