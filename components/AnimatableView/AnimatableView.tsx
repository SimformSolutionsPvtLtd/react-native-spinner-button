import React from "react";
import * as Animatable from "react-native-animatable";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import type { AnimatableViewProps } from "./types";
import styles from "../styles/SpinnerButtonStyle";

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
          style={styles.absoluteView}
        >
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
