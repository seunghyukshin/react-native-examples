import React from "react";
import { View, Text, Button } from "react-native";

function SecondScreen({ navigation }) {
  return (
    <View>
      <Text> This is Second Screen . </Text>
      <Button title="G O H O M E" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default SecondScreen;
