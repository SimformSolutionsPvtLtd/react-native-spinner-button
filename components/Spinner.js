import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import SpinnerComponent from './SpinnerComponent';
import * as Animatable from 'react-native-animatable';
import { DEFAULT_ANIMATION_TYPE, getSpinnerStyle } from './utils';

const Spinner = ({
  animationType,
  buttonStyle,
  spinnerColor,
  spinnerType,
  isLoading,
  indicatorCount,
  size,
  spinnerOptions
}) => {
  if (isLoading) {
    const { height, width, customSpinnerStyle } = getSpinnerStyle(spinnerType, buttonStyle, styles.defaultButtonStyle);
    return (
      <View style={[styles.loaderContainer, { width: width }]}>
        <Animatable.View 
          animation={animationType || DEFAULT_ANIMATION_TYPE} 
          style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <SpinnerComponent
              height={height}
              size={size}
              spinnerColor={spinnerColor}
              spinnerType={spinnerType}
              indicatorCount={indicatorCount}
              spinnerOptions={spinnerOptions}
            />
        </Animatable.View>
      </View>
    );
  }
};

Spinner.propTypes = {
  animationType: PropTypes.string,
  buttonStyle: PropTypes.object,
  spinnerColor: PropTypes.string,
  spinnerType: PropTypes.string,
  isLoading: PropTypes.bool,
  indicatorCount: PropTypes.number,
  size: PropTypes.number,
  spinnerOptions: PropTypes.shape({
    waveFactor: PropTypes.number,
    waveMode: PropTypes.string
  })
}

export default Spinner;