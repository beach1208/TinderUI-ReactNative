import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <View style={[styles.tabBarButton, styles.button1]}>
          <Image
            style={[styles.tabBarButton, styles.btnimage]}
            source={require("./img/rewind.png")}
          />
        </View>
        <View style={[styles.tabBarButton, styles.button2]}>
          <Image
            style={[styles.tabBarButton, styles.btnimage]}
            source={require("./img/nope.png")}
          />
        </View>
        <View style={[styles.tabBarButton, styles.button3]}>
          <Image
            style={[styles.tabBarButton, styles.btnimage]}
            source={require("./img/boost.png")}
          />
        </View>
        <View style={[styles.tabBarButton, styles.button4]}>
          <Image
            style={[styles.tabBarButton, styles.btnimage]}
            source={require("./img/like.png")}
          />
        </View>
        <View style={[styles.tabBarButton, styles.button5]}>
          <Image
            style={[styles.tabBarButton, styles.btnimage]}
            source={require("./img/super-like.png")}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    marginBottom: 60
  },
  tabBarButton: {
    width: 60,
    height: 60
  },
  btnimage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute",
    top: 15,
    right: 15,
    left: 15,
    bottom: 15
  },
  button1: {
    borderRadius: 50,
    backgroundColor: "#fff"
  },
  button2: { borderRadius: 50, backgroundColor: "#fff" },
  button3: { borderRadius: 50, backgroundColor: "#fff" },
  button4: { borderRadius: 50, backgroundColor: "#fff" },
  button5: { borderRadius: 50, backgroundColor: "#fff" }
});
