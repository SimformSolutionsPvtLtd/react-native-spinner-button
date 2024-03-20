import { useRef, useState } from 'react';
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import type { RippleButtonProp } from './RippleButtonTypes';

const useRippleButton = ({ onPress, animatedDuration }: RippleButtonProp) => {
  const translation: Animated.Value = useRef(new Animated.Value(0)).current;
  const touchX: Animated.Value = useRef(new Animated.Value(0)).current;
  const touchY: Animated.Value = useRef(new Animated.Value(0)).current;
  const [circleRadius, setCircleRadius] = useState<number>(0);

  const handlePress: (event: GestureResponderEvent) => void = (
    event: GestureResponderEvent
  ) => {
    const { locationX, locationY } = event.nativeEvent;

    touchX.setValue(locationX - 5);
    touchY.setValue(locationY - 5);
    onPress?.();

    Animated.timing(translation, {
      toValue: 1,
      duration: animatedDuration,
      useNativeDriver: false,
    }).start(() => {
      translation.setValue(0);
    });
  };

  const handleLayout: (event: LayoutChangeEvent) => void = (
    event: LayoutChangeEvent
  ) => {
    const { width, height } = event.nativeEvent.layout;
    setCircleRadius(Math.sqrt(width ** 2 + height ** 2));
  };

  const width: Animated.AnimatedInterpolation<number> = translation.interpolate(
    {
      inputRange: [0, 1],
      outputRange: [1, circleRadius * 2],
    }
  );
  const height: Animated.AnimatedInterpolation<number> =
    translation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, circleRadius * 2],
    });
  const opacity: Animated.AnimatedInterpolation<number> =
    translation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

  const translateX: Animated.AnimatedInterpolation<number> =
    translation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, -circleRadius],
    });

  const translateY: Animated.AnimatedInterpolation<number> =
    translation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, -circleRadius],
    });

  const scale: number = 1;

  return {
    handlePress,
    handleLayout,
    animatedStyle: {
      width,
      height,
      opacity,
      transform: [{ translateX }, { translateY }, { scale }],
      borderRadius: circleRadius,
      top: touchY,
      left: touchX,
    },
  };
};

export default useRippleButton;
