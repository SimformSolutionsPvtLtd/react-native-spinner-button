import React from "react";
import { Animated } from "react-native";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import styles from "../styles/SpinnerButtonStyle";
import { AnimatedView } from "./types";

const AnimatedView = ({
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
}: AnimatedView) => {
  const isCustomSpinner =
    customSpinnerComponent !== null && customSpinnerComponent !== undefined;
  return (
    <>
      <Animated.View style={animatedChildHideStyle}>{children}</Animated.View>
      <Animated.View style={[styles.absoluteView, animatedChildShowStyle]}>
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
      </Animated.View>
    </>
  );
};

export default AnimatedView;
