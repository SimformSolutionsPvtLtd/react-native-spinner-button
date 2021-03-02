import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import { windowWidth, getColorList, getAnglePercentageObject } from './utils'
import Svg, { Defs, LinearGradient as SVGLinearGradient, Rect, Stop } from 'react-native-svg'

const LinearGradient = ({
  buttonStyle, 
  children, 
  angle, 
  gradientRadialRadius, 
  gradientColoroffset = [], 
  gradientColors = [], 
  gradientButtonHeight
}) => {
  const angleObj = getAnglePercentageObject(angle)
  const colorList = getColorList(gradientColoroffset, gradientColors);
  return (
      <View style={[styles.defaultSpinnerContainerStyle, { height: gradientButtonHeight }]}>
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
                {colorList.map((value, index) => <Stop
                  key={`LinerGradientItem_${index}`}
                  offset={value.offset}
                  stopColor={value.color}
                  stopOpacity={value.opacity} />)}
              </SVGLinearGradient>
            </Defs>
            <Rect
              x={buttonStyle[0]?.margin || 10}
              y="0"
              rx={gradientRadialRadius}
              rY={0}
              height="100%"
              width={windowWidth - buttonStyle[0]?.margin * 2}
              fill="url(#grad)"
            />
          </Svg>
        </View>
        {children}
      </View>
  )
};

LinearGradient.propTypes = {
  buttonStyle: PropTypes.object,
  children: PropTypes.any.isRequired,
  angle: PropTypes.number,
  gradientRadialRadius: PropTypes.number, 
  gradientColoroffset: PropTypes.array, 
  gradientColors: PropTypes.array, 
  gradientButtonHeight: PropTypes.number
}

export default LinearGradient