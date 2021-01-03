import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import  ScreenStack  from './src/screens';
const App = () => {
  return (
    <NavigationContainer>
      <ScreenStack/>
    </NavigationContainer>
  );
}
export default App;
