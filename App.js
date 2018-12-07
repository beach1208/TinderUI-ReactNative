import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import Buttons from "./components/Buttons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.cardContainer}>
            <Image
              style={styles.imgPosition}
              source={require("./profile/harold.jpg")}
            />
            <Text style={styles.nameText}>
              Harold, <Text style={styles.age}>65</Text>
            </Text>
            <Text style={styles.introText}>Interet meme</Text>
          </View>
        </View>
        <Buttons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0"
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  cardContainer: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  nameText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 20
  },
  age: {
    fontSize: 30,
    fontWeight: "normal"
  },
  introText: {
    color: "#d3d3d3",
    fontSize: 20,
    marginLeft: 10
  }
});
