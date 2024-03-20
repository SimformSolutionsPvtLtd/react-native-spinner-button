import type { ColorValue } from 'react-native';
import type { AnimatedStyleProp } from '..';

export type LinearGradientProps = {
  animatedStyles: AnimatedStyleProp;
  children?: JSX.Element;
  angle?: number;
  gradientRadialRadius?: number;
  gradientColoroffset?: string[];
  gradientColors?: ColorValue[];
  gradientButtonHeight?: number;
  gradientName?: string;
};
