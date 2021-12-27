import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const DotSpinnerButton = () => {
  const [isLoading, setLoading] = useState(false);

  const handleButtonPress = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <SpinnerButton
      buttonStyle={[styles.buttonStyle, {backgroundColor: '#bf57c3'}]}
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

export default DotSpinnerButton;
