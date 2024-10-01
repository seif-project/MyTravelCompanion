import React from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import api from '@services/api';
import TripItem from '@components/TripItem';
import { styled } from 'nativewind';

interface Trip {
  id: number;
  title: string;
  body: string;
}

const StyledActivityIndicator = styled(ActivityIndicator);
const StyledText = styled(Text);

const fetchTrips = async (): Promise<Trip[]> => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch trips');
  }
};
const TripsListScreen = () => {
  const { data, isLoading, error } = useQuery<Trip[]>({
    queryKey: ['trips'],
    queryFn: fetchTrips,
  });

  if (isLoading)
    return (
      <StyledActivityIndicator
        size="large"
        className="flex-1 justify-center items-center"
      />
    );
  if (error)
    return (
      <StyledText className="text-red-500 text-center mt-4">
        Erreur : {(error as Error).message}
      </StyledText>
    );

  return (
    <FlatList<Trip>
      data={data || []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TripItem trip={item} />}
      contentContainerStyle={{ padding: 16 }} // Appliquer des styles ici
    />
  );
};

export default TripsListScreen;
