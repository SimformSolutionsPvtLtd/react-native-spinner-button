import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const DefaultOrBallSpinnerButton: React.FC = () => {
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

const style = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#893346',
  },
});

export default DefaultOrBallSpinnerButton;
