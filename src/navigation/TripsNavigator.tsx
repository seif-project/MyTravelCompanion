import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripsListScreen from '@screens/TripsListScreen';
import TripDetailScreen from '@screens/TripDetailScreen';

export type TripsStackParamList = {
  TripsList: undefined;
  TripDetail: { tripId: string };
};

const Stack = createNativeStackNavigator<TripsStackParamList>();

const TripNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TripsList"
      component={TripsListScreen}
      options={{ title: 'MEs voyages' }}
    />
    <Stack.Screen
      name="TripDetail"
      component={TripDetailScreen}
      options={{ title: 'Details du voyage' }}
    />
  </Stack.Navigator>
);

export default TripNavigator;
