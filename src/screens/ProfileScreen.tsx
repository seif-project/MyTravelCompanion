// src/screens/ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from '@contexts/ThemeContext';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const ProfileScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledView className="flex-1 justify-center items-center">
      <StyledText className="text-lg">
        Thème actuel : {isDarkMode ? 'Sombre' : 'Clair'}
      </StyledText>
      <Button title="Changer de thème" onPress={toggleTheme} />
    </StyledView>
  );
};

export default ProfileScreen;
