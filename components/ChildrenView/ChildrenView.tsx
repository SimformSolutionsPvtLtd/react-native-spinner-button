import React from "react";
import LinearGradient from "../LinearGradient/LinearGradient";
import RadialGradient from "../RadialGradient/RadialGradient";
import { ChildrenViewProps } from "./types";

const ChildrenView = ({
  animatedStyles,
  gradientType,
  gradientColors,
  gradientColorOffset,
  gradientColorAngle,
  gradientRadialRadius,
  gradientButtonHeight,
  radialRadiusX,
  radialRadiusY,
  radialRadiusRX,
  radialRadiusRY,
  children,
  gradientName,
}: ChildrenViewProps) => {
  const isLinearGradient = gradientType?.trim()?.toLowerCase() === "linear";
  const isRadialGradient = gradientType?.trim()?.toLowerCase() === "radial";

  if (isLinearGradient) {
    return (
      <LinearGradient
        angle={gradientColorAngle || 90}
        children={children}
        animatedStyles={animatedStyles}
        gradientColorOffset={gradientColorOffset}
        gradientColors={gradientColors}
        gradientName={gradientName}
        gradientRadialRadius={gradientRadialRadius}
        gradientButtonHeight={gradientButtonHeight}
      />
    );
  } else if (isRadialGradient) {
    return (
      <RadialGradient
        radialRadiusX={radialRadiusX}
        radialRadiusY={radialRadiusY}
        radialRadiusRX={radialRadiusRX}
        radialRadiusRY={radialRadiusRY}
        children={children}
        gradientName={gradientName}
        animatedStyles={animatedStyles}
        gradientColorOffset={gradientColorOffset}
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
