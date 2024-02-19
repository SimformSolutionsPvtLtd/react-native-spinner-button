import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import type { StyleProp, ViewStyle, ColorValue } from "react-native";
import AnimatableView from "../AnimatableView/AnimatableView";
import AnimatedView from "../AnimatedView/AnimatedView";
import ChildrenView from "../ChildrenView/ChildrenView";
import { getSpinnerStyle, useAnimatedValues } from "../utils";
import type { SpinnerButtonProps } from "./types";
import styles from "../styles/SpinnerButtonStyle";

const AnimatedTouchablesOpacity: Animated.AnimatedComponent<
  typeof TouchableOpacity
> = Animated.createAnimatedComponent(TouchableOpacity);

const SpinnerButton: React.FC<SpinnerButtonProps> = ({
  animationType,
  buttonContainer,
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
  gradientColoroffset,
  gradientColorAngle,
  gradientRadialRadius,
  gradientButtonHeight,
  radialRadiusx,
  radialRadiusy,
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
  disableGradientColors,
}: SpinnerButtonProps) => {
  const isDisable: boolean = disabled || !isConnected;
  const isAnimationType: boolean =
    animationType !== null && animationType !== undefined;
  const gradientColor: ColorValue[] = isDisable
    ? disableGradientColors || gradientColors
    : gradientColors;
  const style: StyleProp<ViewStyle> = [
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

  return (
    <View
      style={[styles.buttonContainer, styles.centerAlign, buttonContainer]}
      onLayout={handleLayout}
    >
      <AnimatedTouchablesOpacity
        activeOpacity={1}
        style={[style, animatedStyles]}
        onPress={onPress}
        disabled={isDisable || isLoading}
      >
        <ChildrenView
          animatedStyles={animatedStyles}
          gradientType={gradientType}
          gradientColors={gradientColor}
          gradientColoroffset={gradientColoroffset}
          gradientColorAngle={gradientColorAngle}
          gradientRadialRadius={gradientRadialRadius}
          gradientButtonHeight={gradientButtonHeight}
          radialRadiusx={radialRadiusx}
          radialRadiusy={radialRadiusy}
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
                  height={height}
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
                  height={height}
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
