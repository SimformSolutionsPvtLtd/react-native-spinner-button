import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
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
      gradientColors={['#44107A', '#FF1361', '#dead00', '#231557']}
      gradientColoroffset={['0%', '29%', '67%', '100%']}
      gradientColorAngle={90}
      gradientRadialRadius={10}
      gradientButtonHeight={50}
      radialRadiusx={'50%'}
      radialRadiusy={'50%'}
      radialRadiusRX={'60%'}
      radialRadiusRY={'40%'}>
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
