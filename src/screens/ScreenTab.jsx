import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MovieScreen from "./MovieScreen";
import TvScreen from "./TvScreen";
import SearchScreen from "./SearchScreen";
import DiscoveryScreen from "./DiscoveryScreen";

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
