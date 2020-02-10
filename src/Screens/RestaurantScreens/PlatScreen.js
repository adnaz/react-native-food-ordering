import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  SectionList,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Counter from "../../component/react-native-counters/";
import detailsPlat from "../../Data/detailsPlat";
export default class PlatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPlat: this.props.navigation.getParam("idPlat", 1),
      uri: this.props.navigation.getParam(
        "uriPlat",
        "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg"
      ),
      totalPrice: 0,
      total: 1,
      sections: detailsPlat,
      sectionRequiredAdded: [],
      optionalAdded: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Pizza")
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.totalPrice != nextState.totalPrice ||
      this.state.total != nextState.total
    );
  }
  onChange(number, type) {
    this.setState({ total: number });
  }
  header = () => (
    <Image
      style={{ height: 160 }}
      source={{
        uri: this.state.uri
      }}
    />
  );
  footer = () => (
    <View
      style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Counter start={1} min={1} max={10} onChange={this.onChange.bind(this)} />
    </View>
  );
  updateSelectedItemes = (section, item) => {
    if (section.required) {
      this.state.sectionRequiredAdded[section.id] = {
        id: item.id,
        price: item.price
      };
    } else {
      if (this.state.optionalAdded.find(x => x.id === item.id)) {
        this.state.optionalAdded = this.state.optionalAdded.filter(
          obj => obj.id != item.id
        );
      } else {
        this.state.optionalAdded.push({ id: item.id, price: item.price });
      }
    }
  };
  renderItem = ({ item, index, section }) => {
    const required = section.required;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.updateSelectedItemes(section, item);
          this.updateTotal();
        }}
      >
        <View style={styles.item}>
          {required ? (
            this.state.sectionRequiredAdded[section.id] ? (
              item.id == this.state.sectionRequiredAdded[section.id].id ? (
                <Icon name="dot-circle-o" size={30} color="#80aef7" />
              ) : (
                <Icon name="circle-o" size={30} color="#80aef7" />
              )
            ) : (
              <Icon name="circle-o" size={30} color="#80aef7" />
            )
          ) : this.state.optionalAdded.find(x => x.id === item.id) ? (
            <Icon name="check-square-o" size={30} color="#80aef7" />
          ) : (
            <Icon name="square-o" size={30} color="#80aef7" />
          )}
          <Text style={styles.itemTitel}>{item.title}</Text>
          <Text style={styles.price}>{item.price}MAD</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  renderSectionHeader = ({ section: { title, required } }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionTilte}>{title}</Text>
      <Text style={[styles.required, { padding: required ? 5 : 0 }]}>
        {required ? "required" : ""}
      </Text>
    </View>
  );

  renderAddToCart() {
    return (
      <TouchableWithoutFeedback>
        <View
          style={[
            styles.addToCartContainer,
            {
              backgroundColor:
                this.state.totalPrice != 0 ? "#40AA40" : "#D45050"
            }
          ]}
        >
          <View>
            <Text style={styles.text}>Add to cart</Text>
          </View>
          <View style={{}}>
            <Text style={styles.text}>
              {this.state.totalPrice > 0 &&
                this.state.totalPrice + " MAD X " + this.state.total}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  updateTotal = () => {
    this.setState({
      totalPrice: parseFloat(
        this.state.optionalAdded.reduce(
          (totalPrice, obj) => totalPrice + obj.price,
          0
        ) +
          this.state.sectionRequiredAdded.reduce(
            (totalPrice, obj) => totalPrice + obj.price,
            0
          )
      ).toFixed(2)
    });
  };

  render() {
    return (
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <SectionList
          ListHeaderComponent={this.header}
          ref={ref => {
            this.sectionRef = ref;
          }}
          ListFooterComponent={this.footer}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.sections}
          keyExtractor={(item, index) => item + index}
        />

        {this.renderAddToCart()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500"
  },
  addToCartContainer: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 5
  },
  required: {
    backgroundColor: "grey",
    color: "white",
    borderRadius: 15,
    margin: 3
  },
  sectionTilte: {
    color: "black",
    fontFamily: "sans-serif-light",
    fontSize: 20
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e3e4e5"
  },
  price: {
    color: "#3d3d3d",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5
  },
  itemTitel: {
    color: "black",
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 16
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.3
  }
});
