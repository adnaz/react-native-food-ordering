import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "./HomeStack";
import CompteStack from "./CompteStack";
import Ordres from "../Screens/Orders";
import SearchStack from "./SearchStack";
export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    Ordres: Ordres,
    Compte: CompteStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
        } else if (routeName === "Compte") {
          iconName = `ios-contact`;
        } else if (routeName === "Search") {
          iconName = `ios-search`;
        } else if (routeName === "Ordres") {
          iconName = `ios-clipboard`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#669df4",
      inactiveTintColor: "gray"
    }
  }
);
