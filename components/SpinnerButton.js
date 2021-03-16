import React from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import ChildrenView from './ChildrenView';

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
  gradientType,
  gradientColors,
  gradientColoroffset,
  gradientColorAngle,
  gradientRadialRadius,
  gradientButtonHeight,
  radialRadiusx,
  radialRadiusy,
  radialRadiusRX,
  radialRadiusRY
}) => {
  if (isLoading) {
    return (
      <Spinner
        spinnerColor={spinnerColor || 'rgb(255, 255, 255)'}
        spinnerType={spinnerType}
        buttonStyle={buttonStyle}
        indicatorCount={indicatorCount}
        spinnerOptions={spinnerOptions}
        size={size}
        isLoading={isLoading}
        animationType={animationType}
      />
    );
  } else {
    const isGradientType = gradientType !== null && gradientType !== undefined && gradientType?.trim() !== '';
    return (
      <CustomButton
        buttonStyle={buttonStyle}
        onPress={onPress}
        isGradientType={isGradientType}
        children={
          <ChildrenView
            buttonStyle={buttonStyle}
            gradientType={gradientType}
            gradientColors={gradientColors}
            gradientColoroffset={gradientColoroffset}
            gradientColorAngle={gradientColorAngle}
            gradientRadialRadius={gradientRadialRadius}
            gradientButtonHeight={gradientButtonHeight}
            radialRadiusx={radialRadiusx}
            radialRadiusy={radialRadiusy}
            radialRadiusRX={radialRadiusRX}
            radialRadiusRY={radialRadiusRY}
            children={children} 
          />
        }
        animationType={animationType}
      />
    );
  }
};

SpinnerButton.propTypes = {
  animationType: PropTypes.string,
  buttonStyle: PropTypes.object,
  spinnerColor: PropTypes.string,
  spinnerType: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  indicatorCount: PropTypes.number,
  size: PropTypes.number,
  spinnerOptions: PropTypes.shape({
    waveFactor: PropTypes.number,
    waveMode: PropTypes.string
  }),
  gradientType: PropTypes.string,
  gradientColors: PropTypes.array,
  gradientColoroffset: PropTypes.array,
  gradientColorAngle: PropTypes.number,
  gradientRadialRadius: PropTypes.number,
  gradientButtonHeight: PropTypes.number,
  radialRadiusx: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  radialRadiusy: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  radialRadiusRX: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  radialRadiusRY: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
}

export default SpinnerButton;