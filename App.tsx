import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './views/Settings';
import HomeScreen from './views/Task';
import GymApp from './views/Home';
import Aim from './views/Aim';
import Musclefocus from './views/Musclefocus';
import Authentication from './views/Authentication';
import Data from './views/Data';
import Days from './views/Days';
import Experience from './views/Experience';
import Hours from './views/Traininghours';
import Notification from './views/Notification';
import Routines from './views/Routines';
import Main from './views/Main';
import Routinecustomization from './views/Routinecustomization';
import Routinecustomization2 from './views/Routinecustomization2';
import Repetitions from './views/Repetitions';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={GymApp}/>
        <Stack.Screen name="Authentication" component={Authentication}/>
        <Stack.Screen name="Musclefocus" component={Musclefocus}/>
        <Stack.Screen name="Data" component={Data}/>
        <Stack.Screen name="Aim" component={Aim}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="Three" component={HomeScreen}/>
        <Stack.Screen name="Days" component={Days}/>
        <Stack.Screen name="Experience" component={Experience}/>
        <Stack.Screen name="Hours" component={Hours}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="Routines" component={Routines}/>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Routinecustomization" component={Routinecustomization}/>
        <Stack.Screen name="Routinecustomization2" component={Routinecustomization2}/>
        <Stack.Screen name="Repetitions" component={Repetitions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
