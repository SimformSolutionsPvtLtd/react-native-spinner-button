import { StyleSheet, Dimensions } from "react-native";
import type { StyleProp, ViewStyle, ColorValue } from "react-native";
import type { SpinnerOptionsProp, waveModeType } from "../SpinnerButton/types";

const DEFAULT_COLOR_WHITE: ColorValue = "rgb(255, 255, 255)";
const DEFAULT_ANIMATION_TYPE: string = "fadeIn";

const defaulButtonWidth: number = Dimensions.get("window").width;
const defaulButtonHeight: number = 50;

const getSpinnerStyle = (
  buttonStyle: StyleProp<ViewStyle>,
  defaultStyle: StyleProp<ViewStyle>
): { height: number } => {
  const customButtonStyle: ViewStyle = StyleSheet.flatten(buttonStyle);
  const defaultButtonStyle: ViewStyle = StyleSheet.flatten(defaultStyle);
  const height: number =
    typeof customButtonStyle.height == "number"
      ? customButtonStyle.height
      : typeof defaultButtonStyle?.height == "number"
      ? defaultButtonStyle.height
      : 50;
  return { height };
};

const getWaveFactorAndMode = (
  spinnerOptions: SpinnerOptionsProp | undefined
): SpinnerOptionsProp => {
  let waveFactor: number = 0.54;
  let waveMode: waveModeType = "fill";
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
