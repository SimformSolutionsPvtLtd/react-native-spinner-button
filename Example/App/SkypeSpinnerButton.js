import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const SkypeSpinnerButton = () => {
  const [isLoading, setLoading] = useState(false);

  const handleButtonPress = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <SpinnerButton
      buttonStyle={[styles.buttonStyle, {backgroundColor: '#123456'}]}
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

export default SkypeSpinnerButton;
