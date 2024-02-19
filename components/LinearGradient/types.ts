import type { ColorValue } from "react-native";
import type { AnimatedStyleProp } from "../ChildrenView/types";

export type LinearGradientProps = {
  animatedStyles: AnimatedStyleProp;
  children?: JSX.Element;
  angle?: number;
  gradientRadialRadius?: number;
  gradientColoroffset?: number[];
  gradientColors?: ColorValue[];
  gradientButtonHeight?: number;
  gradientName?: string;
};
