import type { ColorValue } from 'react-native';
import type { SpinnerOptionsProp } from '../../components';

export type SpinnerType =
  | 'barindicator'
  | 'dotindicator'
  | 'materialindicator'
  | 'pacmanindicator'
  | 'pulseindicator'
  | 'skypeindicator'
  | 'uiactivityindicator'
  | 'waveindicator';

export type CommonViewProps = {
  children: JSX.Element;
  customSpinnerComponent?: JSX.Element;
  height: number;
  size: number;
  spinnerColor: ColorValue;
  spinnerType: SpinnerType;
  indicatorCount: number;
  spinnerOptions: SpinnerOptionsProp;
};

export type AnimatableViewProps = CommonViewProps & {
  animationType: string;
  isLoading?: boolean;
  animatedDuration?: number;
};
