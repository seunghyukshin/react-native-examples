import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenTab from "./ScreenTab";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="MyApp" component={ScreenTab}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ScreenStack;
