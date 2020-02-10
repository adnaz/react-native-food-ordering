/** @format */

import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    width: width - 30,
    height: height / 3,
    marginBottom: 30,
    flex: 1,
    flexDirection: "column",

    flexWrap: "wrap"
  },
  image: {
    // width: '100%',
    // height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    flex: 3,
    justifyContent: "flex-end"
  },
  overlay: {
    // backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    fontFamily: "sans-serif-light"
  },

  description: {
    fontSize: 15,
    // marginTop: 4,
    backgroundColor: "transparent",
    width: width - 90
  }
});
