import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailScreen({ route }) {
  const { title, count } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text style={styles.text}> DetailScreen </Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.text}> {title} </Text>
        <Text style={styles.text}> {count} </Text>
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

export default DetailScreen;