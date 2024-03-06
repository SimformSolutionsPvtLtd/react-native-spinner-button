import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RippleButton} from 'react-native-spinner-button';

const MyRippleButton: React.FC = () => {
  const buttonPress: () => void = () => {
    console.log('Button Clicked');
  };

  return (
    <RippleButton
      style={style.btnStyle}
      animatedDuration={2000}
      rippleColor="rgba(0,0,0,0.4)"
      onPress={() => {
        buttonPress();
      }}>
      <Text style={style.textStyle}>RippleButton</Text>
    </RippleButton>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    margin: 5,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default MyRippleButton;
