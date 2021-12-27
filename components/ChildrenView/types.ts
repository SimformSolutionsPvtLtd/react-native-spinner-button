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

export type ChildrenViewProps = {
  animatedStyles: AnimatedStyleValues | AnimatedStyleProp;
  gradientType?: string;
  gradientColors?: number[];
  gradientColorOffset?: number[];
  gradientColorAngle?: number;
  gradientRadialRadius?: number;
  gradientButtonHeight?: number;
  radialRadiusX?: string | number;
  radialRadiusY?: string | number;
  radialRadiusRX?: string | number;
  radialRadiusRY?: string | number;
  children: JSX.Element;
  gradientName?: string;
};
