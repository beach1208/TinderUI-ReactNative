import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Image style={styles.navBarButton} source={require("./img/chat.png")} />

        <Image
          style={styles.navBarHeader}
          source={require("./img/tinder-logo.png")}
        />
        <Image style={styles.navBarButton} source={require("./img/chat.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    paddingTop: 40,
    height: 100,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10
  },
  navBarButton: {
    // width: 50,
    // height: 50,
    resizeMode: "contain",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },
  navBarHeader: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    alignItems: "center"
  }
});
