import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import ScreenStack from "~/screens";
import ScreenTab from "~/screens";

export default function App() {
  return (
    <NavigationContainer>
      {/* <ScreenStack /> */}
      <ScreenTab />
    </NavigationContainer>
  );
}
