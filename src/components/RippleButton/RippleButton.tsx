import React, { useEffect } from 'react';
import { LayoutRectangle, View, ViewStyle } from 'react-native';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  measure,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type {
  GestureStateChangeEvent,
  TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import type { AnimatedRef, SharedValue } from 'react-native-reanimated';
import type { RippleProps } from './types';
import styles from './RippleStyles';

const Ripple: React.FC<RippleProps> = ({
  style,
  onPress,
  children,
  animatedDuration = 1000,
  rippleColor = 'rgba(0,0,0,0.2)',
}) => {
  const centerX: SharedValue<number> = useSharedValue(0);
  const centerY: SharedValue<number> = useSharedValue(0);
  const scale: SharedValue<number> = useSharedValue(0);

  const aRef: AnimatedRef<View> = useAnimatedRef<View>();
  const width: SharedValue<number> = useSharedValue(0);
  const height: SharedValue<number> = useSharedValue(0);

  const rippleOpacity: SharedValue<number> = useSharedValue(1);
  const userRippleColor: SharedValue<string> = useSharedValue(rippleColor);
  const userAnimatedDuration: SharedValue<number> =
    useSharedValue(animatedDuration);

  useEffect(() => {
    userRippleColor.value = rippleColor;
  }, [rippleColor, userRippleColor]);

  useEffect(() => {
    userAnimatedDuration.value = animatedDuration;
  }, [animatedDuration, userAnimatedDuration]);

  const tapGesture = Gesture.Tap()
    .onStart(
      (tapEvent: GestureStateChangeEvent<TapGestureHandlerEventPayload>) => {
        if (onPress) runOnJS(onPress)();

        const layout: LayoutRectangle | null = measure(aRef);
        width.value = layout?.width as number;
        height.value = layout?.height as number;

        centerX.value = tapEvent.x;
        centerY.value = tapEvent.y;

        rippleOpacity.value = 1;
        scale.value = 0;
        scale.value = withTiming(1, { duration: userAnimatedDuration.value });
      }
    )
    .onEnd(() => {
      rippleOpacity.value = withTiming(0, {
        duration: userAnimatedDuration.value,
      });
    });

  const rStyle: ViewStyle = useAnimatedStyle(() => {
    const circleRadius: number = Math.sqrt(
      width.value ** 2 + height.value ** 2
    );
    const translateX: number = centerX.value - circleRadius;
    const translateY: number = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      backgroundColor: userRippleColor.value,
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        { translateX },
        { translateY },
        {
          scale: scale.value,
        },
      ],
    };
  }, [rippleColor]);

  return (
    <GestureHandlerRootView>
      <View ref={aRef} style={[styles.viewStyle, style]}>
        <GestureDetector gesture={tapGesture}>
          <Animated.View
            style={[styles.viewStyle, style, styles.contentContainer]}>
            <View>{children}</View>
            <Animated.View style={rStyle} />
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default Ripple;
