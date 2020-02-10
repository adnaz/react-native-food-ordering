//import liraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import TouchableScale from "../TouchableScale/index.js";
import { withNavigation } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
// create a component
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { heart: true };
  }
  addToFav = () => {
    this.setState({ heart: !this.state.heart });
  };
  render() {
    item = this.props.item;
    return (
      <TouchableScale
        style={styles.container}
        key={item.index + "img"}
        onPress={() => this.props.navigation.navigate("RestaurantMain")}
      >
        <ImageBackground
          style={styles.image}
          source={{
            uri: item.url
          }}
        >
          <View
            style={{
              alignSelf: "flex-end",
              backgroundColor: "rgba(0,0,0,0.03)",
              borderRadius: 20
            }}
          >
            <TouchableOpacity onPress={this.addToFav}>
              <Ionicons
                name={"md-heart" + (this.state.heart ? "-empty" : "")}
                size={35}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.overlay}>
          <Text style={styles.title}>{item.name}</Text>

          <Text numberOfLines={2} style={styles.description}>
            {item.description}
            {"\n"}200m~{"         "} 4.5★
          </Text>
        </View>
      </TouchableScale>
    );
  }
}

// define your styles

//make this component available to the app
export default withNavigation(Card);
