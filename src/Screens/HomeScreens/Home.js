import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import Category from "../../component/category/Category.js";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DataContext } from "../../../App";
import ViewToCart from "../../component/ViewToCart";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectedSort: "a",
      categories: [
        {
          key: "a",
          name: "KFC",
          description: "description",
          url:
            "https://media-assets-01.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-kfc2--2x1--940.jpg"
        },
        {
          key: "b",
          name: "McDonald's (Fes)",
          description: "description",
          url:
            "https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg"
        },
        {
          key: "c",
          name: "Sushi Kissho",
          description: "description",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQg4fi8iKH445x2vF_U3uxxn_Miu_QLqAPtRtnx6nwBiLg9p9J"
        }
      ]
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam("toggleModal")}>
          <Text style={{ fontWeight: "bold", color: "black" }}>Order By </Text>
        </TouchableOpacity>
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({ toggleModal: this._toggleModal });
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  _orderList = () => {};
  filterModal = () => (
    <Modal
      isVisible={this.state.isModalVisible}
      onBackdropPress={() => this.setState({ isModalVisible: false })}
    >
      <View style={styles.FilterContainer}>
        <FlatList
          data={[
            { key: "a", title: "Most Popular", vector: "ios-flame" },
            { key: "b", title: "Rating", vector: "ios-star-outline" },
            { key: "c", title: "Delivery time", vector: "ios-timer" }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatListFilter}
              onPress={() => this.setState({ selectedSort: item.key })}
            >
              <Ionicons
                name={item.vector}
                size={35}
                style={{ marginLeft: 4 }}
              />
              <Text style={{ textAlign: "center" }}>{item.title}</Text>
              <Ionicons
                name={"ios-checkmark"}
                color={
                  item.key == this.state.selectedSort ? "#669df4" : "#f9fbff"
                }
                size={40}
                style={{ marginRight: 4 }}
              />
            </TouchableOpacity>
          )}
        />

        <View
          style={{
            height: 25,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={this._orderList}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              borderBottomWidth: 0.5,
              backgroundColor: "#42f4ad",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Ionicons
              name={"ios-checkmark"}
              color={"white"}
              size={40}
              style={{ marginRight: 4 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._toggleModal}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              borderBottomWidth: 0.5,
              backgroundColor: "grey",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Ionicons
              name={"ios-close"}
              color={"white"}
              size={40}
              style={{ marginRight: 4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.filterModal()}
        <Category categories={this.state.categories} />
        <ViewToCart />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  flatListFilter: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    height: 50,
    alignItems: "center"
  },
  FilterContainer: {
    backgroundColor: "#f9fbff",
    height: 175,
    borderRadius: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
