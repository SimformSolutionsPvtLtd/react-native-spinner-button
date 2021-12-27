import React from "react";
import type { ViewStyle } from "react-native";
import { Animated, TouchableOpacity, View } from "react-native";
import AnimatableView from "../AnimatableView/AnimatableView";
import AnimatedView from "../AnimatedView/AnimatedView";
import ChildrenView from "../ChildrenView/ChildrenView";
import styles from "../styles/SpinnerButtonStyle";
import { getSpinnerStyle, useAnimatedValues } from "../utils";
import { SpinnerButtonProps } from "./types";

const AnimatedTouchablesOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const SpinnerButton = ({
  animationType,
  buttonStyle,
  borderStyle,
  spinnerColor,
  spinnerType,
  onPress,
  children,
  indicatorCount,
  size,
  spinnerOptions,
  gradientName,
  gradientType,
  gradientColors,
  gradientColorOffset,
  gradientColorAngle,
  gradientRadialRadius,
  gradientButtonHeight,
  radialRadiusX,
  radialRadiusY,
  radialRadiusRX,
  radialRadiusRY,
  animatedDuration = 300,
  customSpinnerComponent,
  animateWidth,
  animateHeight,
  animateRadius,
  isLoading,
  isConnected = true,
  disabled = false,
  disableStyle,
}: SpinnerButtonProps) => {
  const isDisable = disabled || !isConnected;
  const isAnimationType = animationType !== null && animationType !== undefined;
  const style = [
    styles.defaultButton,
    styles.centerAlign,
    buttonStyle,
    borderStyle,
    isDisable && disableStyle,
  ];
  const { height } = getSpinnerStyle(style, styles.defaultButton);
  const {
    handleLayout,
    animatedStyles,
    animatedChildHideStyle,
    animatedChildShowStyle,
  } = useAnimatedValues({
    isLoading,
    style,
    animatedDuration,
    animateWidth,
    animateHeight,
    animateRadius,
  });

  const isValidJSX = React.isValidElement(ChildrenView);

  return (
    <View style={[styles.buttonContainer, styles.centerAlign]}>
      <AnimatedTouchablesOpacity
        activeOpacity={1}
        style={[style, animatedStyles as unknown as ViewStyle]}
        onPress={onPress}
        disabled={isDisable || isLoading}
        onLayout={handleLayout}
      >
        <ChildrenView
          animatedStyles={animatedStyles}
          gradientType={gradientType}
          gradientColors={gradientColors}
          gradientColorOffset={gradientColorOffset}
          gradientColorAngle={gradientColorAngle}
          gradientRadialRadius={gradientRadialRadius}
          gradientButtonHeight={gradientButtonHeight}
          radialRadiusX={radialRadiusX}
          radialRadiusY={radialRadiusY}
          radialRadiusRX={radialRadiusRX}
          radialRadiusRY={radialRadiusRY}
          gradientName={gradientName}
          children={
            <>
              {isAnimationType && (
                <AnimatableView
                  animationType={animationType}
                  children={children}
                  customSpinnerComponent={customSpinnerComponent}
                  height={height ?? 0}
                  size={size}
                  isLoading={isLoading}
                  animatedDuration={animatedDuration}
                  spinnerColor={spinnerColor}
                  spinnerType={spinnerType}
                  indicatorCount={indicatorCount}
                  spinnerOptions={spinnerOptions}
                />
              )}
              {!isAnimationType && (
                <AnimatedView
                  animatedChildHideStyle={animatedChildHideStyle}
                  animatedChildShowStyle={animatedChildShowStyle}
                  children={children}
                  customSpinnerComponent={customSpinnerComponent}
                  height={height ?? 0}
                  size={size}
                  spinnerColor={spinnerColor}
                  spinnerType={spinnerType}
                  indicatorCount={indicatorCount}
                  spinnerOptions={spinnerOptions}
                />
              )}
            </>
          }
        />
      </AnimatedTouchablesOpacity>
    </View>
  );
};

export default SpinnerButton;
