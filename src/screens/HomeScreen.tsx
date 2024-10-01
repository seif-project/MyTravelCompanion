// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <StyledView className="flex-1 justify-center items-center">
      <StyledText className="text-2xl">{t('welcome_message')}</StyledText>
    </StyledView>
  );
};

export default HomeScreen;
