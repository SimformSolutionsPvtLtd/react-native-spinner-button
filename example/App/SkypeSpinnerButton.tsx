import React, { useCallback, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const SkypeSpinnerButton: React.FC = () => {
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
      spinnerType="SkypeIndicator"
      spinnerOptions={{
        maxScale: 2,
      }}
      onPress={handleButtonPress}
      gradientType={'Radial'}
      gradientColors={['#AAB6FB', '#30238B']}
      gradientColoroffset={['0%', '100%']}
      gradientColorAngle={0}
      gradientRadialRadius={10}
      gradientButtonHeight={50}
      radialRadiusx={'50%'}
      radialRadiusy={'50%'}
      radialRadiusRX={'50%'}
      radialRadiusRY={'50%'}>
      <Text style={styles.buttonText}>Skype SpinnerButton</Text>
    </SpinnerButton>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#123456',
  },
});

export default SkypeSpinnerButton;
