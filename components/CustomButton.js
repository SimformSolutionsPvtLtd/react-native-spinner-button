import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import * as Animatable from 'react-native-animatable';

const CustomButton = ({
    animationType, 
    buttonStyle, 
    isGradientType,
    onPress, 
    children
}) => {
  const style = isGradientType ? styles.padding : [styles.defaultButtonStyle, buttonStyle];
  return (
    <Animatable.View animation={animationType || 'fadeIn'}>
      <TouchableOpacity
        style={style}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </Animatable.View>
  );
};

CustomButton.propTypes = {
  animationType: PropTypes.string,
  buttonStyle: PropTypes.object,
  isGradientType: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

export default CustomButton;