import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const BarSpinnerButton: React.FC = () => {
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
      spinnerType="BarIndicator"
      onPress={handleButtonPress}
      animationType={'flipInY'}
      indicatorCount={10}
      animateHeight={50}
      animateWidth={200}
      animateRadius={10}
      animatedDuration={700}>
      <Text style={styles.buttonText}>Bar SpinnerButton</Text>
    </SpinnerButton>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#1aafb8',
  },
});

export default BarSpinnerButton;
