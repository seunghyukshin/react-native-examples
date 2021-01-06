import React from "react";
import { View, Text, StyleSheet } from "react-native";
function DiscoveryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text style={styles.text}> Hello </Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.text}> Discovery</Text>
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

export default DiscoveryScreen;
