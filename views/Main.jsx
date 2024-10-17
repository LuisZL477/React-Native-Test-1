import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Routines from './Routines';
import Body from './Body';
import Training from './Training';
import RoutineCustomization from './Routinecustomization';
import Exercise from './Exercise';
import Explore from './Explore';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../src/assets/styles/StylesVariables';

export default function Main() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.deepBlue
                },
                tabBarActiveTintColor: colors.deepTurquoise,
                tabBarInactiveTintColor: colors.generalWhite,
            }}
        >
            <Tab.Screen name="Routinecustomization" component={RoutineCustomization} options={{
                tabBarIcon: () => <MIcons name="file-document-outline" size={30} color={colors.generalWhite} />
            }} />
            <Tab.Screen name='Routines' component={Routines} options={{
                tabBarIcon: () => <MIcons name="vector-polyline" size={30} color={colors.generalWhite} />
            }} />
            <Tab.Screen name='Explore' component={Explore} options={{
                tabBarIcon: () => <MIcons name="compass-outline" size={30} color={colors.generalWhite} />,
            }} />
            <Tab.Screen name='Excercise' component={Exercise} options={{
                tabBarIcon: () => <MIcons name="dumbbell" size={30} color={colors.generalWhite} />
            }} />
            <Tab.Screen name='Body' component={Body} options={{
                tabBarIcon: () => <MIcons name="human" size={30} color={colors.generalWhite} />
            }} />
        </Tab.Navigator>
    )
}