import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native';
import { defaulButtonHeight, defaulButtonWidth } from './SpinnerUtils';
import type { AnimatedStyleProp } from '../components';

type useAnimatedValuesProps = {
  isLoading: boolean;
  style: StyleProp<ViewStyle>;
  animatedDuration: number;
  animateWidth?: number;
  animateHeight?: number;
  animateRadius?: number;
  animationType?: string;
};

type Size = {
  height: number;
  width: number;
};

type AnimatedStyle = Animated.WithAnimatedValue<ViewStyle>;

const useAnimatedValues = ({
  isLoading,
  style,
  animatedDuration,
  animateWidth,
  animateHeight,
  animateRadius,
  animationType
}: useAnimatedValuesProps) => {
  const [size, setSize] = useState<Size | null>(null);
  const defaultStyle: ViewStyle = StyleSheet.flatten(style);
  const margin: number = (defaultStyle.margin ||
    defaultStyle.marginLeft ||
    defaultStyle.marginRight ||
    defaultStyle.marginHorizontal ||
    0) as number;
  const defaultWidth: number =
    ((defaultStyle.width || size?.width || defaulButtonWidth) as number) -
    margin * 2;
  const defaultRadius: number = (defaultStyle.borderRadius || 0) as number;
  const defaultHeight: number = (defaultStyle.height ||
    size?.height ||
    defaulButtonHeight) as number;
  const animatedHeight: number =
    animateHeight || Math.min(defaultWidth, defaultHeight);
  const animatedWidth: number =
    animateWidth || Math.min(defaultWidth, defaultHeight);
  const animatedRadius: number =
    animateRadius || Math.min(defaultWidth, defaultHeight) / 2;
  const animatedLoadingValue: Animated.Value = useRef(
    new Animated.Value(0)
  ).current;
  const animatedLoadingForChild: Animated.Value = useRef(
    new Animated.Value(0)
  ).current;

  const handleLayout = useCallback<(event: LayoutChangeEvent) => void>(
    (event: LayoutChangeEvent) => {
      const { width, height } = event.nativeEvent.layout;
      if (size === null || size === undefined) {
        setSize({ width, height });
      }
    },
    [size]
  );

  useEffect(() => {
    Animated.timing(animatedLoadingValue, {
      toValue: isLoading ? 1 : 0,
      duration: animatedDuration,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedLoadingForChild, {
      toValue: isLoading ? 1 : 0,
      duration: animatedDuration - animatedDuration / 3,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [
    isLoading,
    animatedLoadingValue,
    animatedLoadingForChild,
    animatedDuration,
  ]);

  const animatedWidthValue: Animated.AnimatedInterpolation<number> =
    animatedLoadingValue.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultWidth, animationType === 'ripple-effect' ? defaultWidth : animatedWidth],
    });

  const animatedHeightValue: Animated.AnimatedInterpolation<number> =
    animatedLoadingValue.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultHeight, animationType === 'ripple-effect' ? defaultHeight : animatedHeight],
    });

  const animatedBorderValue: Animated.AnimatedInterpolation<number> =
    animatedLoadingValue.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultRadius, animationType === 'ripple-effect' ? defaultRadius : animatedRadius],
    });

  const animatedOpacityHide: Animated.AnimatedInterpolation<number> =
    animatedLoadingForChild.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 0, 0],
    });

  const animatedOpacityShow: Animated.AnimatedInterpolation<number> =
    animatedLoadingForChild.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [0, 0, 1],
    });

  const animatedStyles: AnimatedStyleProp = {
    width: animatedWidthValue,
    borderRadius: animatedBorderValue,
    height: animatedHeightValue,
    elevation: isLoading ? 0 : 2,
    overflow: 'hidden',
  };

  const animatedChildHideStyle: AnimatedStyle = {
    opacity: animatedOpacityHide,
  };

  const animatedChildShowStyle: AnimatedStyle = {
    opacity: animatedOpacityShow,
  };

  return {
    handleLayout,
    animatedStyles,
    animatedChildHideStyle,
    animatedChildShowStyle,
  };
};

export default useAnimatedValues;
