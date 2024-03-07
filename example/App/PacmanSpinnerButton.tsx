import React, { useCallback, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const PacmanSpinnerButton: React.FC = () => {
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
      spinnerType="PacmanIndicator"
      onPress={handleButtonPress}
      gradientType={'linear'}
      gradientColors={['#363553', '#903775', '#E8458B',]}
      gradientColoroffset={['0%', '20%', '66%']}
      gradientColorAngle={25}
      gradientRadialRadius={10}
      gradientButtonHeight={50}
      animateHeight={70}
      animateWidth={70}
      animateRadius={35}>
      <Text style={styles.buttonText}>Pacman SpinnerButton</Text>
    </SpinnerButton>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#666666',
  },
});

export default PacmanSpinnerButton;
