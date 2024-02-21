import React from 'react';
import { Animated } from 'react-native';
import { SpinnerComponent } from '../../components';
import type { AnimatedViewProps } from './types';
import { SpinnerButtonStyle } from '../../styles';

const AnimatedView: React.FC<AnimatedViewProps> = ({
  animatedChildHideStyle,
  animatedChildShowStyle,
  children,
  customSpinnerComponent,
  height,
  size,
  spinnerColor,
  spinnerType,
  indicatorCount,
  spinnerOptions,
}: AnimatedViewProps) => {
  const isCustomeSpinner: boolean =
    customSpinnerComponent !== null && customSpinnerComponent !== undefined;
  return (
    <>
      <Animated.View style={animatedChildHideStyle}>{children}</Animated.View>
      <Animated.View
        style={[SpinnerButtonStyle.absoluteView, animatedChildShowStyle]}>
        {isCustomeSpinner && customSpinnerComponent}
        {!isCustomeSpinner && (
          <SpinnerComponent
            height={height}
            size={size}
            spinnerColor={spinnerColor}
            spinnerType={spinnerType}
            indicatorCount={indicatorCount}
            spinnerOptions={spinnerOptions}
          />
        )}
      </Animated.View>
    </>
  );
};

export default AnimatedView;
