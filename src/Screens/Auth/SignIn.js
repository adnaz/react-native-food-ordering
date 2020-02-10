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
    this.state = {
      password: "",
      email: "",
      error: ""
    };
  }
  handleSubmit = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>livraison repas</Text>
        {this.state.error ? <Text /> : <Text />}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textAlign={"center"}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="mots de passe"
          secureTextEntry={true}
          textAlign={"center"}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={() => this.props.navigation.navigate("PasswordReset")}
        >
          <Text
            style={{
              color: "#5B5A5A",
              textDecorationLine: "underline",
              fontSize: 16,
              marginRight: 3
            }}
          >
            mots de passe oublier?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", flex: 0.2 }}>
          <TouchableOpacity
            style={{ justifyContent: "flex-end" }}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={{ color: "#5B5A5A", textDecorationLine: "underline" }}>
              Créer un nouveau compte{" "}
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
