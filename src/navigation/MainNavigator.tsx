// src/navigation/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import TripsNavigator from '@navigation/TripsNavigator';
import { Ionicons } from '@expo/vector-icons';

export type MainTabParamList = {
  Home: undefined;
  Trips: undefined;
  Profile: undefined;
};
type IoniconsName = keyof typeof Ionicons.glyphMap;
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: IoniconsName = 'home';

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Trips') {
          iconName = 'airplane';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Trips" component={TripsNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
