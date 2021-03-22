import { StyleSheet, Dimensions } from 'react-native';

const DEFAULT_COLOR_WHITE = 'rgb(255, 255, 255)';
const DEFAULT_ANIMATION_TYPE = 'fadeIn';

const defaulButtonWidth = Dimensions.get('window').width;
const defaulButtonHeight = 50;

const getSpinnerStyle = (buttonStyle, defaultStyle) => {
  const customButtonStyle = StyleSheet.flatten(buttonStyle);
  const defaultButtonStyle = StyleSheet.flatten(defaultStyle);
  const height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  return { height };
}

const getWaveFactorAndMode = (spinnerOptions) => {
    let waveFactor = 0.54;
    let waveMode = 'fill';
    if (spinnerOptions !== undefined && spinnerOptions.waveFactor !== undefined) {
        waveFactor = spinnerOptions.waveFactor;
    }
    if (spinnerOptions !== undefined && spinnerOptions.waveMode !== undefined) {
        waveMode = spinnerOptions.waveMode;
    }
    return { waveFactor, waveMode }
};

export {
    defaulButtonWidth,
    defaulButtonHeight,
    DEFAULT_COLOR_WHITE,
    DEFAULT_ANIMATION_TYPE,
    getSpinnerStyle,
    getWaveFactorAndMode
};