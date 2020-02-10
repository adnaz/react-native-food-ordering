import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textAlign={"center"}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>reset password</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", flex: 0.2 }}>
          <TouchableOpacity
            style={{ justifyContent: "flex-end" }}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={{ color: "#5B5A5A", textDecorationLine: "underline" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5F6F7"
  },
  welcome: {
    fontSize: 25,
    color: "#5B5A5A",
    letterSpacing: 6,
    alignSelf: "center",
    paddingBottom: 50
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 16,
    color: "white"
  },
  input: {
    borderRadius: 50,
    height: 60,
    marginVertical: 5,
    marginHorizontal: 8,
    borderColor: "grey",
    borderWidth: 1
  },
  button: {
    borderRadius: 50,
    height: 60,
    marginVertical: 15,
    justifyContent: "center",
    backgroundColor: "#76a4ed"
  }
});
