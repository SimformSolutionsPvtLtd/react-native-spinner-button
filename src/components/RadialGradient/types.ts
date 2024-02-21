import type { ColorValue } from 'react-native';
import type { AnimatedStyleProp } from '../../components';

export type RadialGradientProps = {
  animatedStyles: AnimatedStyleProp;
  children?: JSX.Element;
  gradientRadialRadius?: number;
  gradientColoroffset?: number[];
  gradientColors?: ColorValue[];
  gradientButtonHeight?: number;
  gradientName?: string;
  radialRadiusRX?: string | number;
  radialRadiusRY?: string | number;
  radialRadiusx?: string | number;
  radialRadiusy?: string | number;
};
