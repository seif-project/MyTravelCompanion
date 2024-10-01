import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface Props {
  children: React.ReactNode;
}

// Composant de fallback pour afficher les erreurs
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <StyledView className="flex-1 justify-center items-center p-4">
      <StyledText className="text-xl text-red-500 mb-4">
        Une erreur est survenue
      </StyledText>
      <StyledText className="text-base mb-4">{error.message}</StyledText>
      <Button title="Réessayer" onPress={resetErrorBoundary} />
    </StyledView>
  );
};

const ErrorBoundary = ({ children }: Props) => (
  <ReactErrorBoundary FallbackComponent={ErrorFallback}>
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
