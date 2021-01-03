import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from './MainScreen';
import {NoteScreen} from './NoteScreen';

const Stack = createStackNavigator();

export default ScreenStack = () =>{
    return (
        <Stack.Navigator headerMode = {'none'}>
            <Stack.Screen name="Main" componenet={MainScreen}/>
            <Stack.Screen name="Note" componenet={NoteScreen}/>
        </Stack.Navigator>
    )
};
