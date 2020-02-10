//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Category from "../component/category/Category.js";
// create a component
class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          key: "a",
          name: "KFC",
          description: "Small description",
          url:
            "https://media-assets-01.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-kfc2--2x1--940.jpg"
        },
        {
          key: "b",
          name: "McDonald's (Fes)",
          description: "Small description",
          url:
            "https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg"
        },
        {
          key: "c",
          name: "Sushi Kissho",
          description: "Small description",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQg4fi8iKH445x2vF_U3uxxn_Miu_QLqAPtRtnx6nwBiLg9p9J"
        }
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Category categories={this.state.restaurants} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Restaurants;
