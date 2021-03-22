import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/SpinnerButtonStyle';
import SpinnerComponent from './SpinnerComponent';
import * as Animatable from 'react-native-animatable';

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
  animatedDuration
}) => {
  const isCustomeSpinner = customSpinnerComponent !== null && customSpinnerComponent !== undefined;
  return (
    <>
      {!isLoading && 
        <Animatable.View animation={animationType} duration={animatedDuration}>
          {children}
        </Animatable.View>
      }
      {isLoading && 
        <Animatable.View animation={animationType} duration={animatedDuration} style={styles.absoluteView}>
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
        </Animatable.View>
      }
    </>
  )
};

AnimatableView.propTypes = {
  animationType: PropTypes.string,
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
  }),
  isLoading: PropTypes.bool,
  animatedDuration: PropTypes.number
};

export default AnimatableView;