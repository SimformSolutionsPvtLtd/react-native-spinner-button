import React, { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const WaveSpinnerButton = () => {
    const [isLoading, setLoading] = useState(false);

    const handleButtonPress = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    });

    return (
        <SpinnerButton
          buttonStyle={[
            styles.buttonStyle,
            { backgroundColor: '#9090ee' }
          ]}
          isLoading={isLoading}
          spinnerType='WaveIndicator'
          spinnerOptions={{
            waveMode: "outline"
          }}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Wave SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default WaveSpinnerButton;