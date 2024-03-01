import React from 'react';
import { Animated, View } from 'react-native';
import Svg, {
  Defs,
  RadialGradient as SVGRadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import { getGradientFromName, getColorList } from '../../utils';
import type { ColorListProp, GradientDataProp } from '../../utils';
import type { RadialGradientProps } from './types';
import { SpinnerButtonStyle } from '../../styles';

const AnimatedRect: Animated.AnimatedComponent<typeof Rect> =
  Animated.createAnimatedComponent(Rect);

const RadialGradient: React.FC<RadialGradientProps> = ({
  animatedStyles,
  children,
  gradientRadialRadius,
  gradientColoroffset = [],
  gradientColors = [],
  gradientButtonHeight,
  radialRadiusx,
  radialRadiusy,
  radialRadiusRX,
  radialRadiusRY,
  gradientName,
}: RadialGradientProps) => {
  const rectWidth: Animated.AnimatedInterpolation<number> | number =
    animatedStyles.width;
  const gradientData: GradientDataProp | null = gradientName
    ? getGradientFromName(gradientName)
    : null;
  const colorList: ColorListProp[] = getColorList(
    gradientData?.offset || gradientColoroffset,
    gradientData?.colors || gradientColors
  );
  return (
    <View
      style={[
        SpinnerButtonStyle.defaultGradientContainerStyle,
        SpinnerButtonStyle.centerAlign,
        { height: gradientButtonHeight },
      ]}>
      <View style={SpinnerButtonStyle.absoluteView}>
        <Svg height={gradientButtonHeight} width="100%">
          <Defs>
            <SVGRadialGradient
              id="grad"
              cx={radialRadiusx}
              cy={radialRadiusy}
              rx={radialRadiusRX}
              ry={radialRadiusRY}
              gradientUnits="userSpaceOnUse">
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
