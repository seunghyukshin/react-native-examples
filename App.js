import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ScreenStack from "~/navigation/ScreenStack";

export default function App() {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
}
