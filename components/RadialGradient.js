import React from 'react';
import PropTypes from 'prop-types';
import { getColorList } from './utils';
import { Animated, View } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import Svg, { Defs, RadialGradient as SVGRadialGradient, Rect, Stop } from 'react-native-svg'
import { getGradientFromName } from './utils/getAnglePercentageObject';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const RadialGradient = ({
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
  gradientName
}) => {
  const rectWidth = animatedStyles.width;  
  const gradientData = getGradientFromName(gradientName);
  const colorList = getColorList(gradientData?.offset || gradientColoroffset, gradientData?.colors || gradientColors);
  return (
    <View style={[styles.defaultGradientContainerStyle, styles.centerAlign, { height: gradientButtonHeight }]}>
        <View style={styles.absoluteView}>
          <Svg height={gradientButtonHeight} width="100%">
            <Defs>
              <SVGRadialGradient
                id="grad"
                cx={radialRadiusx}
                cy={radialRadiusy}
                rx={radialRadiusRX}
                ry={radialRadiusRY}
                gradientUnits="userSpaceOnUse"
              >
                {colorList.map((value, index) => <Stop
                  key={`RadialGradientItem_${index}`}
                  offset={value.offset}
                  stopColor={value.color}
                  stopOpacity={value.opacity} />)}
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

RadialGradient.propTypes = {
  animatedStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.any.isRequired,
  gradientRadialRadius: PropTypes.number, 
  gradientColoroffset: PropTypes.array, 
  gradientColors: PropTypes.array, 
  gradientButtonHeight: PropTypes.number,
  gradientName: PropTypes.string,
  radialRadiusRX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  radialRadiusRY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  radialRadiusx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  radialRadiusy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default RadialGradient