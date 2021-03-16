import React from 'react';
import { View } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import SpinnerComponent from './SpinnerComponent';
import * as Animatable from 'react-native-animatable';
import { DEFAULT_ANIMATION_TYPE, getSpinnerStyle } from './SpinnerUtils';

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

export default Spinner;