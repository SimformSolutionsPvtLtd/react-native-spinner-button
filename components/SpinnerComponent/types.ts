import type { ColorValue } from "react-native";
import type { SpinnerType } from "../AnimatableView/types";
import type { SpinnerOptionsProp } from "../SpinnerButton/types";

export type SpinnerComponentProp = {
  height: number;
  spinnerColor: ColorValue;
  spinnerType: SpinnerType;
  indicatorCount: number;
  size: number;
  spinnerOptions: SpinnerOptionsProp;
};
