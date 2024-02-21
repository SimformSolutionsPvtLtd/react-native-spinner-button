import React from 'react';
import { Animated, View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient as SVGLinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import {
  getColorList,
  getAnglePercentageObject,
  getGradientFromName,
} from '../../utils';
import type {
  CoOrdinateProp,
  ColorListProp,
  GradientDataProp,
} from '../../utils';
import type { LinearGradientProps } from './types';
import { SpinnerButtonStyle } from '../../styles';

const AnimatedRect: Animated.AnimatedComponent<typeof Rect> =
  Animated.createAnimatedComponent(Rect);

const LinearGradient: React.FC<LinearGradientProps> = ({
  animatedStyles,
  children,
  angle,
  gradientRadialRadius,
  gradientColoroffset = [],
  gradientColors = [],
  gradientButtonHeight,
  gradientName,
}: LinearGradientProps) => {
  const rectWidth: Animated.AnimatedInterpolation<number> =
    animatedStyles.width;
  const gradientData: GradientDataProp | null = gradientName
    ? getGradientFromName(gradientName)
    : null;
  const angleObj: CoOrdinateProp =
    typeof gradientData?.angle === 'number'
      ? getAnglePercentageObject(gradientData?.angle)
      : typeof angle === 'number'
        ? getAnglePercentageObject(angle)
        : {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0,
          };
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
        <Svg height={gradientButtonHeight} width={'100%'}>
          <Defs>
            <SVGLinearGradient
              id="grad"
              x1={`${angleObj.x1}%`}
              y1={`${angleObj.y1}%`}
              x2={`${angleObj.x2}%`}
              y2={`${angleObj.y2}%`}>
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
      {children ? children : <></>}
    </View>
  );
};

export default LinearGradient;
