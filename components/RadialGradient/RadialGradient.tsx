import React from "react";
import { Animated, View } from "react-native";
import Svg, {
  Defs,
  RadialGradient as SVGRadialGradient,
  Rect,
  Stop,
} from "react-native-svg";
import styles from "../styles/SpinnerButtonStyle";
import { getColorList } from "../utils";
import { getGradientFromName } from "../utils/getAnglePercentageObject";
import { RadialGradientProps } from "./types";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const RadialGradient = ({
  animatedStyles,
  children,
  gradientRadialRadius,
  gradientColorOffset = [],
  gradientColors = [],
  gradientButtonHeight,
  radialRadiusX,
  radialRadiusY,
  radialRadiusRX,
  radialRadiusRY,
  gradientName,
}: RadialGradientProps) => {
  const rectWidth = animatedStyles.width;
  const gradientData = getGradientFromName(gradientName ?? "");
  const colorList = getColorList(
    gradientData?.offset || gradientColorOffset,
    gradientData?.colors || gradientColors
  );
  return (
    <View
      style={[
        styles.defaultGradientContainerStyle,
        styles.centerAlign,
        { height: gradientButtonHeight },
      ]}
    >
      <View style={styles.absoluteView}>
        <Svg height={gradientButtonHeight} width="100%">
          <Defs>
            <SVGRadialGradient
              id="grad"
              cx={radialRadiusX}
              cy={radialRadiusY}
              rx={radialRadiusRX}
              ry={radialRadiusRY}
              gradientUnits="userSpaceOnUse"
            >
              {colorList.map((value, index) => (
                <Stop
                  key={`RadialGradientItem_${index}`}
                  offset={value.offset}
                  stopColor={value.color}
                  stopOpacity={value.opacity}
                />
              ))}
            </SVGRadialGradient>
          </Defs>
          <AnimatedRect
            x="0"
            y="0"
            rx={gradientRadialRadius}
            height="100%"
            width={rectWidth}
            fill="url(#grad)"
          />
        </Svg>
      </View>
      {children}
    </View>
  );
};

export default RadialGradient;
