import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import useRippleButton from './useRippleButton';
import type { RippleProps } from './RippleButtonTypes';
import styles from './RippleButtonStyles';

const RippleButton: React.FC<RippleProps> = ({
  style,
  onPress,
  animatedDuration = 500,
  rippleColor = 'rgba(255, 255, 255, .25)',
  children,
}) => {
  const { handlePress, handleLayout, animatedStyle } = useRippleButton({
    onPress,
    animatedDuration,
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePress}
      style={[styles.buttonContainer, style]}>
      <View
        style={[styles.button, style, styles.animatedViewContainer]}
        pointerEvents="none"
        onLayout={handleLayout}>
        {children}
        <Animated.View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: rippleColor,
              position: 'absolute',
              ...animatedStyle,
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RippleButton;
