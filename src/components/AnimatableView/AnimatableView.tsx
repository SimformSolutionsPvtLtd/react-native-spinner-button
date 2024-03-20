import React from 'react';
import * as Animatable from 'react-native-animatable';
import { SpinnerComponent } from '../../components';
import type { AnimatableViewProps } from './AnimatableTypes';
import { SpinnerButtonStyle } from '../../styles';

const AnimatableView: React.FC<AnimatableViewProps> = ({
  animationType,
  children,
  customSpinnerComponent,
  height,
  size,
  spinnerColor,
  spinnerType,
  indicatorCount,
  spinnerOptions,
  isLoading,
  animatedDuration,
}: AnimatableViewProps) => {
  const isCustomeSpinner: boolean =
    customSpinnerComponent !== null && customSpinnerComponent !== undefined;
  return (
    <>
      {!isLoading && (
        <Animatable.View animation={animationType} duration={animatedDuration}>
          {children}
        </Animatable.View>
      )}
      {isLoading && (
        <Animatable.View
          animation={animationType}
          duration={animatedDuration}
          style={SpinnerButtonStyle.absoluteView}>
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
        </Animatable.View>
      )}
    </>
  );
};

export default AnimatableView;
