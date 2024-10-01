// src/screens/TripDetailScreen.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { TripsStackParamList } from '@navigation/TripsNavigator';
import { useQuery } from '@tanstack/react-query';
import api from '@services/api';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface Trip {
  id: number;
  title: string;
  body: string;
}

const fetchTripDetail = async (tripId: string): Promise<Trip> => {
  const response = await api.get(`/posts/${tripId}`);
  return response.data;
};

const TripDetailScreen = () => {
  // Récupération des paramètres de navigation
  const route = useRoute<RouteProp<TripsStackParamList, 'TripDetail'>>();
  const { tripId } = route.params;

  // Utilisation de React Query pour récupérer les détails du voyage
  const { data, isLoading, error } = useQuery<Trip>({
    queryKey: ['trip', tripId],
    queryFn: () => fetchTripDetail(tripId),
  });

  if (isLoading) {
    return (
      <StyledView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </StyledView>
    );
  }

  if (error) {
    return (
      <StyledView className="flex-1 justify-center items-center">
        <StyledText className="text-red-500">
          Erreur : {(error as Error).message}
        </StyledText>
      </StyledView>
    );
  }

  return (
    <StyledView className="flex-1 p-4">
      <StyledText className="text-2xl font-bold mb-4">{data?.title}</StyledText>
      <StyledText className="text-base">{data?.body}</StyledText>
    </StyledView>
  );
};

export default TripDetailScreen;
