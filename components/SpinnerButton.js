import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from './Spinner';
import styles from './styles/SpinnerButtonStyle';

const CustomButton = (props) => {
  const { animationType, buttonStyle, onPress, isLoading, children } = props;
  return (
    <Animatable.View animation={animationType || 'fadeIn'}>
      <TouchableOpacity
        style={[styles.defaultButtonStyle, buttonStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </Animatable.View>
  );
};

const SpinnerButton = (props) => {
  const {
    animationType,
    buttonStyle,
    spinnerColor,
    spinnerType,
    isLoading,
    onPress,
    children,
    indicatorCount,
    size,
    spinnerOptions,
  } = props;
  if (isLoading) {
    return (
      <Spinner
        spinnerColor={spinnerColor || 'rgb(255, 255, 255)'}
        spinnerType={spinnerType}
        buttonStyle={buttonStyle}
        count={indicatorCount}
        spinnerOptions={spinnerOptions}
        size={size}
        isLoading={isLoading}
        animationType={animationType}
      />
    );
  }
  return (
    <CustomButton
      buttonStyle={buttonStyle}
      onPress={onPress}
      children={children}
      isLoading={isLoading}
      animationType={animationType}
    />
  );
};

export default SpinnerButton;