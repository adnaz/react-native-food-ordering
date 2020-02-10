import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  SectionList,
  Image
} from "react-native";
import ViewToCart from "../../component/ViewToCart";
import plats, { sections } from "../../Data/plats";
export default class RestaurantMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plats: plats,
      selected: "a",
      sections: sections,
      scrollToData: [
        { key: "a", title: "BURGERS" },
        { key: "b", title: "chicken" },
        { key: "c", title: "BURGERS" },
      ]
    };
  } // fetch data from server
  // serve : select * from plats where restaurants == 1
  //
  static navigationOptions = {
    headerLayoutPreset: "center",
    title: "McDonald's (Fes)",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  };
  scrollToLocation = index => {
    this.sectionRef.scrollToLocation({
      animated: true,
      sectionIndex: index,
      itemIndex: 0,
      viewPosition: 0,
      viewOffset: 15
    });
  };

  ItemsPlats = ({ item, index, section }) => (
    <TouchableWithoutFeedback
      onPress={() => this.props.navigation.navigate("Plat")}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: 100,
          margin: 10,
          borderBottomWidth: 0.3
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "sans-serif-light",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: "#3d3d3d",
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 5
            }}
          >
            {item.price}MAD
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{
              uri:
                "https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg"
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  renderBarItem = ({ item }) => {
    var isSelected = item.key == this.state.selected;
    var background;
    var borderBottomColor = isSelected ? "#1e1e1e" : "#FFFFFF";
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.scrollToLocation(2);
          this.setState({ selected: item.key });
        }}
      >
        <View
          style={{
            borderBottomColor,
            paddingHorizontal: 10,
            paddingTop: 10,
            borderBottomWidth: 2
          }}
        >
          <Text>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  SectionHeader = ({ section: { title } }) => (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <Text
        style={{
          color: "black",
          fontFamily: "sans-serif-light",
          fontSize: 20
        }}
      >
        {title}
      </Text>
    </View>
  );
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View elevation={3} style={styles.buttonContainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[...this.state.scrollToData]}
            renderItem={this.renderBarItem}
          />
        </View>
        <SectionList
          ref={ref => (this.sectionRef = ref)}
          stickySectionHeadersEnabled={true}
          renderItem={this.ItemsPlats}
          renderSectionHeader={this.SectionHeader}
          sections={this.state.sections}
          keyExtractor={(item, index) => item + index}
        />
        <ViewToCart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
});
