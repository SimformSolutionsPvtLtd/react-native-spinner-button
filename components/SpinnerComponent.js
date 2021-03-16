import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Platform } from 'react-native';
import { DEFAULT_COLOR_WHITE, getWaveFactorAndMode } from './utils';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const SpinnerComponent = ({
  height,
  size,
  spinnerColor,
  spinnerType,
  indicatorCount,
  spinnerOptions
}) => {
  const spinnerColors = spinnerColor || DEFAULT_COLOR_WHITE;

  switch (spinnerType?.trim()?.toLowerCase()) {
    case 'barindicator':
      return <BarIndicator color={spinnerColors} count={indicatorCount} size={height - 10} />;

    case 'dotindicator':
      return <DotIndicator color={spinnerColors} count={indicatorCount} size={size} />;

    case 'materialindicator':
      // Note: To overcome https://github.com/n4kz/react-native-indicators/issues/11 and 
      // https://github.com/n4kz/react-native-indicators/issues/6 ActivityIndicator is used in android
      if (Platform.OS === 'android') {
        return <ActivityIndicator color={spinnerColors} size={height - 10} />;
      }
      return <MaterialIndicator color={spinnerColors} size={height - 10} />;

    case 'pacmanindicator':
      return <PacmanIndicator color={spinnerColors} size={height - 10} />;

    case 'pulseindicator':
      return <PulseIndicator color={spinnerColors} size={height} />;

    case 'skypeindicator':
      return <SkypeIndicator color={spinnerColors} count={indicatorCount} size={height - 10} />;

    case 'uiactivityindicator':
      return <UIActivityIndicator color={spinnerColors} count={indicatorCount} size={height - 10} />;

    case 'waveindicator':
      const { waveFactor, waveMode } = getWaveFactorAndMode(spinnerOptions);
      return <WaveIndicator color={spinnerColors} count={indicatorCount} size={height - 10} waveFactor={waveFactor} waveMode={waveMode} />;
      
    default:
      return <BallIndicator color={spinnerColors} count={indicatorCount} size={height - 20} />;
  }
}

SpinnerComponent.propTypes = {
  height: PropTypes.number,
  spinnerColor: PropTypes.string,
  spinnerType: PropTypes.string,
  indicatorCount: PropTypes.number,
  size: PropTypes.number,
  spinnerOptions: PropTypes.shape({
    waveFactor: PropTypes.number,
    waveMode: PropTypes.string
  })
}

export default SpinnerComponent;