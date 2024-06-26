import type { Animated, ColorValue } from 'react-native';
import type { GradientType } from '../SpinnerButton';

export type AnimatedStyleProp = {
  width: Animated.AnimatedInterpolation<number>;
  borderRadius: Animated.AnimatedInterpolation<number>;
  height: Animated.AnimatedInterpolation<number>;
  elevation: number;
  overflow: string;
};

export type ChildrenViewProps = {
  animatedStyles: AnimatedStyleProp;
  gradientType?: GradientType;
  gradientColors?: ColorValue[];
  gradientColoroffset?: string[];
  gradientColorAngle?: number;
  gradientRadialRadius?: number;
  gradientButtonHeight?: number;
  radialRadiusx?: string | number;
  radialRadiusy?: string | number;
  radialRadiusRX?: string | number;
  radialRadiusRY?: string | number;
  children: JSX.Element;
  gradientName?: string;
};
