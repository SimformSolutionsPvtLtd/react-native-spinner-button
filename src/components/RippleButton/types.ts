import type { StyleProp, ViewStyle } from 'react-native';

export type RippleProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children: JSX.Element;
  animatedDuration?: number;
  rippleColor?: string;
};

export type RippleButtonProp = {
  onPress?: () => void;
  animatedDuration?: number;
};
