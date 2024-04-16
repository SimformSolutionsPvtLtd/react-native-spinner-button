import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import type { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { AnimatableView, AnimatedView, ChildrenView } from '../../components';
import {
  DEFAULT_COLOR_WHITE,
  getSpinnerStyle,
  useAnimatedValues,
  useRippleButton
} from '../../utils';
import type { SpinnerButtonProps } from './SpinnerButtonTypes';
import { SpinnerButtonStyle } from '../../styles';

const AnimatedTouchablesOpacity: Animated.AnimatedComponent<
  typeof TouchableOpacity
> = Animated.createAnimatedComponent(TouchableOpacity);

const SpinnerButton: React.FC<SpinnerButtonProps> = ({
  animationType,
  buttonContainer,
  buttonStyle,
  borderStyle,
  spinnerColor = DEFAULT_COLOR_WHITE,
  spinnerType = 'BallIndicator',
  onPress,
  children,
  indicatorCount,
  size = 16,
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
  rippleColor = 'rgba(255, 255, 255, .25)',
  animatedDuration = 300,
  customSpinnerComponent,
  animateWidth,
  animateHeight,
  animateRadius,
  isLoading = false,
  isConnected = true,
  disabled = false,
  disableStyle,
  disableGradientColors,
}: SpinnerButtonProps) => {
  const isDisable: boolean = disabled || !isConnected;
  const isAnimationType: boolean =
    animationType !== null && animationType !== undefined;
  const gradientColor: ColorValue[] | undefined = isDisable
    ? disableGradientColors || gradientColors
    : gradientColors;
  const style: StyleProp<ViewStyle> = [
    SpinnerButtonStyle.defaultButton,
    SpinnerButtonStyle.centerAlign,
    buttonStyle,
    borderStyle,
    isDisable && disableStyle,
  ];
  const { height } = getSpinnerStyle(style, SpinnerButtonStyle.defaultButton);
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
    animationType
  });
  const { handleRipplePress, handleRippleLayout, animatedStyle } = useRippleButton({
    onPress,
    animatedDuration,
  });

  return (
    <View
      style={[
        SpinnerButtonStyle.buttonContainer,
        SpinnerButtonStyle.centerAlign,
        buttonContainer,
      ]}
      onLayout={handleLayout}>
      <AnimatedTouchablesOpacity
        activeOpacity={1}
        style={[style, animatedStyles as Animated.WithAnimatedValue<ViewStyle>]}
        onPress={onPress}
        disabled={isDisable || isLoading}>
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
              {isAnimationType && animationType === 'ripple-effect' && (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={handleRipplePress}
                  style={SpinnerButtonStyle.rippleButtonStyle}
                >
                  <View
                    style={[SpinnerButtonStyle.button, style, SpinnerButtonStyle.animatedViewContainer]}
                    pointerEvents="none"
                    onLayout={handleRippleLayout}>
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
              )}
              {isAnimationType && typeof animationType === 'string' && animationType !== 'ripple-effect' && (
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
