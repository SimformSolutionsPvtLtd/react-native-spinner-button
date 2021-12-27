import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const DefaultOrBallSpinnerButton = () => {
  const [isLoading, setLoading] = useState(false);

  const handleButtonPress = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <SpinnerButton
      buttonStyle={[styles.buttonStyle, {backgroundColor: '#893346'}]}
      isLoading={isLoading}
      onPress={handleButtonPress}
      indicatorCount={10}
      gradientType={'linear'}
      gradientColors={['#231557', '#44107A', '#FF1361', '#FFF800']}
      gradientColoroffset={['0%', '29%', '67%', '100%']}
      gradientColorAngle={90}
      gradientRadialRadius={10}
      gradientButtonHeight={50}
      borderStyle={styles.borderStyle}>
      <Text style={styles.buttonText}>Default Or Ball SpinnerButton</Text>
    </SpinnerButton>
  );
};

export default DefaultOrBallSpinnerButton;
