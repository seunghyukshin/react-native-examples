import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>This is Home Screen !!</Text>
      <Button title="go second" onPress={() => navigation.navigate("Second")} />
    </View>
  );
}

export default HomeScreen;
