import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const PulseSpinnerButton: React.FC = () => {
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
      spinnerType="PulseIndicator"
      onPress={handleButtonPress}>
      <Text style={styles.buttonText}>Pulse SpinnerButton</Text>
    </SpinnerButton>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#4CA0F7',
  },
});

export default PulseSpinnerButton;
