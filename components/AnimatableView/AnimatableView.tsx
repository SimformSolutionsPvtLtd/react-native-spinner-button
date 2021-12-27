import React from "react";
import  Animatable   from "react-native-animatable";
import { AnimatableViewProps } from "../AnimatableView/types";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import styles from "../styles/SpinnerButtonStyle";

const AnimatableView = ({
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
  const isCustomSpinner =
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
          style={styles.absoluteView}
        >
          {isCustomSpinner && customSpinnerComponent}
          {!isCustomSpinner && (
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
