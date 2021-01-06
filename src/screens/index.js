import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "I'm home~" }}
      ></Stack.Screen>
      <Stack.Screen name="Second" component={SecondScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ScreenStack;
