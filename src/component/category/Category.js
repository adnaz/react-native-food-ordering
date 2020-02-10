import React, { Component } from "react";
import { FlatList,View } from "react-native";
import Card from "./Card";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({ item }) => {
    return <Card item={item} />;
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          contentContainerStyle={{ marginTop: 20 }}
          data={this.props.categories}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default Category;
