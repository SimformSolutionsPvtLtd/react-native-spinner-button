import { Animated } from "react-native";

type AnimatedStyleValues = {
  width: number;
};

type AnimatedStyleProp = {
  width: Animated.AnimatedInterpolation;
  borderRadius: Animated.AnimatedInterpolation;
  height: Animated.AnimatedInterpolation;
  elevation: number;
  overflow: string;
};

export type LinearGradientProps = {
  animatedStyles: AnimatedStyleValues | AnimatedStyleProp;
  children?: Element | null;
  angle?: number;
  gradientRadialRadius?: number;
  gradientColorOffset?: number[];
  gradientColors?: number[];
  gradientButtonHeight?: number;
  gradientName?: string;
};
