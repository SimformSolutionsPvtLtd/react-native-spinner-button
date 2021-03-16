import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import { windowWidth, getColorList } from './utils';
import Svg, { Defs, RadialGradient as SVGRadialGradient, Rect, Stop } from 'react-native-svg'

const RadialGradient = ({
  buttonStyle, 
  children, 
  gradientRadialRadius, 
  gradientColoroffset = [], 
  gradientColors = [], 
  gradientButtonHeight, 
  radialRadiusx, 
  radialRadiusy, 
  radialRadiusRX, 
  radialRadiusRY
}) => {
  const colorList = getColorList(gradientColoroffset, gradientColors);
  return (
    <View style={[styles.defaultSpinnerContainerStyle, { height: gradientButtonHeight }]}>
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
            <Rect
              x={buttonStyle[0]?.margin || 10}
              y="0"
              width={windowWidth - buttonStyle[0]?.margin * 2}
              rx={gradientRadialRadius}
              height="100%"
              fill="url(#grad)"
            />
          </Svg>
        </View>
        {children}
      </View>
  );
};

RadialGradient.propTypes = {
  animationType: PropTypes.string,
  buttonStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  gradientRadialRadius: PropTypes.number, 
  gradientColoroffset: PropTypes.array, 
  gradientColors: PropTypes.array, 
  gradientButtonHeight: PropTypes.number,
  radialRadiusRX: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  radialRadiusRY: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  radialRadiusx: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  radialRadiusy: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired
}

export default RadialGradient