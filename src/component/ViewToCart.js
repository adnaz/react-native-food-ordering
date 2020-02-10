import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DataContext } from "../Context/DataContext";
export default class ViewToCart extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ordersCount = this.context.ordersCount;
    return ordersCount > 0 ? (
      <TouchableOpacity
        style={styles.container}
        onPress={this.context.testClick}
      >
        <View>
          <Text style={styles.text}>
            {this.context.total + this.context.currencyCode}
          </Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.text}>View cart</Text>
        </View>
        <View
          style={{
            padding: 5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#FFFFFF"
          }}
        >
          <Text style={styles.text}>{ordersCount}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  center: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#40AA40",
    height: 55,
    padding: 5
  },
  text: {
    fontFamily: "Roboto",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500"
  }
});
