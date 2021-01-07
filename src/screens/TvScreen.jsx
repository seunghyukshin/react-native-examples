import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function TvScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text style={styles.text}>This is Tv Screen </Text>
      </View>
      <View style={styles.halfContainer}>
        <Button
          title="G O H O M E"
          onPress={() =>
            navigation.push("Detail", {
              title: "기생충",
              count: 10,
            })
          }
        />
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

export default TvScreen;
