import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function TvScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text>This is Tv Screen </Text>
      </View>
      <View style={styles.halfContainer}>
        <Button
          title="G O H O M E"
          onPress={() =>
            navigation.navigate("Tv", {
              text: "cant you see too ?",
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
    backgroundColor: "yellow",
  },
  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TvScreen;
