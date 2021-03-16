import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { DEFAULT_COLOR_WHITE, getWaveFactorAndMode } from './SpinnerUtils';
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

  switch (spinnerType) {
    case 'BarIndicator':
      return <BarIndicator color={spinnerColors} count={indicatorCount} size={height - 10} />;

    case 'DotIndicator':
      return <DotIndicator color={spinnerColors} count={indicatorCount} size={size} />;

    case 'MaterialIndicator':
      // Note: To overcome https://github.com/n4kz/react-native-indicators/issues/11 and 
      // https://github.com/n4kz/react-native-indicators/issues/6 ActivityIndicator is used in android
      if (Platform.OS === 'android') {
        return <ActivityIndicator color={spinnerColors} size={height - 10} />;
      }
      return <MaterialIndicator color={spinnerColors} size={height - 10} />;

    case 'PacmanIndicator':
      return <PacmanIndicator color={spinnerColors} size={height - 10} />;

    case 'PulseIndicator':
      return <PulseIndicator color={spinnerColors} size={height} />;

    case 'SkypeIndicator':
      return <SkypeIndicator color={spinnerColors} count={indicatorCount} size={height - 10} />;

    case 'UIActivityIndicator':
      return <UIActivityIndicator color={spinnerColors} count={indicatorCount} size={height - 10} />;

    case 'WaveIndicator':
      const { waveFactor, waveMode } = getWaveFactorAndMode(spinnerOptions);
      return <WaveIndicator color={spinnerColors} count={indicatorCount} size={height - 10} waveFactor={waveFactor} waveMode={waveMode} />;
      
    default:
      return <BallIndicator color={spinnerColors} count={indicatorCount} size={height - 20} />;
  }
}

export default SpinnerComponent;