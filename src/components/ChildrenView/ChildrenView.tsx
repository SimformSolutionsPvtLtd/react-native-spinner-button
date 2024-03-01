import React from 'react';
import { LinearGradient, RadialGradient } from '../../components';
import type { ChildrenViewProps } from './types';

const ChildrenView: React.FC<ChildrenViewProps> = ({
  animatedStyles,
  gradientType,
  gradientColors,
  gradientColoroffset,
  gradientColorAngle,
  gradientRadialRadius,
  gradientButtonHeight,
  radialRadiusx,
  radialRadiusy,
  radialRadiusRX,
  radialRadiusRY,
  children,
  gradientName,
}: ChildrenViewProps) => {
  const isLinearGradient: boolean =
    gradientType?.trim()?.toLowerCase() === 'linear';
  const isRadialGradient: boolean =
    gradientType?.trim()?.toLowerCase() === 'radial';

  if (isLinearGradient) {
    return (
      <LinearGradient
        angle={gradientColorAngle || 90}
        children={children}
        animatedStyles={animatedStyles}
        gradientColoroffset={gradientColoroffset}
        gradientColors={gradientColors}
        gradientName={gradientName}
        gradientRadialRadius={gradientRadialRadius}
        gradientButtonHeight={gradientButtonHeight}
      />
    );
  } else if (isRadialGradient) {
    return (
      <RadialGradient
        radialRadiusx={radialRadiusx}
        radialRadiusy={radialRadiusy}
        radialRadiusRX={radialRadiusRX}
        radialRadiusRY={radialRadiusRY}
        children={children}
        gradientName={gradientName}
        animatedStyles={animatedStyles}
        gradientColoroffset={gradientColoroffset}
        gradientColors={gradientColors}
        gradientRadialRadius={gradientRadialRadius}
        gradientButtonHeight={gradientButtonHeight}
      />
    );
  } else {
    return children;
  }
};

export default ChildrenView;
