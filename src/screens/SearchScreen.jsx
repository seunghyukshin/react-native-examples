import React from "react";
import { Text, View, StyleSheet } from "react-native";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text style={styles.text}> This is </Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.text}> SearchScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default SearchScreen;
