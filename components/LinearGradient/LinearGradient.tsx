import React from "react";
import { Animated, View } from "react-native";
import styles from "../styles/SpinnerButtonStyle";
import { getColorList, getAnglePercentageObject } from "../utils";
import Svg, {
  Defs,
  LinearGradient as SVGLinearGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { getGradientFromName } from "../utils/getAnglePercentageObject";
import { LinearGradientProps } from "./types";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const LinearGradient = ({
  animatedStyles,
  children,
  angle,
  gradientRadialRadius,
  gradientColorOffset = [],
  gradientColors = [],
  gradientButtonHeight,
  gradientName,
}: LinearGradientProps) => {
  const rectWidth = animatedStyles.width;
  const gradientData = getGradientFromName(gradientName ?? "");
  const angleObj = getAnglePercentageObject(gradientData?.angle || angle);
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
        <Svg height={gradientButtonHeight} width={"100%"}>
          <Defs>
            <SVGLinearGradient
              id="grad"
              x1={`${angleObj.x1}%`}
              y1={`${angleObj.y1}%`}
              x2={`${angleObj.x2}%`}
              y2={`${angleObj.y2}%`}
            >
              {colorList.map((value, index) => (
                <Stop
                  key={`LinerGradientItem_${index}`}
                  offset={value.offset}
                  stopColor={value.color}
                  stopOpacity={value.opacity}
                />
              ))}
            </SVGLinearGradient>
          </Defs>
          <AnimatedRect
            x="0"
            y="0"
            rx={gradientRadialRadius}
            ry={0}
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

export default LinearGradient;
