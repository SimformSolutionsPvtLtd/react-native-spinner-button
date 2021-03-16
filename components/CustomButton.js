import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles/SpinnerButtonStyle';
import * as Animatable from 'react-native-animatable';

const CustomButton = ({
    animationType, 
    buttonStyle, 
    onPress, 
    children
}) => {
  return (
    <Animatable.View animation={animationType || 'fadeIn'}>
      <TouchableOpacity
        style={[styles.defaultButtonStyle, buttonStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default CustomButton;