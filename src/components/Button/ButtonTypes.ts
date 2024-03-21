import type { StyleProp, ViewStyle } from 'react-native';

export type AnimationType = 'ripple-effect';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children: JSX.Element;
  animatedDuration?: number;
  rippleColor?: string;
  animationType?: AnimationType;
};
