import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import SpinnerComponent from './SpinnerComponent';

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
  spinnerOptions
}) => {
  const isCustomeSpinner = customSpinnerComponent !== null && customSpinnerComponent !== undefined;
  return (
    <>
      <Animated.View style={animatedChildHideStyle}>
        {children}
      </Animated.View>
      <Animated.View style={[styles.absoluteView, animatedChildShowStyle]}>
        {isCustomeSpinner && customSpinnerComponent}
        {!isCustomeSpinner &&
          <SpinnerComponent
            height={height}
            size={size}
            spinnerColor={spinnerColor}
            spinnerType={spinnerType}
            indicatorCount={indicatorCount}
            spinnerOptions={spinnerOptions}
          />
        }
      </Animated.View>
    </>
  )
};

AnimatedView.propTypes = {
  animatedChildHideStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  animatedChildShowStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.any.isRequired,
  customSpinnerComponent: PropTypes.node,
  height: PropTypes.number,
  size: PropTypes.number,
  spinnerColor: PropTypes.string,
  spinnerType: PropTypes.string,
  indicatorCount: PropTypes.number,
  spinnerOptions: PropTypes.shape({
    waveFactor: PropTypes.number,
    waveMode: PropTypes.string
  })
};

export default AnimatedView;