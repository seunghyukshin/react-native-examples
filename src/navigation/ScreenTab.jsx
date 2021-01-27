import React, { useLayoutEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MoviesScreen from "~/screens/Movies";
import TvScreen from "~/screens/Tv";
import SearchScreen from "~/screens/Search";
import DiscoveryScreen from "~/screens/Discovery";

const Tab = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

function ScreenTab({ navigation, route }) {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    // const name = route.name;
    navigation.setOptions({
      title: name,
    });
  }, [route]);
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
        component={MoviesScreen}
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
