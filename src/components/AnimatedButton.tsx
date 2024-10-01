// src/components/AnimatedButton.tsx
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledAnimatedView = styled(Animated.View);
const StyledText = styled(Text);

const AnimatedButton = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    scale.value = withTiming(0.9, { duration: 100 });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };

  return (
    <TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut}>
      <StyledAnimatedView
        style={animatedStyle}
        className="bg-blue-500 p-4 rounded items-center"
      >
        <StyledText className="text-white text-lg">Appuyez-moi</StyledText>
      </StyledAnimatedView>
    </TouchableOpacity>
  );
};

export default AnimatedButton;
