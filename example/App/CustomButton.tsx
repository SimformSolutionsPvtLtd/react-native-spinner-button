import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-spinner-button';

const CustomButton: React.FC = () => {
  const buttonPress: () => void = () => {
    console.log('Button Clicked');
  };

  return (
    <Button
      animationType="ripple-effect"
      onPress={buttonPress}
      style={style.btnStyle}>
      <Text style={style.textStyle}>RippleButton</Text>
    </Button>
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

export default CustomButton;
