import React from 'react';
import PropTypes from 'prop-types';
import ChildrenView from './ChildrenView';
import styles from './styles/SpinnerButtonStyle';
import AnimatedView from './AnimatedView';
import AnimatableView from './AnimatableView';
import { useAnimatedValues, getSpinnerStyle } from './utils'
import { Animated, View, TouchableOpacity } from 'react-native';

const AnimatedTouchablesOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);

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
  disableStyle
}) => {
  const isDisable = disabled || !isConnected;
  const isAnimationType = animationType !== null && animationType !== undefined;
  const style = [styles.defaultButton, styles.centerAlign, buttonStyle, borderStyle, isDisable && disableStyle];
  const { height } = getSpinnerStyle(style, styles.defaultButton);
  const { handleLayout, animatedStyles, animatedChildHideStyle, animatedChildShowStyle } = useAnimatedValues({ 
    isLoading, 
    style, 
    animatedDuration, 
    animateWidth,
    animateHeight,
    animateRadius
  });
  
  return (
    <View style={[styles.buttonContainer, styles.centerAlign]}>
      <AnimatedTouchablesOpacity
        activeOpacity={1}
        style={[style, animatedStyles]}
        onPress={onPress}
        disabled={isDisable || isLoading}
        onLayout={handleLayout}
      >
        <ChildrenView
          animatedStyles={animatedStyles}
          gradientType={gradientType}
          gradientColors={gradientColors}
          gradientColoroffset={gradientColoroffset}
          gradientColorAngle={gradientColorAngle}
          gradientRadialRadius={gradientRadialRadius}
          gradientButtonHeight={gradientButtonHeight}
          radialRadiusx={radialRadiusx}
          radialRadiusy={radialRadiusy}
          radialRadiusRX={radialRadiusRX}
          radialRadiusRY={radialRadiusRY}
          children={
            <>
              {isAnimationType && 
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
              }
              {!isAnimationType && 
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
              }
            </>
          } 
        />
      </AnimatedTouchablesOpacity>
    </View>
  );
};

SpinnerButton.propTypes = {
  animationType: PropTypes.string,
  buttonStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  borderStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  spinnerColor: PropTypes.string,
  spinnerType: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  indicatorCount: PropTypes.number,
  size: PropTypes.number,
  spinnerOptions: PropTypes.shape({
    waveFactor: PropTypes.number,
    waveMode: PropTypes.string
  }),
  gradientType: PropTypes.string,
  gradientColors: PropTypes.array,
  gradientColoroffset: PropTypes.array,
  gradientColorAngle: PropTypes.number,
  gradientRadialRadius: PropTypes.number,
  gradientButtonHeight: PropTypes.number,
  radialRadiusx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialRadiusy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialRadiusRX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialRadiusRY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animatedDuration: PropTypes.number,
  customSpinnerComponent: PropTypes.node,
  animateWidth: PropTypes.number,
  animateHeight: PropTypes.number,
  animateRadius: PropTypes.number,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isConnected: PropTypes.bool,
  disableStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default SpinnerButton;