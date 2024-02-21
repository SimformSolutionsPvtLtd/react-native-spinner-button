import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const DotSpinnerButton: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleButtonPress = useCallback<() => void>(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <SpinnerButton
      buttonStyle={[styles.buttonStyle, style.btnStyle]}
      isLoading={isLoading}
      indicatorCount={10}
      size={10}
      spinnerType="DotIndicator"
      onPress={handleButtonPress}
      animationType={'bounceIn'}
      gradientType={'Radial'}
      gradientName={'Night Fade'}
      gradientRadialRadius={10}
      gradientButtonHeight={50}
      radialRadiusx={'50%'}
      radialRadiusy={'50%'}
      radialRadiusRX={'50%'}
      radialRadiusRY={'50%'}
      animateHeight={50}
      animateWidth={220}
      animateRadius={10}
      animatedDuration={700}>
      <Text style={styles.buttonText}>Dot SpinnerButton</Text>
    </SpinnerButton>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#bf57c3',
  },
});

export default DotSpinnerButton;
