// src/components/TripItem.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import { TripsStackParamList } from '@navigation/TripsNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Trip {
  id: number;
  title: string;
}

interface TripItemProps {
  trip: Trip;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const TripItem = React.memo(({ trip }: TripItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TripsStackParamList>>();

  const handlePress = () => {
    navigation.navigate('TripDetail', { tripId: trip.id.toString() });
  };

  return (
    <StyledTouchableOpacity
      className="p-4 border-b border-gray-200"
      onPress={handlePress}
    >
      <StyledText className="text-lg">{trip.title}</StyledText>
    </StyledTouchableOpacity>
  );
});

export default TripItem;
