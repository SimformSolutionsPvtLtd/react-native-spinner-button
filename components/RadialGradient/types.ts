import { Animated } from "react-native";

type AnimatedStyleValues = {
  width: number;
};

type AnimatedStyleProp = {
  width?: Animated.AnimatedInterpolation;
  borderRadius?: Animated.AnimatedInterpolation;
  height: Animated.AnimatedInterpolation;
  elevation?: number;
  overflow?: string;
};

export type RadialGradientProps = {
  animatedStyles: AnimatedStyleValues | AnimatedStyleProp;
  children?: any;
  gradientRadialRadius?: number;
  gradientColorOffset?: number[];
  gradientColors?: number[];
  gradientButtonHeight?: number;
  gradientName?: string | undefined;
  radialRadiusRX?: string | number;
  radialRadiusRY?: string | number;
  radialRadiusX?: string | number;
  radialRadiusY?: string | number;
};
