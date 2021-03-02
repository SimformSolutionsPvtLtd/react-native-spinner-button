import { StyleSheet, Dimensions } from 'react-native';

const DEFAULT_COLOR_WHITE = 'rgb(255, 255, 255)';
const DEFAULT_ANIMATION_TYPE = 'fadeIn';

const windowWidth = Dimensions.get('window').width;

const getSpinnerBackgroundStyle = (spinnerType, customButtonStyle, defaultButtonStyle) => {
  const borderRadius = customButtonStyle.height ? customButtonStyle.height / 2 : defaultButtonStyle.height / 2;
  const height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  const width = height;
  const backgroundColor = customButtonStyle.backgroundColor ? customButtonStyle.backgroundColor : defaultButtonStyle.backgroundColor;
  const margin = customButtonStyle.margin ? customButtonStyle.margin : defaultButtonStyle.margin;
  const marginTop = customButtonStyle.marginTop ? customButtonStyle.marginTop : defaultButtonStyle.margin;
  const marginBottom = customButtonStyle.marginBottom ? customButtonStyle.marginBottom : defaultButtonStyle.margin;
  const marginLeft = customButtonStyle.marginLeft ? customButtonStyle.marginLeft : defaultButtonStyle.margin;
  const marginRight = customButtonStyle.marginRight ? customButtonStyle.marginRight : defaultButtonStyle.margin;
  const marginVertical = customButtonStyle.marginVertical ? customButtonStyle.marginVertical : defaultButtonStyle.margin;
  const marginHorizontal = customButtonStyle.marginHorizontal ? customButtonStyle.marginHorizontal : defaultButtonStyle.margin;
  
  if (spinnerType?.trim()?.toLowerCase() === 'pacmanindicator') {
    return {
        height,
        width: height * 2,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
    };
  } else if (spinnerType?.trim()?.toLowerCase() === 'barindicator' || spinnerType?.trim()?.toLowerCase() === 'dotindicator') {
    return {
        height,
        paddingHorizontal: 10,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
    };
  } else {
    return {
        height,
        width,
        backgroundColor,
        margin,
        marginVertical,
        marginHorizontal,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
    };
  }
}

const getSpinnerStyle = (spinnerType, buttonStyle, defaultStyle) => {
  const customButtonStyle = StyleSheet.flatten(buttonStyle);
  const defaultButtonStyle = StyleSheet.flatten(defaultStyle);
  const height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  const width = customButtonStyle.width ? customButtonStyle.width : defaultButtonStyle.width;
  const customSpinnerStyle = getSpinnerBackgroundStyle(spinnerType, customButtonStyle, defaultButtonStyle);
  return { height, width, customSpinnerStyle };
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
    windowWidth,
    DEFAULT_COLOR_WHITE,
    DEFAULT_ANIMATION_TYPE,
    getSpinnerStyle,
    getWaveFactorAndMode
};