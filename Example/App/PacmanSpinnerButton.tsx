import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
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
      gradientColors={['#893346', '#1aafb8', '#bf57c3', '#FF1361']}
      gradientColoroffset={['0%', '29%', '67%', '100%']}
      gradientColorAngle={90}
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
