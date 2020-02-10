import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button
} from "react-native";
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true
    };
  }
  componentDidMount() {
    this.props.navigation.navigate("Main");
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.setState({ isloading: !this.state.isloading });
          }}
          title="hello"
        />
        <ActivityIndicator
          animating={this.state.isloading}
          size="large"
          color="#0000ff"
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30
  }
});
