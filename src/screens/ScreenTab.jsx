import React from "react";

import MovieScreen from "./MovieScreen";
import TvScreen from "./TvScreen";
import SearchScreen from "./SearchScreen";
import DiscoveryScreen from "./DiscoveryScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
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
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "black",
        inactiveBackgroundColor: "black",
        activeTintColor: "white",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-open"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Tv"
        component={TvScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="television"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Seach"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-search"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default ScreenTab;
