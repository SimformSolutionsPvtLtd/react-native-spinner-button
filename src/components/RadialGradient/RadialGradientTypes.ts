import type { ColorValue } from 'react-native';
import type { AnimatedStyleProp } from '..';

export type RadialGradientProps = {
  animatedStyles: AnimatedStyleProp;
  children?: JSX.Element;
  gradientRadialRadius?: number;
  gradientColoroffset?: string[];
  gradientColors?: ColorValue[];
  gradientButtonHeight?: number;
  gradientName?: string;
  radialRadiusRX?: string | number;
  radialRadiusRY?: string | number;
  radialRadiusx?: string | number;
  radialRadiusy?: string | number;
};
