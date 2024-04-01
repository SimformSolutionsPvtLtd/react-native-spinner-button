import type { ColorValue } from 'react-native';
import type { SpinnerType } from '..';
import type { SpinnerOptionsProp } from '..';

export type SpinnerComponentProp = {
  height: number;
  spinnerColor: ColorValue;
  spinnerType: SpinnerType;
  indicatorCount?: number;
  size: number;
  spinnerOptions?: SpinnerOptionsProp;
};
