
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, StyleSheet  } from 'react-native';
import SettingsScreen from './views/Settings';
import HomeScreen from './views/Home';

const Stack = createNativeStackNavigator();




function App(): React.JSX.Element {

  return (
    <NavigationContainer>
       <Stack.Navigator
       screenOptions={{
        headerShown: false,
       }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
