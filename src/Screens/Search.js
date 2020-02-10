import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { SearchBar, List, ListItem } from "react-native-elements";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      list1: [
        {
          key: "a",
          title: "Pizza"
        },
        {
          key: "b",
          title: "Burger"
        },
        {
          key: "c",
          title: "Fast food"
        },
        {
          key: "d",
          title: "chinois"
        }
      ],
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
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <SearchBar
          placeholder="Search for a restaurant or dish"
          onChangeText={navigation.getParam("updateSearch")}
          value={navigation.getParam("search")}
          platform="android"
        />
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({
      updateSearch: this.updateSearch
    });
  }
  updateSearch = search => {
    this.setState({ search });
    this.props.navigation.setParams({
      search: search
    });
  };
  renderRow = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        leftIcon={{ name: "search" }}
        chevron
        bottomDivider
        onPress={() => this.props.navigation.navigate("Restaurants")}
      />
    );
  };

  render() {
    const { search, list1 } = this.state;

    return (
      <View>
        <FlatList data={list1} renderItem={this.renderRow} />
      </View>
    );
  }
}
