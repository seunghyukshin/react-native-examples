import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function MovieScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text>This is MovieScreen !!</Text>
      </View>
      <View style={styles.halfContainer}>
        <Button
          title="go second"
          onPress={() =>
            navigation.navigate("Tv", {
              text: "cant you see ?",
              count: 1,
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
    backgroundColor: "white",
  },
  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MovieScreen;
