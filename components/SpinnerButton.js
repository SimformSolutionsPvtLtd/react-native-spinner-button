import React from 'react';
import Spinner from './Spinner';
import CustomButton from './CustomButton';

const SpinnerButton = ({
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
}) => {
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
      animationType={animationType}
    />
  );
};

export default SpinnerButton;