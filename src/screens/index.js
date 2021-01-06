import React from "react";

import MovieScreen from "./MovieScreen";
import TvScreen from "./TvScreen";
import SearchScreen from "./SearchScreen";
import DiscoveryScreen from "./DiscoveryScreen";
/*

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator initialRouteName="Movie">
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={{ title: "I'm home~" }}
      ></Stack.Screen>
      <Stack.Screen name="Tv" component={TvScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ScreenStack;

*/

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function ScreenTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movie" component={MovieScreen}></Tab.Screen>
      <Tab.Screen name="Tv" component={TvScreen}></Tab.Screen>
      <Tab.Screen name="Seach" component={SearchScreen}></Tab.Screen>
      <Tab.Screen name="Discovery" component={DiscoveryScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default ScreenTab;
