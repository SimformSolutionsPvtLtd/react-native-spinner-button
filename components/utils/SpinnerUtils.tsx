import { StyleSheet, Dimensions } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";

const DEFAULT_COLOR_WHITE = "rgb(255, 255, 255)";
const DEFAULT_ANIMATION_TYPE = "fadeIn";

const defaulButtonWidth = Dimensions.get("window").width;
const defaulButtonHeight = 50;

const getSpinnerStyle = (
  buttonStyle: StyleProp<ViewStyle>,
  defaultStyle: StyleProp<ViewStyle>
) => {
  const customButtonStyle = StyleSheet.flatten(buttonStyle);
  const defaultButtonStyle = StyleSheet.flatten(defaultStyle);
  const height = customButtonStyle.height
    ? customButtonStyle.height
    : defaultButtonStyle.height;
  return { height };
};

const getWaveFactorAndMode = (spinnerOptions: { waveFactor?: number; waveMode?: string; } | undefined) => {
  let waveFactor = 0.54;
  let waveMode = "fill";
  if (spinnerOptions !== undefined && spinnerOptions.waveFactor !== undefined) {
    waveFactor = spinnerOptions.waveFactor;
  }
  if (spinnerOptions !== undefined && spinnerOptions.waveMode !== undefined) {
    waveMode = spinnerOptions.waveMode;
  }
  return { waveFactor, waveMode };
};

export {
  defaulButtonWidth,
  defaulButtonHeight,
  DEFAULT_COLOR_WHITE,
  DEFAULT_ANIMATION_TYPE,
  getSpinnerStyle,
  getWaveFactorAndMode,
};
