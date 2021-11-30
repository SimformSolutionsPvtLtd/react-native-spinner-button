import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { defaulButtonHeight, defaulButtonWidth } from "./SpinnerUtils";

export type useAnimatedValuesProps = {
  isLoading: Boolean;
  style: StyleProp<ViewStyle>;
  animatedDuration: number;
  animateWidth: number;
  animateHeight: number;
  animateRadius: number;
};

type Size = {
  height: number;
  width: number;
};

const useAnimatedValues = ({
  isLoading,
  style,
  animatedDuration,
  animateWidth,
  animateHeight,
  animateRadius,
}: useAnimatedValuesProps) => {
  const [size, setSize] = useState<Size | null>(null);
  const defaultStyle = StyleSheet.flatten(style);
  const margin: any =
    defaultStyle.margin ||
    defaultStyle.marginLeft ||
    defaultStyle.marginRight ||
    defaultStyle.marginHorizontal ||
    0;
  const defaultWidth = (size?.width || defaulButtonWidth) - margin * 2;
  const defaultRadius = defaultStyle.borderRadius || 0;
  const defaultHeight = size?.height || defaulButtonHeight;
  const animatedHeight = animateHeight || Math.min(defaultWidth, defaultHeight);
  const animatedWidth = animateWidth || Math.min(defaultWidth, defaultHeight);
  const animatedRadius =
    animateRadius || Math.min(defaultWidth, defaultHeight) / 2;
  const animatedLoadingValue = useRef(new Animated.Value(0)).current;
  const animatedLoadingForChild = useRef(new Animated.Value(0)).current;

  const handleLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    if (size === null || size === undefined) {
      setSize({ width, height });
    }
  }, []);

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
  }, [isLoading]);

  const animatedWidthValue = animatedLoadingValue.interpolate({
    inputRange: [0, 1],
    outputRange: [defaultWidth, animatedWidth],
  });

  const animatedHeightValue = animatedLoadingValue.interpolate({
    inputRange: [0, 1],
    outputRange: [defaultHeight, animatedHeight],
  });

  const animatedBorderValue = animatedLoadingValue.interpolate({
    inputRange: [0, 1],
    outputRange: [defaultRadius, animatedRadius],
  });

  const animatedOpacityHide = animatedLoadingForChild.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [1, 0, 0],
  });

  const animatedOpacityShow = animatedLoadingForChild.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [0, 0, 1],
  });

  const animatedStyles = {
    width: animatedWidthValue,
    borderRadius: animatedBorderValue,
    height: animatedHeightValue,
    elevation: isLoading ? 0 : 2,
    overflow: "hidden",
  };

  const animatedChildHideStyle = {
    opacity: animatedOpacityHide,
  };

  const animatedChildShowStyle = {
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
